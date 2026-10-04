import { systems, nodes, links, entanglements, sources } from './data.js';

const NS = 'http://www.w3.org/2000/svg';
const svg = document.querySelector('#diagram');
const scene = document.querySelector('#scene');
const datumLayer = document.querySelector('#datumLayer');
const fieldLayer = document.querySelector('#fieldLayer');
const edgeLayer = document.querySelector('#edgeLayer');
const knotLayer = document.querySelector('#knotLayer');
const nodeLayer = document.querySelector('#nodeLayer');
const annotationLayer = document.querySelector('#annotationLayer');
const panel = document.querySelector('#detailPanel');
const detail = document.querySelector('#detailContent');
const tooltip = document.querySelector('#tooltip');
const nodeById = Object.fromEntries(nodes.map(n => [n.id, n]));
const systemById = Object.fromEntries(systems.map(s => [s.id, s]));
const kindLabel = {stress:'chronic stress',acute:'acute stress',crisis:'system crisis',dependency:'shared dependency',pressure:'system pressure',feedback:'feedback condition'};
const linkEls = new Map(), nodeEls = new Map(), fieldEls = new Map(), knotEls = new Map();
const nodeLabelEls = new Map(), fieldLabelEls = new Map(), knotLabelEls = new Map();
const fieldLabelPlacement = {
  climate:{x:250,y:112}, food:{x:242,y:475}, infrastructure:{x:555,y:385},
  health:{x:690,y:875}, housing:{x:1085,y:535}, capacity:{x:1090,y:135}
};
const knotLabelPlacement = {
  north:{x:720,y:194,anchor:'start'}, recovery:{x:1115,y:365,anchor:'start'},
  movement:{x:1120,y:725,anchor:'start'}, affordability:{x:365,y:512,anchor:'start'},
  urban:{x:905,y:545,anchor:'start'}
};
const nodeLabelPlacement = {
  rain:{dx:-18,dy:31,anchor:'end'}, water:{dx:30,dy:31,anchor:'start',codeDx:22},
  transport:{dx:-20,dy:-40,anchor:'end'}, cooling:{dx:-22,dy:34,anchor:'end'},
  housinggap:{dx:24,dy:-24,anchor:'start'}, foodaccess:{dx:-20,dy:-24,anchor:'end'},
  telecom:{dx:18,dy:-24,anchor:'start'}, finance:{dx:-20,dy:-35,anchor:'end'},
  repair:{dx:20,dy:-23,anchor:'start'}, isolation:{dx:22,dy:30,anchor:'start'},
  northsupply:{dx:-18,dy:-21,anchor:'end'}, emergency:{dx:-18,dy:-22,anchor:'end'},
  rent:{dx:18,dy:32,anchor:'start'}, receiving:{dx:18,dy:31,anchor:'start'},
  healthdemand:{dx:-18,dy:34,anchor:'end'}, smoke:{dx:-18,dy:29,anchor:'end',codeDx:-25},
  foodprice:{dx:-18,dy:28,anchor:'end'}, displacement:{dx:-18,dy:-25,anchor:'end'}
};
const isMobileView = () => matchMedia('(max-width: 619px)').matches;
const defaultView = () => isMobileView() ? { x: -420, y: -105, k: 1.72 } : { x: 0, y: 0, k: 1 };
let view = defaultView(), drag = null, mobileView = isMobileView(), suppressFieldClick = false;

const el = (name, attrs = {}, parent) => {
  const node = document.createElementNS(NS, name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  if (parent) parent.appendChild(node);
  return node;
};
const htmlEscape = value => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const addAnnotationHit = (group,pad=3) => {
  const box=group.getBBox(),hit=el('rect',{x:box.x-pad,y:box.y-pad,width:box.width+pad*2,height:box.height+pad*2,class:'annotation-hit'});
  group.insertBefore(hit,group.firstChild);
};

function drawDatums(){
  for(let x=150;x<=1400;x+=100) el('line',{x1:x,y1:55,x2:x,y2:900,class:'datum'},datumLayer);
  for(let y=90;y<=890;y+=100) el('line',{x1:155,y1:y,x2:1415,y2:y,class:'datum'},datumLayer);
}

function closedSpline(points){
  const p = points;
  let d = `M ${p[0][0]} ${p[0][1]}`;
  for(let i=0;i<p.length;i++){
    const p0=p[(i-1+p.length)%p.length], p1=p[i], p2=p[(i+1)%p.length], p3=p[(i+2)%p.length];
    const c1=[p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6];
    const c2=[p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6];
    d+=` C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p2[0]} ${p2[1]}`;
  }
  return d+' Z';
}

function contourPoints(system, scale, ring){
  const pts=[];
  for(let i=0;i<18;i++){
    const a=Math.PI*2*i/18;
    const wobble=1+.07*Math.sin(a*3+system.phase+ring*.55)+.035*Math.cos(a*5-system.phase);
    pts.push([system.cx+Math.cos(a)*system.rx*scale*wobble,system.cy+Math.sin(a)*system.ry*scale*(1+.05*Math.sin(a*4+ring))]);
  }
  return pts;
}

function drawFields(){
  systems.forEach(system=>{
    const group=el('g',{'data-system':system.id,class:'system-field'},fieldLayer);
    const hit=el('ellipse',{cx:system.cx,cy:system.cy,rx:system.rx,ry:system.ry,fill:'transparent',class:'field-hit',tabindex:'0',role:'button','aria-label':system.label},group);
    for(let ring=0;ring<7;ring++) el('path',{d:closedSpline(contourPoints(system,1-ring*.065,ring)),class:`field-contour ${ring===0?'outer':''}`},group);
    const pos=fieldLabelPlacement[system.id]||{x:system.cx-system.rx*.62,y:system.cy-system.ry*.68};
    const labelGroup=el('g',{class:'annotation field-annotation','data-system':system.id},annotationLayer);
    const label=el('text',{x:pos.x,y:pos.y,class:'field-label'},labelGroup);label.textContent=`${system.code}${systems.indexOf(system)+1}  ${system.label.toUpperCase()}`;
    const sub=el('text',{x:pos.x,y:pos.y+15,class:'field-subtitle'},labelGroup);sub.textContent=system.subtitle;
    addAnnotationHit(labelGroup,4);
    const activate=()=>{if(!suppressFieldClick)selectSystem(system.id);};
    hit.addEventListener('pointerdown',e=>{
      e.stopPropagation();
      const annotation=document.elementsFromPoint(e.clientX,e.clientY).map(item=>item.closest?.('.annotation')).find(Boolean);
      if(annotation?.classList.contains('node-annotation')){selectNode(annotation.dataset.id);return;}
      if(annotation?.classList.contains('knot-annotation')){selectKnot(annotation.dataset.id);return;}
      activate();
    });hit.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}});
    labelGroup.addEventListener('click',activate);
    fieldEls.set(system.id,group);
    fieldLabelEls.set(system.id,labelGroup);
  });
}

function edgePath(a,b,index){
  const dx=b.x-a.x,dy=b.y-a.y,len=Math.max(1,Math.hypot(dx,dy));
  const bend=((index%5)-2)*10 + (a.system===b.system?4:18);
  const cx=(a.x+b.x)/2-dy/len*bend,cy=(a.y+b.y)/2+dx/len*bend;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

function relationClass(link){
  if(link.evidence==='hypothesis'||link.type==='feeds back') return 'feedback';
  return nodeById[link.from].system===nodeById[link.to].system?'internal':'transfer';
}

function drawEdges(){
  links.forEach((link,index)=>{
    const a=nodeById[link.from],b=nodeById[link.to],kind=relationClass(link);
    const path=el('path',{d:edgePath(a,b,index),class:`edge ${kind}`,'data-id':link.id,tabindex:'0',role:'button','aria-label':`${a.label} ${link.type} ${b.label}`},edgeLayer);
    path.addEventListener('click',e=>{e.stopPropagation();selectLink(link.id);});
    path.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectLink(link.id);}});
    bindTip(path,`${a.label} ${link.type} ${b.label}`);
    linkEls.set(link.id,path);
  });
}

function drawKnots(){
  entanglements.forEach((knot,index)=>{
    const g=el('g',{class:'knot','data-id':knot.id,tabindex:'0',role:'button','aria-label':knot.label},knotLayer);
    el('circle',{cx:knot.x,cy:knot.y,r:39,class:'knot-ring'},g);el('circle',{cx:knot.x,cy:knot.y,r:24,class:'knot-ring'},g);el('circle',{cx:knot.x,cy:knot.y,r:4,class:'knot-core'},g);
    const pos=knotLabelPlacement[knot.id]||{x:knot.x+30,y:knot.y-29,anchor:'start'};
    const labelGroup=el('g',{class:'annotation knot-annotation','data-id':knot.id,tabindex:'0',role:'button','aria-label':knot.label},annotationLayer);
    const tx=el('text',{x:pos.x,y:pos.y,'text-anchor':pos.anchor,class:'knot-label'},labelGroup);tx.textContent=`P${String(index+1).padStart(2,'0')}  ${knot.label.toUpperCase()}`;
    addAnnotationHit(labelGroup,4);
    const activate=()=>selectKnot(knot.id);labelGroup.addEventListener('pointerdown',e=>{e.stopPropagation();suppressFieldClick=true;setTimeout(()=>suppressFieldClick=false,250);activate();});[g,labelGroup].forEach(target=>{target.addEventListener('click',activate);target.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}});bindTip(target,knot.label);});
    knotEls.set(knot.id,g);
    knotLabelEls.set(knot.id,labelGroup);
  });
}

function drawNodes(){
  nodes.forEach((node,index)=>{
    const g=el('g',{class:`node ${node.kind}`,'data-id':node.id,tabindex:'0',role:'button','aria-label':node.label},nodeLayer);
    el('circle',{cx:node.x,cy:node.y,r:13,class:'halo'},g);
    if(node.kind==='stress') el('rect',{x:node.x-5,y:node.y-5,width:10,height:10,class:'core'},g);
    else if(node.kind==='dependency') el('rect',{x:node.x-5.5,y:node.y-5.5,width:11,height:11,class:'core'},g);
    else el('circle',{cx:node.x,cy:node.y,r:node.kind==='crisis'?6:5,class:'core'},g);
    const placement=nodeLabelPlacement[node.id]||{dx:node.x<1030?13:-13,dy:18,anchor:node.x<1030?'start':'end'};
    const labelGroup=el('g',{class:'annotation node-annotation','data-id':node.id,tabindex:'0',role:'button','aria-label':node.label},annotationLayer);
    const code=el('text',{x:node.x+(placement.codeDx??11),y:node.y+(placement.codeDy??-10),class:'node-code'},labelGroup);code.textContent=`N${String(index+1).padStart(2,'0')}`;
    const label=el('text',{x:node.x+placement.dx,y:node.y+placement.dy,'text-anchor':placement.anchor,class:'node-label'},labelGroup);label.textContent=node.label;
    addAnnotationHit(labelGroup,3);
    const activate=()=>selectNode(node.id);labelGroup.addEventListener('pointerdown',e=>{e.stopPropagation();suppressFieldClick=true;setTimeout(()=>suppressFieldClick=false,250);activate();});[g,labelGroup].forEach(target=>{target.addEventListener('click',e=>{e.stopPropagation();activate();});target.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate();}});bindTip(target,`${node.label} · ${node.status}`);});
    nodeEls.set(node.id,g);
    nodeLabelEls.set(node.id,labelGroup);
  });
}

function bindTip(target,text){
  target.addEventListener('pointerenter',e=>{tooltip.textContent=text;tooltip.hidden=false;moveTip(e);});
  target.addEventListener('pointermove',moveTip);target.addEventListener('pointerleave',()=>tooltip.hidden=true);
}
function moveTip(e){tooltip.style.left=`${Math.min(innerWidth-280,e.clientX+14)}px`;tooltip.style.top=`${Math.min(innerHeight-80,e.clientY+14)}px`;}

function clearFocus(){
  [...nodeEls.values(),...nodeLabelEls.values(),...linkEls.values(),...fieldEls.values(),...fieldLabelEls.values(),...knotEls.values(),...knotLabelEls.values()].forEach(x=>x.classList.remove('dim','active','trace-active'));
  document.querySelectorAll('.field-filter button').forEach(b=>b.classList.remove('active'));
}
function applyNodeSet(ids,activeId){
  const set=new Set(ids), involvedSystems=new Set(ids.map(id=>nodeById[id]?.system).filter(Boolean));
  nodeEls.forEach((el,id)=>el.classList.toggle('dim',!set.has(id)));
  nodeLabelEls.forEach((el,id)=>el.classList.toggle('dim',!set.has(id)));
  linkEls.forEach((el,id)=>{const l=links.find(x=>x.id===id),keep=set.has(l.from)&&set.has(l.to);el.classList.toggle('dim',!keep);el.classList.toggle('trace-active',keep);});
  fieldEls.forEach((el,id)=>{const dim=!involvedSystems.has(id);el.classList.toggle('dim',dim);fieldLabelEls.get(id)?.classList.toggle('dim',dim);});
  knotEls.forEach((el,id)=>{const k=entanglements.find(x=>x.id===id),dim=!k.nodes.some(n=>set.has(n));el.classList.toggle('dim',dim);knotLabelEls.get(id)?.classList.toggle('dim',dim);});
  if(activeId&&nodeEls.has(activeId)){nodeEls.get(activeId).classList.add('active');nodeLabelEls.get(activeId)?.classList.add('active');}
}

function selectSystem(id){
  clearFocus();const direct=new Set(nodes.filter(n=>n.system===id).map(n=>n.id));
  links.forEach(l=>{if(direct.has(l.from)||direct.has(l.to)){direct.add(l.from);direct.add(l.to);}});
  applyNodeSet([...direct]);fieldEls.get(id).classList.remove('dim');fieldEls.get(id).classList.add('active');fieldLabelEls.get(id)?.classList.remove('dim');fieldLabelEls.get(id)?.classList.add('active');
  document.querySelector(`.field-filter button[data-system="${id}"]`)?.classList.add('active');
  const s=systemById[id],own=nodes.filter(n=>n.system===id);
  showPanel(`<span class="detail-kicker">SYSTEM FIELD ${htmlEscape(s.code)}</span><h2>${htmlEscape(s.label)}</h2><p>${htmlEscape(s.subtitle[0].toUpperCase()+s.subtitle.slice(1))}.</p><h3>Conditions in this field</h3><div class="ingredient-list">${own.map(n=>`<button data-node="${n.id}">${htmlEscape(n.label)}</button>`).join('')}</div><h3>How to read it</h3><p>The boundary organizes the conditions on the page. Pressure often crosses it, which is why red lines continue into neighbouring fields and dashed black lines return to earlier conditions.</p>${sourceHtml(s.sources)}`);
}
function selectNode(id){
  clearFocus();const related=links.filter(l=>l.from===id||l.to===id),ids=new Set([id]);related.forEach(l=>{ids.add(l.from);ids.add(l.to)});applyNodeSet([...ids],id);
  const n=nodeById[id],s=systemById[n.system];
  showPanel(`<span class="detail-kicker">${htmlEscape(s.label)} / ${htmlEscape(kindLabel[n.kind]||n.kind)}</span><h2>${htmlEscape(n.label)}</h2><span class="status">${htmlEscape(n.status)}</span><p>${htmlEscape(n.copy)}</p><h3>How it enters the wider system</h3><p>${htmlEscape(n.why)}</p>${visualHtml(n.visual)}<h3>Direct relationships</h3><div class="ingredient-list">${related.map(l=>{const other=nodeById[l.from===id?l.to:l.from];return `<button data-link="${l.id}">${htmlEscape(other.label)}</button>`}).join('')}</div>${sourceHtml(n.sources)}`);
}
function selectLink(id){
  clearFocus();const l=links.find(x=>x.id===id),a=nodeById[l.from],b=nodeById[l.to];applyNodeSet([a.id,b.id]);linkEls.get(id).classList.add('active');
  showPanel(`<span class="detail-kicker">RELATIONSHIP ${l.id}</span><h2>${htmlEscape(a.label)}<br><span style="color:#df332f;font-weight:400">${htmlEscape(l.type)}</span><br>${htmlEscape(b.label)}</h2><span class="status">${htmlEscape(l.evidence)}</span><p>${htmlEscape(l.copy)}</p><h3>What this line means</h3><p>The line follows one way that pressure may move. Conditions elsewhere can change its intensity or interrupt it before the next effect appears.</p>${sourceHtml(l.sources)}`);
}
function selectKnot(id){
  clearFocus();const k=entanglements.find(x=>x.id===id);applyNodeSet(k.nodes);knotEls.get(id).classList.add('active');knotLabelEls.get(id)?.classList.add('active');
  showPanel(`<span class="detail-kicker">CRISIS ENTANGLEMENT</span><h2>${htmlEscape(k.label)}</h2><p>${htmlEscape(k.copy)}</p><p class="detail-question">${htmlEscape(k.focus)}</p><h3>Conditions involved</h3><div class="ingredient-list">${k.nodes.map(id=>`<button data-node="${id}">${htmlEscape(nodeById[id].label)}</button>`).join('')}</div>${sourceHtml(k.sources)}`);
}
function visualHtml(visual){
  if(!visual)return '';
  const source=sources[visual.source];
  const credit=source?` <a href="${source.url}" target="_blank" rel="noreferrer">${htmlEscape(source.short)}</a>`:'';
  return `<figure class="evidence-figure"><img src="${visual.src}" alt="${htmlEscape(visual.alt)}"><figcaption>${htmlEscape(visual.caption)}${credit}</figcaption></figure>`;
}
function sourceHtml(ids=[]){return `<h3>Sources</h3><ul class="source-list">${ids.map(id=>sources[id]?`<li><a href="${sources[id].url}" target="_blank" rel="noreferrer">${htmlEscape(sources[id].short)}. ${htmlEscape(sources[id].title)}</a></li>`:'').join('')}</ul>`;}
function showPanel(content){detail.innerHTML=content;panel.classList.add('open');detail.querySelectorAll('[data-node]').forEach(b=>b.addEventListener('click',()=>selectNode(b.dataset.node)));detail.querySelectorAll('[data-link]').forEach(b=>b.addEventListener('click',()=>selectLink(b.dataset.link)));}
function closePanel(){panel.classList.remove('open');}

function buildControls(){
  const filter=document.querySelector('#fieldFilter');systems.forEach(s=>{const b=document.createElement('button');b.textContent=`${s.code}${systems.indexOf(s)+1} ${s.label}`;b.dataset.system=s.id;b.addEventListener('click',()=>selectSystem(s.id));filter.appendChild(b);});
}

function setView(){scene.setAttribute('transform',`translate(${view.x} ${view.y}) scale(${view.k})`);}
function zoomAt(factor,cx=725,cy=470){const nk=Math.max(.72,Math.min(3.5,view.k*factor)),ratio=nk/view.k;view.x=cx-(cx-view.x)*ratio;view.y=cy-(cy-view.y)*ratio;view.k=nk;setView();}
svg.addEventListener('wheel',e=>{e.preventDefault();const r=svg.getBoundingClientRect(),cx=(e.clientX-r.left)/r.width*1450,cy=(e.clientY-r.top)/r.height*940;zoomAt(e.deltaY<0?1.12:.89,cx,cy);},{passive:false});
svg.addEventListener('pointerdown',e=>{if(e.target.closest('.node,.edge,.knot,.field-hit,.annotation'))return;drag={x:e.clientX,y:e.clientY,ox:view.x,oy:view.y};svg.setPointerCapture(e.pointerId);svg.classList.add('dragging');});
svg.addEventListener('pointermove',e=>{if(!drag)return;const r=svg.getBoundingClientRect();view.x=drag.ox+(e.clientX-drag.x)/r.width*1450;view.y=drag.oy+(e.clientY-drag.y)/r.height*940;setView();});
svg.addEventListener('pointerup',()=>{drag=null;svg.classList.remove('dragging')});
svg.addEventListener('click',e=>{if(e.target===svg||e.target.id==='datumLayer'){clearFocus();closePanel();}});

document.querySelector('#zoomIn').addEventListener('click',()=>zoomAt(1.2));document.querySelector('#zoomOut').addEventListener('click',()=>zoomAt(.82));document.querySelector('#fitView').addEventListener('click',()=>{view=defaultView();setView();clearFocus();});
document.querySelector('#homeButton').addEventListener('click',()=>{view=defaultView();setView();clearFocus();closePanel();});document.querySelector('#closePanel').addEventListener('click',closePanel);
document.querySelector('#aboutButton').addEventListener('click',()=>document.querySelector('#aboutDialog').showModal());document.querySelectorAll('[data-close-dialog]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
addEventListener('resize',()=>{const next=isMobileView();if(next!==mobileView){mobileView=next;view=defaultView();setView();}});

drawDatums();drawFields();drawEdges();drawKnots();drawNodes();buildControls();setView();
