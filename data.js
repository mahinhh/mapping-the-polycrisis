export const sources = {
  "tooze": {
    "short": "Tooze, 2022",
    "title": "Defining polycrisis: from crisis pictures to the crisis matrix",
    "url": "https://adamtooze.com/2022/06/24/chartbook-130-defining-polycrisis-from-crisis-pictures-to-the-crisis-matrix/"
  },
  "cascade": {
    "short": "Lawrence et al., 2022",
    "title": "What is a global polycrisis?",
    "url": "https://cascadeinstitute.org/technical-paper/what-is-a-global-polycrisis/"
  },
  "climate": {
    "short": "ECCC, 2026",
    "title": "Canada's Changing Climate Report: headline statements",
    "url": "https://www.canada.ca/en/environment-climate-change/services/science-technology/changing-climate-report-2026/headline-statements.html"
  },
  "ground": {
    "short": "ECCC, 2026",
    "title": "Changes in the cryosphere",
    "url": "https://www.canada.ca/en/environment-climate-change/services/science-technology/changing-climate-report-2026/cccr-chapter-6-en.html"
  },
  "heat": {
    "short": "BC Coroners Service, 2022",
    "title": "Extreme Heat Death Review Panel Report",
    "url": "https://www2.gov.bc.ca/assets/gov/birth-adoption-death-marriage-and-divorce/deaths/coroners-service/death-review-panel/extreme_heat_death_review_panel_report.pdf"
  },
  "fire": {
    "short": "NRCan, 2024",
    "title": "Canada's record-breaking wildfires in 2023",
    "url": "https://natural-resources.canada.ca/stories/simply-science/canada-s-record-breaking-wildfires-2023-fiery-wake-call"
  },
  "flood": {
    "short": "Government of B.C.",
    "title": "B.C. Highway Flood Recovery Projects",
    "url": "https://www2.gov.bc.ca/gov/content/transportation-projects/bc-highway-flood-recovery"
  },
  "assets": {
    "short": "Statistics Canada, 2024",
    "title": "Core Public Infrastructure Survey: Replacement values, 2022",
    "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/241021/dq241021b-eng.htm"
  },
  "crops": {
    "short": "Statistics Canada, 2021",
    "title": "Production of principal field crops, November 2021",
    "url": "https://www150.statcan.gc.ca/n1/daily-quotidien/211203/dq211203b-eng.htm"
  },
  "health": {
    "short": "PHAC, 2022",
    "title": "Mobilizing Public Health Action on Climate Change",
    "url": "https://www.canada.ca/en/public-health/corporate/publications/chief-public-health-officer-reports-state-public-health-canada/state-public-health-canada-2022/report.html"
  },
  "care": {
    "short": "CIHI, 2025",
    "title": "Health workforce, 2024: Supply and direct care",
    "url": "https://www.cihi.ca/en/the-state-of-the-health-workforce-in-canada-2024/health-workforce-2024-supply-and-direct-care"
  },
  "housing": {
    "short": "CMHC, 2025",
    "title": "Housing supply gaps estimates",
    "url": "https://www.cmhc-schl.gc.ca/observer/2025/updating-canada-housing-supply-shortages-new-housing-supply-gap-estimates"
  },
  "displacement": {
    "short": "IDMC, 2024",
    "title": "Global Report on Internal Displacement",
    "url": "https://api.internal-displacement.org/sites/default/files/publications/documents/IDMC-GRID-2024-Global-Report-on-Internal-Displacement.pdf"
  },
  "north": {
    "short": "Transport Canada, 2026",
    "title": "Arctic Infrastructure Fund",
    "url": "https://tc.canada.ca/en/programs/arctic-infrastructure-fund"
  },
  "water": {
    "short": "City of Guelph, 2022",
    "title": "Water Supply Master Plan",
    "url": "https://guelph.ca/plans-and-strategies/water-supply-master-plan/"
  },
  "ipcc": {
    "short": "IPCC, 2023",
    "title": "AR6 Synthesis Report",
    "url": "https://www.ipcc.ch/report/ar6/syr/summary-for-policymakers/"
  },
  "panarchy": {
    "short": "Gunderson & Holling, 2002",
    "title": "Panarchy",
    "url": "https://www.jstor.org/stable/jj.41003716"
  }
};

export const systems = [
  {
    "id": "climate",
    "code": "C",
    "label": "Climate + ecology",
    "subtitle": "hazards and changing baselines",
    "cx": 430,
    "cy": 250,
    "rx": 285,
    "ry": 200,
    "phase": 0.25,
    "sources": ["climate", "ipcc", "fire", "ground"]
  },
  {
    "id": "food",
    "code": "F",
    "label": "Food + water",
    "subtitle": "production systems and household access",
    "cx": 405,
    "cy": 655,
    "rx": 270,
    "ry": 205,
    "phase": 1.1,
    "sources": ["crops", "north", "water", "health", "housing"]
  },
  {
    "id": "infrastructure",
    "code": "I",
    "label": "Critical infrastructure",
    "subtitle": "essential networks and physical access",
    "cx": 760,
    "cy": 430,
    "rx": 300,
    "ry": 220,
    "phase": 2.15,
    "sources": ["assets", "flood", "ground", "heat", "north"]
  },
  {
    "id": "health",
    "code": "H",
    "label": "Health + habitability",
    "subtitle": "health exposure and access to care",
    "cx": 800,
    "cy": 740,
    "rx": 275,
    "ry": 185,
    "phase": 3.05,
    "sources": ["health", "heat", "care", "fire"]
  },
  {
    "id": "housing",
    "code": "D",
    "label": "Housing + displacement",
    "subtitle": "shelter and population movement",
    "cx": 1125,
    "cy": 680,
    "rx": 270,
    "ry": 205,
    "phase": 4.15,
    "sources": ["housing", "displacement", "heat", "health"]
  },
  {
    "id": "capacity",
    "code": "G",
    "label": "Institutional capacity",
    "subtitle": "public response and fiscal capacity",
    "cx": 1120,
    "cy": 330,
    "rx": 280,
    "ry": 205,
    "phase": 5.2,
    "sources": ["assets", "flood", "health", "panarchy"]
  }
];

export const nodes = [
  {
    "id": "warming",
    "label": "Changing climate baseline",
    "system": "climate",
    "x": 335,
    "y": 155,
    "kind": "stress",
    "status": "observed + projected",
    "copy": "Canada has already become warmer. Further warming changes the conditions in which heat and heavy rainfall develop. Fire weather and thaw respond as well.",
    "why": "Several hazards may become more likely during the same period. Separate systems then have less time to recover between events.",
    "sources": [
      "climate",
      "ipcc"
    ]
  },
  {
    "id": "heat",
    "label": "Extreme heat",
    "system": "climate",
    "x": 500,
    "y": 205,
    "kind": "acute",
    "status": "observed",
    "copy": "A short period of extreme heat can make homes unsafe within hours, especially when a building traps heat or has no reliable cooling.",
    "why": "The same hot weather raises electricity use and increases health risk. Housing quality changes the amount of exposure inside the home.",
    "visual": {
      "src": "bc-heat-deaths-map.png",
      "alt": "Map of heat-related deaths by injury location in British Columbia during the 2021 extreme heat event",
      "caption": "Injury locations for heat-related deaths during British Columbia's 2021 extreme heat event. Figure 5 from the coroner review.",
      "source": "heat"
    },
    "sources": [
      "heat",
      "climate"
    ]
  },
  {
    "id": "wildfire",
    "label": "Wildfire",
    "system": "climate",
    "x": 250,
    "y": 275,
    "kind": "crisis",
    "status": "observed",
    "copy": "Canada's 2023 fires burned about 15 million hectares. Smoke travelled beyond the burn areas, while evacuation and infrastructure damage remained closer to the fires.",
    "why": "One fire season may create pressure on health and housing. Transportation systems and public budgets may face separate demands.",
    "sources": [
      "fire",
      "displacement"
    ]
  },
  {
    "id": "drought",
    "label": "Prairie drought",
    "system": "climate",
    "x": 425,
    "y": 355,
    "kind": "crisis",
    "status": "observed",
    "copy": "The 2021 drought reduced crop yields across the Prairies and showed how quickly dry conditions can affect a major food-producing region.",
    "why": "The loss first appears on farms and then reaches food prices. Household budgets feel the change, while municipalities may face new decisions about water use.",
    "sources": [
      "crops",
      "climate"
    ]
  },
  {
    "id": "rain",
    "label": "Extreme rainfall",
    "system": "climate",
    "x": 580,
    "y": 300,
    "kind": "acute",
    "status": "projected",
    "copy": "Heavy rainfall can overwhelm drainage systems and wash out roads. Communities may then lose access to routes they depend on every day.",
    "why": "The location of the rain and the condition of local infrastructure shape the damage. Repair time determines how long the disruption continues.",
    "sources": [
      "climate",
      "flood"
    ]
  },
  {
    "id": "thaw",
    "label": "Permafrost degradation",
    "system": "climate",
    "x": 615,
    "y": 135,
    "kind": "stress",
    "status": "observed + projected",
    "copy": "Permafrost thaw changes the ground beneath northern roads, runways, buildings and utilities. Places with ice-rich soil are especially sensitive.",
    "why": "When the ground moves, the same damage can interfere with the delivery of food, fuel, construction material and medical care.",
    "visual": {
      "src": "permafrost-warming-canada.png",
      "alt": "Government of Canada map of measured permafrost warming rates across northern Canada",
      "caption": "Measured permafrost warming rates at monitoring sites across northern Canada. Figure 6.30 from Canada's Changing Climate Report 2026.",
      "source": "ground"
    },
    "sources": [
      "ground",
      "north"
    ]
  },
  {
    "id": "crop",
    "label": "Crop production loss",
    "system": "food",
    "x": 315,
    "y": 580,
    "kind": "crisis",
    "status": "observed",
    "copy": "National wheat production fell 38.5% in 2021 as both yield and harvested area declined during the Prairie drought.",
    "why": "A loss at the point of production can later appear as a supply and affordability problem in households far from the affected fields.",
    "sources": [
      "crops"
    ]
  },
  {
    "id": "foodprice",
    "label": "Food-price pressure",
    "system": "food",
    "x": 470,
    "y": 665,
    "kind": "pressure",
    "status": "interpreted",
    "copy": "Food prices respond to lower production and disrupted transportation. Energy costs add another pressure.",
    "why": "This is one of the ways an environmental event in one region enters the everyday budget of a household somewhere else.",
    "sources": [
      "crops",
      "health"
    ]
  },
  {
    "id": "foodaccess",
    "label": "Household food insecurity",
    "system": "food",
    "x": 505,
    "y": 785,
    "kind": "crisis",
    "status": "interpreted",
    "copy": "When essential costs rise faster than income, households must decide which need can be reduced or delayed.",
    "why": "A constrained budget connects shelter and nutrition. Transportation costs draw from that income, and poor nutrition affects health.",
    "sources": [
      "health",
      "housing"
    ]
  },
  {
    "id": "northsupply",
    "label": "Northern resupply",
    "system": "food",
    "x": 285,
    "y": 740,
    "kind": "dependency",
    "status": "documented context",
    "copy": "Many northern communities depend on seasonal surface routes or flights for essential supplies.",
    "why": "A disruption on one route may affect the availability and cost of food. Fuel and medicine may arrive late. Repair materials may face the same delay.",
    "sources": [
      "north"
    ]
  },
  {
    "id": "water",
    "label": "Municipal water capacity",
    "system": "food",
    "x": 570,
    "y": 570,
    "kind": "dependency",
    "status": "local evidence",
    "copy": "A region may have freshwater nearby while its local system lacks enough treatment or distribution capacity. Storage creates a separate limit.",
    "why": "Drought and population growth may reach the same municipal service. Ageing equipment adds pressure that began before the hazard.",
    "sources": [
      "water",
      "assets"
    ]
  },
  {
    "id": "ageing",
    "label": "Ageing public assets",
    "system": "infrastructure",
    "x": 720,
    "y": 325,
    "kind": "stress",
    "status": "observed",
    "copy": "A considerable share of Canadian public infrastructure is already rated in poor or very poor condition and carries a large replacement value.",
    "why": "Existing wear affects how an asset performs during a hazard and how long the surrounding community waits for normal service to return.",
    "sources": [
      "assets"
    ]
  },
  {
    "id": "gridload",
    "label": "Peak electricity demand",
    "system": "infrastructure",
    "x": 665,
    "y": 430,
    "kind": "pressure",
    "status": "interpreted",
    "copy": "Electricity demand often rises quickly during extreme heat because many people need cooling during the same hours of the day.",
    "why": "The weather creating the danger also increases demand for one of the main protections from it.",
    "sources": [
      "heat",
      "climate"
    ]
  },
  {
    "id": "outage",
    "label": "Electricity instability",
    "system": "infrastructure",
    "x": 825,
    "y": 470,
    "kind": "crisis",
    "status": "conditional",
    "copy": "Electricity becomes unstable when high demand meets limited capacity or damaged equipment. Local failures may add to the strain.",
    "why": "An outage may remove cooling and communications at the same time. Parts of healthcare operation also depend on electricity.",
    "sources": [
      "assets",
      "heat"
    ]
  },
  {
    "id": "transport",
    "label": "Transport interruption",
    "system": "infrastructure",
    "x": 760,
    "y": 565,
    "kind": "crisis",
    "status": "observed",
    "copy": "Climate hazards and thawing ground can close roads or damage the few routes available to a region.",
    "why": "Food delivery, evacuation, repair crews and access to medical care may all depend on the same corridor.",
    "sources": [
      "flood",
      "ground"
    ]
  },
  {
    "id": "telecom",
    "label": "Telecommunications dependency",
    "system": "infrastructure",
    "x": 925,
    "y": 385,
    "kind": "dependency",
    "status": "interpreted",
    "copy": "Emergency coordination and payment systems rely on communication networks. Parts of transportation depend on them as well.",
    "why": "A communications failure makes it harder for several services to respond, even when their own buildings and equipment remain intact.",
    "sources": [
      "assets"
    ]
  },
  {
    "id": "smoke",
    "label": "Smoke exposure",
    "system": "health",
    "x": 670,
    "y": 675,
    "kind": "crisis",
    "status": "observed",
    "copy": "Wildfire smoke can create hazardous air hundreds or thousands of kilometres from the fire itself.",
    "why": "Healthcare demand may rise while a region is already dealing with heat or evacuation. A loss of electricity may make the situation harder to manage.",
    "sources": [
      "fire",
      "health"
    ]
  },
  {
    "id": "cooling",
    "label": "Access to cooling",
    "system": "health",
    "x": 795,
    "y": 625,
    "kind": "dependency",
    "status": "uneven access",
    "copy": "Safe indoor temperatures depend on electricity, building quality, working equipment and the ability to pay the operating cost.",
    "why": "Access to cooling connects energy use with housing conditions. Household income determines who can afford that protection.",
    "visual": {
      "src": "bc-indoor-temperature-chart.png",
      "alt": "Chart comparing indoor temperatures with and without air conditioning against outdoor temperature during the 2021 heat event in Abbotsford",
      "caption": "Indoor temperatures stayed hazardous without air conditioning even after outdoor temperatures fell. Figure 6 from the B.C. coroner review.",
      "source": "heat"
    },
    "sources": [
      "heat",
      "housing"
    ]
  },
  {
    "id": "healthdemand",
    "label": "Healthcare surge",
    "system": "health",
    "x": 900,
    "y": 730,
    "kind": "pressure",
    "status": "documented pathway",
    "copy": "Heat, smoke, displacement and interrupted access to medication or transportation may all increase demand for care during the same period.",
    "why": "The difficulty appears when these needs reach the healthcare system and emergency response at the same time.",
    "sources": [
      "health",
      "heat"
    ]
  },
  {
    "id": "staffing",
    "label": "Healthcare capacity",
    "system": "health",
    "x": 790,
    "y": 820,
    "kind": "stress",
    "status": "observed constraint",
    "copy": "Millions of people in Canada lacked a regular health provider in 2024, and workforce availability continued to vary by profession and region.",
    "why": "When staffing is already tight, a sudden increase in patients leaves less room to absorb another emergency.",
    "sources": [
      "care"
    ]
  },
  {
    "id": "isolation",
    "label": "Social isolation",
    "system": "health",
    "x": 630,
    "y": 810,
    "kind": "stress",
    "status": "interpreted",
    "copy": "People who live alone or lack transportation and nearby support can be difficult to reach during an emergency. Delayed information increases that difficulty.",
    "why": "A physical hazard becomes more dangerous when warnings or access to care arrive late.",
    "sources": [
      "heat",
      "health"
    ]
  },
  {
    "id": "housinggap",
    "label": "Housing shortage",
    "system": "housing",
    "x": 1080,
    "y": 625,
    "kind": "stress",
    "status": "observed + modelled",
    "copy": "CMHC estimates that housing construction must rise substantially if Canada is to restore the level of affordability recorded in 2019 by 2035.",
    "why": "Low vacancy and high cost limit the ability of a city to shelter households arriving after an evacuation or longer displacement.",
    "sources": [
      "housing"
    ]
  },
  {
    "id": "displacement",
    "label": "Wildfire displacement",
    "system": "housing",
    "x": 980,
    "y": 720,
    "kind": "crisis",
    "status": "observed",
    "copy": "Canada recorded about 185,000 wildfire displacement movements in 2023. The number counts movements, so one person may be recorded more than once and some returns may have occurred quickly.",
    "why": "Movement carries the effects of a fire into shelter and healthcare in another place. Transportation and municipal services also receive the pressure.",
    "visual": {
      "src": "canada-displacement-map.png",
      "alt": "IDMC map showing internal displacement movements in Canada and the Americas during 2023",
      "caption": "Canada on IDMC's map of internal displacements by conflict and disasters in 2023. The figure reports 192,000 disaster movements across all hazards.",
      "source": "displacement"
    },
    "sources": [
      "displacement"
    ]
  },
  {
    "id": "receiving",
    "label": "Receiving-city demand",
    "system": "housing",
    "x": 1175,
    "y": 765,
    "kind": "pressure",
    "status": "conditional",
    "copy": "Evacuation and longer movement increase demand for housing, care, schools and transportation in the communities receiving people.",
    "why": "The condition of the receiving city matters because available housing and services determine how much pressure it can absorb.",
    "sources": [
      "displacement",
      "housing"
    ]
  },
  {
    "id": "rent",
    "label": "Household shelter cost",
    "system": "housing",
    "x": 1270,
    "y": 655,
    "kind": "stress",
    "status": "observed context",
    "copy": "A household spending more on shelter has less money available for food, cooling, insurance, transportation or temporary relocation.",
    "why": "The cost of housing shapes how well people can protect themselves when a separate climate event occurs.",
    "sources": [
      "housing"
    ]
  },
  {
    "id": "emergency",
    "label": "Emergency-service demand",
    "system": "capacity",
    "x": 1010,
    "y": 280,
    "kind": "pressure",
    "status": "interpreted",
    "copy": "Heat and fire require different forms of response. Flooding or displacement may occur during the same period, drawing on the same staff and communications capacity.",
    "why": "Several emergencies occurring close together expose the limits of resources shared across departments and jurisdictions.",
    "sources": [
      "health",
      "flood"
    ]
  },
  {
    "id": "damage",
    "label": "Infrastructure damage",
    "system": "capacity",
    "x": 1125,
    "y": 215,
    "kind": "crisis",
    "status": "observed",
    "copy": "The 2021 floods in British Columbia damaged highways at many locations and created recovery work that continued for years.",
    "why": "Physical damage develops into a longer institutional problem when access, labour, material and funding are limited.",
    "sources": [
      "flood"
    ]
  },
  {
    "id": "repair",
    "label": "Repair delay",
    "system": "capacity",
    "x": 1230,
    "y": 320,
    "kind": "pressure",
    "status": "observed + conditional",
    "copy": "Repairs compete for skilled labour, construction material, site access and public funding. The length of the delay changes from one asset and community to another.",
    "why": "A community may remain exposed while repairs continue and another seasonal hazard begins.",
    "sources": [
      "flood",
      "assets"
    ]
  },
  {
    "id": "finance",
    "label": "Municipal fiscal pressure",
    "system": "capacity",
    "x": 1140,
    "y": 430,
    "kind": "stress",
    "status": "interpreted",
    "copy": "Emergency response and repeated repair draw from budgets that also support maintenance and renewal. The same budgets pay for everyday services.",
    "why": "Money spent recovering from one event changes how much preparation is possible before the next one.",
    "sources": [
      "assets"
    ]
  },
  {
    "id": "renewal",
    "label": "Deferred renewal",
    "system": "capacity",
    "x": 1245,
    "y": 470,
    "kind": "feedback",
    "status": "hypothesis",
    "copy": "When planned renewal is postponed, ageing and vulnerable assets remain in service for a longer period.",
    "why": "This creates a return path in the map, where the cost of an earlier crisis leaves conditions that may increase damage during a later event.",
    "sources": [
      "assets",
      "panarchy"
    ]
  }
];

export const links = [
  {
    "id": "R01",
    "from": "warming",
    "to": "heat",
    "type": "amplifies",
    "copy": "A warmer baseline makes periods of extreme heat more likely and allows them to reach higher temperatures.",
    "evidence": "supported",
    "sources": [
      "climate"
    ]
  },
  {
    "id": "R02",
    "from": "warming",
    "to": "wildfire",
    "type": "amplifies",
    "copy": "Warmer and drier fire weather extends the periods in which vegetation can burn.",
    "evidence": "supported",
    "sources": [
      "climate",
      "fire"
    ]
  },
  {
    "id": "R03",
    "from": "warming",
    "to": "drought",
    "type": "amplifies",
    "copy": "Higher temperatures increase evaporation and may deepen water deficits, although the effect varies across regions.",
    "evidence": "supported",
    "sources": [
      "climate"
    ]
  },
  {
    "id": "R04",
    "from": "warming",
    "to": "thaw",
    "type": "amplifies",
    "copy": "Rising air temperatures warm frozen ground and accelerate thaw where the soil contains ground ice.",
    "evidence": "supported",
    "sources": [
      "ground"
    ]
  },
  {
    "id": "R05",
    "from": "heat",
    "to": "gridload",
    "type": "shifts pressure to",
    "copy": "Hot weather increases the use of air conditioning and other cooling equipment during the hours of greatest exposure.",
    "evidence": "interpreted",
    "sources": [
      "heat"
    ]
  },
  {
    "id": "R06",
    "from": "ageing",
    "to": "outage",
    "type": "increases vulnerability",
    "copy": "Assets in poor condition may have less capacity to continue operating through a shock, with performance varying by asset and location.",
    "evidence": "interpreted",
    "sources": [
      "assets"
    ]
  },
  {
    "id": "R07",
    "from": "gridload",
    "to": "outage",
    "type": "may contribute to",
    "copy": "Very high demand adds stress when the grid has little capacity remaining. Local equipment may become the point of failure.",
    "evidence": "conditional",
    "sources": [
      "heat",
      "assets"
    ]
  },
  {
    "id": "R08",
    "from": "outage",
    "to": "cooling",
    "type": "interrupts",
    "copy": "A loss of electricity stops most forms of mechanical cooling in homes and public buildings.",
    "evidence": "supported",
    "sources": [
      "heat"
    ]
  },
  {
    "id": "R09",
    "from": "outage",
    "to": "telecom",
    "type": "may interrupt",
    "copy": "Communication networks rely on grid electricity and limited backup power.",
    "evidence": "conditional",
    "sources": [
      "assets"
    ]
  },
  {
    "id": "R10",
    "from": "heat",
    "to": "healthdemand",
    "type": "increases",
    "copy": "Extreme heat increases illness and mortality, particularly for people whose homes remain hot overnight.",
    "evidence": "supported",
    "sources": [
      "heat",
      "health"
    ]
  },
  {
    "id": "R11",
    "from": "wildfire",
    "to": "smoke",
    "type": "produces",
    "copy": "Smoke travels beyond the burn area and exposes communities that may never come close to the fire.",
    "evidence": "supported",
    "sources": [
      "fire"
    ]
  },
  {
    "id": "R12",
    "from": "smoke",
    "to": "healthdemand",
    "type": "increases",
    "copy": "Fine particles in smoke increase respiratory and cardiovascular risk and can lead more people to seek care.",
    "evidence": "supported",
    "sources": [
      "health"
    ]
  },
  {
    "id": "R13",
    "from": "wildfire",
    "to": "displacement",
    "type": "causes",
    "copy": "A wildfire may require evacuation when fire conditions or damaged services make it unsafe to remain.",
    "evidence": "supported",
    "sources": [
      "displacement"
    ]
  },
  {
    "id": "R14",
    "from": "displacement",
    "to": "receiving",
    "type": "shifts pressure to",
    "copy": "People who leave an affected area need shelter and services in the communities where they arrive.",
    "evidence": "conditional",
    "sources": [
      "displacement"
    ]
  },
  {
    "id": "R15",
    "from": "receiving",
    "to": "housinggap",
    "type": "intensifies",
    "copy": "Additional demand places greater pressure on rental and emergency housing when few units are already available.",
    "evidence": "conditional",
    "sources": [
      "housing"
    ]
  },
  {
    "id": "R16",
    "from": "housinggap",
    "to": "cooling",
    "type": "reduces access",
    "copy": "Unaffordable or inadequate housing leaves more people in buildings that are difficult to keep at a safe temperature.",
    "evidence": "interpreted",
    "sources": [
      "housing",
      "heat"
    ]
  },
  {
    "id": "R17",
    "from": "rent",
    "to": "foodaccess",
    "type": "compounds",
    "copy": "As shelter costs take more of a household income, less remains for food and other daily needs.",
    "evidence": "interpreted",
    "sources": [
      "housing",
      "health"
    ]
  },
  {
    "id": "R18",
    "from": "rent",
    "to": "cooling",
    "type": "reduces access",
    "copy": "High housing costs make cooling equipment and its electricity use harder to afford.",
    "evidence": "interpreted",
    "sources": [
      "housing",
      "heat"
    ]
  },
  {
    "id": "R19",
    "from": "drought",
    "to": "crop",
    "type": "contributes to",
    "copy": "The 2021 Prairie drought occurred alongside major declines in the production of several crops.",
    "evidence": "supported",
    "sources": [
      "crops"
    ]
  },
  {
    "id": "R20",
    "from": "crop",
    "to": "foodprice",
    "type": "may increase",
    "copy": "Lower supply may contribute to higher prices alongside energy and transportation costs.",
    "evidence": "conditional",
    "sources": [
      "crops"
    ]
  },
  {
    "id": "R21",
    "from": "foodprice",
    "to": "foodaccess",
    "type": "intensifies",
    "copy": "Higher food prices place the greatest pressure on households whose budgets were already constrained.",
    "evidence": "interpreted",
    "sources": [
      "health"
    ]
  },
  {
    "id": "R22",
    "from": "foodaccess",
    "to": "healthdemand",
    "type": "increases",
    "copy": "Long periods of food insecurity affect health and may increase the need for care over time.",
    "evidence": "interpreted",
    "sources": [
      "health"
    ]
  },
  {
    "id": "R23",
    "from": "thaw",
    "to": "transport",
    "type": "damages",
    "copy": "Thaw changes drainage and ground stability beneath transportation surfaces or foundations.",
    "evidence": "supported",
    "sources": [
      "ground"
    ]
  },
  {
    "id": "R24",
    "from": "rain",
    "to": "transport",
    "type": "interrupts",
    "copy": "Floodwater may close a route immediately and leave damage that continues after the water recedes.",
    "evidence": "supported",
    "sources": [
      "flood"
    ]
  },
  {
    "id": "R25",
    "from": "transport",
    "to": "northsupply",
    "type": "interrupts",
    "copy": "Northern resupply is sensitive to transport interruption because many communities have few alternate routes.",
    "evidence": "interpreted",
    "sources": [
      "north"
    ]
  },
  {
    "id": "R26",
    "from": "northsupply",
    "to": "foodaccess",
    "type": "intensifies",
    "copy": "A delayed shipment reduces local availability and may increase the cost of essential goods.",
    "evidence": "interpreted",
    "sources": [
      "north"
    ]
  },
  {
    "id": "R27",
    "from": "transport",
    "to": "healthdemand",
    "type": "reduces access",
    "copy": "A closed road or cancelled flight may delay appointments and medication. Emergency transport may also be affected.",
    "evidence": "interpreted",
    "sources": [
      "north",
      "health"
    ]
  },
  {
    "id": "R28",
    "from": "rain",
    "to": "damage",
    "type": "causes",
    "copy": "Extreme rainfall and flooding damage transportation routes and drainage systems. Other public assets may also fail.",
    "evidence": "supported",
    "sources": [
      "flood"
    ]
  },
  {
    "id": "R29",
    "from": "wildfire",
    "to": "damage",
    "type": "causes",
    "copy": "Fire damages buildings and utilities within the affected area. Transportation infrastructure may also be lost.",
    "evidence": "supported",
    "sources": [
      "fire"
    ]
  },
  {
    "id": "R30",
    "from": "damage",
    "to": "repair",
    "type": "creates",
    "copy": "Damage spread across many sites creates repair work that may continue for several construction seasons.",
    "evidence": "supported",
    "sources": [
      "flood"
    ]
  },
  {
    "id": "R31",
    "from": "repair",
    "to": "finance",
    "type": "increases",
    "copy": "Large repair programs use public funding and administrative capacity over an extended period.",
    "evidence": "interpreted",
    "sources": [
      "assets",
      "flood"
    ]
  },
  {
    "id": "R32",
    "from": "emergency",
    "to": "finance",
    "type": "increases",
    "copy": "Emergencies occurring together compete for public funding and personnel. Specialized equipment may be needed at different sites.",
    "evidence": "interpreted",
    "sources": [
      "health"
    ]
  },
  {
    "id": "R33",
    "from": "finance",
    "to": "renewal",
    "type": "may defer",
    "copy": "A municipality under financial pressure may postpone planned renewal, depending on its funding arrangements.",
    "evidence": "hypothesis",
    "sources": [
      "assets"
    ]
  },
  {
    "id": "R34",
    "from": "renewal",
    "to": "ageing",
    "type": "feeds back",
    "copy": "Postponed renewal leaves a larger amount of older infrastructure operating into the next hazard period.",
    "evidence": "hypothesis",
    "sources": [
      "assets",
      "panarchy"
    ]
  },
  {
    "id": "R35",
    "from": "ageing",
    "to": "damage",
    "type": "increases vulnerability",
    "copy": "Older assets may suffer more disruption when they are exposed to hazards such as flood or fire.",
    "evidence": "hypothesis",
    "sources": [
      "assets"
    ]
  },
  {
    "id": "R36",
    "from": "healthdemand",
    "to": "staffing",
    "type": "exceeds capacity",
    "copy": "A health emergency develops when patient demand exceeds available staff or treatment space.",
    "evidence": "interpreted",
    "sources": [
      "care",
      "health"
    ]
  },
  {
    "id": "R37",
    "from": "smoke",
    "to": "cooling",
    "type": "compounds",
    "copy": "During heat and smoke events, outdoor air may be unsafe while opening windows provides little relief indoors.",
    "evidence": "interpreted",
    "sources": [
      "heat",
      "health"
    ]
  },
  {
    "id": "R38",
    "from": "telecom",
    "to": "emergency",
    "type": "reduces capacity",
    "copy": "A communications failure slows warnings and coordination. The movement of emergency resources may also be delayed.",
    "evidence": "conditional",
    "sources": [
      "assets"
    ]
  },
  {
    "id": "R39",
    "from": "isolation",
    "to": "healthdemand",
    "type": "increases vulnerability",
    "copy": "Isolation may delay a warning or wellness check. Transportation to care may arrive later as well.",
    "evidence": "interpreted",
    "sources": [
      "heat",
      "health"
    ]
  }
];

export const entanglements = [
  {
    "id": "urban",
    "label": "Urban habitability",
    "x": 900,
    "y": 585,
    "systems": [
      "climate",
      "infrastructure",
      "health",
      "housing"
    ],
    "nodes": [
      "heat",
      "smoke",
      "gridload",
      "outage",
      "cooling",
      "healthdemand",
      "housinggap",
      "rent"
    ],
    "copy": "During heat and smoke, people may need to remain indoors while electricity demand is rising. An outage removes mechanical cooling. Housing quality and household cost influence who can keep a safe indoor temperature, and healthcare services receive the resulting harm.",
    "focus": "The focus is the point where separate pressures make parts of a city difficult to inhabit.",
    "sources": ["heat", "health", "housing", "assets", "fire"]
  },
  {
    "id": "north",
    "label": "Northern access + supply",
    "x": 700,
    "y": 245,
    "systems": [
      "climate",
      "food",
      "infrastructure",
      "health"
    ],
    "nodes": [
      "thaw",
      "transport",
      "northsupply",
      "foodaccess",
      "healthdemand",
      "repair"
    ],
    "copy": "Permafrost degradation and limited transportation routes meet in many northern communities. Repairs may take a long time. Damage to one road or runway can delay food and fuel, along with medicine and the materials needed for the repair itself.",
    "focus": "The focus is the small number of routes and services that carry disruption into daily life.",
    "sources": ["ground", "north", "flood", "health"]
  },
  {
    "id": "affordability",
    "label": "Food and energy affordability",
    "x": 545,
    "y": 585,
    "systems": [
      "climate",
      "food",
      "infrastructure",
      "health",
      "housing"
    ],
    "nodes": [
      "drought",
      "crop",
      "foodprice",
      "rent",
      "foodaccess",
      "gridload",
      "cooling"
    ],
    "copy": "Drought and crop loss reach households through the price of food. When food and shelter already take most of an income, less remains for cooling or transportation. Temporary relocation may become unaffordable.",
    "focus": "The focus is the household budget that connects food and housing costs with energy use and health.",
    "sources": ["crops", "housing", "heat", "health"]
  },
  {
    "id": "recovery",
    "label": "Institutional recovery trap",
    "x": 1070,
    "y": 450,
    "systems": [
      "climate",
      "infrastructure",
      "capacity"
    ],
    "nodes": [
      "rain",
      "wildfire",
      "damage",
      "repair",
      "finance",
      "renewal",
      "ageing",
      "emergency"
    ],
    "copy": "Repeated emergencies create repair costs and more work for public institutions. Renewal may be postponed to cover those demands. Older assets then remain in service and may be damaged again during a later hazard.",
    "focus": "The focus is the way recovery from one event can shape damage during a later event.",
    "sources": ["assets", "flood", "fire", "panarchy"]
  },
  {
    "id": "movement",
    "label": "Displacement + receiving cities",
    "x": 1100,
    "y": 700,
    "systems": [
      "climate",
      "health",
      "housing",
      "capacity"
    ],
    "nodes": [
      "wildfire",
      "smoke",
      "displacement",
      "receiving",
      "housinggap",
      "healthdemand",
      "emergency"
    ],
    "copy": "Wildfire can produce smoke and evacuation during the same event. Infrastructure damage may continue after people leave. Receiving communities then face demand for housing and healthcare, as well as transportation and emergency services.",
    "focus": "The focus is the movement of crisis effects into the communities that receive displaced people.",
    "sources": ["fire", "displacement", "housing", "health"]
  }
];

