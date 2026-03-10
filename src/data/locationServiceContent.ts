/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  bradford: {
    neighborhoods: ["Manningham", "Little Germany", "Great Horton", "Heaton", "Laisterdyke", "Girlington", "Lidget Green", "Barkerend"],
    landmarks: ["Bradford City Hall", "the Alhambra Theatre", "the National Science and Media Museum", "Cartwright Hall", "Lister Park"],
    drainageInfo: "Bradford's historic drainage infrastructure dates back to the Victorian wool trade era, with workers' terraces, back-to-back houses, and mill buildings connected to clay and stone pipe networks now over 150 years old. The city's coal measures geology and steep valley topography — with Bradford Beck culverted beneath the centre — create unique challenges for drainage engineers across the city.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, back-to-back houses, converted warehouses, modern apartments, and commercial premises"
  },
  keighley: {
    neighborhoods: ["Stockbridge", "Dalton Lane", "Bracken Bank", "Long Lee", "Eastburn", "Utley", "Guard House", "Fell Lane"],
    landmarks: ["the Keighley & Worth Valley Railway", "East Riddlesden Hall", "Cliffe Castle Museum", "Devonshire Park", "the River Aire and Worth confluence"],
    drainageInfo: "Keighley's position at the confluence of the River Aire and River Worth creates distinctive drainage challenges. Victorian mill town terraces line the hillsides above the river valley, with clay pipe drainage systems now over 130 years old. Properties near both river corridors face genuine flood risk, while the steep Airedale gradients create high flow velocities in gravity-fed drainage systems.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian stone terraces, mill workers' cottages, modern housing estates, and commercial units"
  },
  shipley: {
    neighborhoods: ["Windhill", "Wrose", "Hirst Wood", "Nab Wood", "Moorhead", "Baildon Bridge", "Northcliffe", "Owlet"],
    landmarks: ["Shipley Glen", "the Glen Tramway", "Northcliffe Park", "the Leeds-Liverpool Canal", "Shipley Station"],
    drainageInfo: "Shipley's position on the River Aire in the Airedale corridor means properties face river flood risk and elevated water table conditions. The Leeds-Liverpool Canal running through the town adds further water management considerations. Victorian stone terraces climbing the valley sides have aging clay drainage, while the steep gradients channel surface water rapidly downhill during heavy rain.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian stone terraces, period villas, modern housing estates, and riverside properties"
  },
  bingley: {
    neighborhoods: ["Myrtle Park", "Eldwick", "Gilstead", "Crossflatts", "Micklethwaite", "Harden", "Cottingley", "Beckfoot"],
    landmarks: ["Bingley Five Rise Locks", "Myrtle Park", "Prince of Wales Park", "the River Aire", "the Leeds-Liverpool Canal"],
    drainageInfo: "Bingley sits in the Aire valley with the River Aire and Leeds-Liverpool Canal both flowing through the town. The river creates genuine flood risk in lower-lying areas, while canal-side properties face elevated water table conditions. The historic market town centre has stone and clay drainage spanning over a century, and the alluvial valley floor soils can create ground movement affecting pipes.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "stone-built market town properties, Victorian terraces, canal-side homes, and modern family housing"
  },
  ilkley: {
    neighborhoods: ["The Grove", "Ben Rhydding", "Wells Road", "Middleton", "Nesfield", "Denton", "Addingham nearby", "Burley in Wharfedale nearby"],
    landmarks: ["Ilkley Moor", "the Cow and Calf Rocks", "the River Wharfe", "White Wells", "Manor House Museum"],
    drainageInfo: "Ilkley's position at the foot of Ilkley Moor with the River Wharfe flowing through creates significant drainage challenges. Moorland runoff drains rapidly toward the town during heavy rain, while the Wharfe poses genuine flood risk — as demonstrated by the 2015 Boxing Day floods. The predominantly Victorian and Edwardian housing stock has aging clay drainage, and mature gardens create root intrusion risks throughout this spa town.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian and Edwardian stone villas, spa town terraces, period properties with large gardens, and modern homes"
  },
  saltaire: {
    neighborhoods: ["Victoria Road", "Caroline Street", "Albert Terrace", "Titus Street", "Ada Street", "George Street", "Saltaire roundabout", "Higher Coach Road"],
    landmarks: ["Salt's Mill and the Hockney Gallery", "Roberts Park", "Victoria Hall", "the Leeds-Liverpool Canal", "the River Aire"],
    drainageInfo: "Saltaire is a UNESCO World Heritage Site with a uniquely planned Victorian drainage system now over 170 years old. Built by Sir Titus Salt as a model village, the infrastructure was progressive for its era but now faces modern demands it was never designed to handle. The riverside and canal-side setting elevates water table conditions, and listed building status constrains repair methods — making no-dig techniques particularly valuable here.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Grade II listed workers' cottages, Victorian model village housing, canal-side properties, and converted mill buildings"
  },
  idle: {
    neighborhoods: ["Thorpe Edge", "Bolton Road", "Albion Road", "Simpson Green", "High Croft", "Westfield Lane", "Idle Moor", "Thackley"],
    landmarks: ["Holy Trinity Church", "Idle Moor", "Idle Village Green", "Bolton Road", "Thorpe Edge estate"],
    drainageInfo: "Idle's elevated position north of Bradford provides good natural drainage gradients but means surface water drains rapidly toward lower areas during heavy rain. The village blends older stone cottages with post-war housing estates, including Thorpe Edge where 1950s-60s pitch fibre pipes are now reaching the end of their designed lifespan. Variable geology with coal measures and some shallow mining legacy can affect pipe stability.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "stone-built village cottages, post-war housing estates, modern semi-detached homes, and 1960s terraces"
  },
  thornton: {
    neighborhoods: ["School Green", "Market Street", "Egypt Road", "Hill Top Road", "Close Head", "Thornton Road", "Leaventhorpe", "Lower Town"],
    landmarks: ["the Bronte Birthplace", "Thornton Viaduct", "Kipping Chapel", "the Great Northern Railway Trail", "St James' Church"],
    drainageInfo: "Thornton is a hilltop village west of Bradford — birthplace of the Bronte sisters — with an exposed position that creates distinctive drainage challenges. Higher rainfall, greater wind exposure, and more severe frost action stress aging stone and clay drainage infrastructure. The steep gradients around the village edges channel surface water rapidly downhill, and the millstone grit bedrock makes excavation expensive.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "stone-built hilltop cottages, Victorian terraces, modern housing, and converted properties"
  },
  queensbury: {
    neighborhoods: ["High Street", "Chapel Lane", "Albert Road", "Sand Beds", "Ambler Thorn", "Mountain", "Old Road", "Brighouse Road"],
    landmarks: ["Black Dyke Mills", "the Great Northern Railway Trail", "Holy Trinity Church", "Queensbury Tunnel", "Victoria Hall"],
    drainageInfo: "Queensbury sits at over 300 metres above sea level — one of the highest villages in England — with extreme weather exposure that places exceptional demands on drainage infrastructure. Higher rainfall, more frost days, and severe winters cause accelerated deterioration of aging clay and stone pipes. The area's wool mill heritage and some shallow mining legacy add ground condition complexities, while steep surrounding gradients create rapid surface water runoff.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "stone-built mill workers' terraces, Victorian cottages, modern housing, and converted mill properties"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  bradford: {
    "blocked-drains": {
      intro: "Bradford's rich architectural heritage means blocked drains can affect anything from a Victorian back-to-back terrace to a converted warehouse in Little Germany. Our experienced engineers understand the unique drainage challenges facing properties across the city and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in commercial kitchens across the city centre", "Tree root intrusion from mature street trees in residential areas", "Debris accumulation in Victorian clay and stone pipes", "Wet wipe blockages in student accommodation areas near the universities", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Bradford's tree-lined streets in Manningham and Heaton should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Bradford, you need a fast response from engineers who know the local area. Whether you're in Manningham, Heaton, or Great Horton, our drain unblocking teams are strategically positioned across the city to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in back-to-back and terraced properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Bradford's busy restaurants and takeaways along Great Horton Road and Manningham Lane benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Bradford property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Bradford's older Victorian terraces and converted warehouse properties.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Bradford's older areas like Manningham or Heaton? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Bradford's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Bradford's water supply from the Pennine reservoirs contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Bradford emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the city. From student accommodation near the university to city centre businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Bradford location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Bradford's mix of historic infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Bradford's clay and boulder clay subsoil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  keighley: {
    "blocked-drains": {
      intro: "Keighley's rich industrial heritage as a mill town in the Aire valley has created a fascinating mix of old and new drainage systems. From the stone-built terraces along Dalton Lane to the traditional workers' cottages of Stockbridge, our engineers have the expertise to clear blocked drains in any property type across the area.",
      commonProblems: ["Sediment accumulation in converted mill buildings", "Shared drainage conflicts in terraced housing", "Modern plastic pipe blockages in newer housing estates", "Commercial kitchen waste in town centre restaurants", "Surface water issues near the River Aire and River Worth"],
      process: "Every Keighley blocked drain is unique, and we treat it that way. Our engineers assess the property type and drainage configuration before selecting the most effective clearing method, whether that's rodding, jetting, or mechanical cutting.",
      localTip: "Properties near the River Aire and River Worth should ensure their drainage connects correctly to the main sewer system, as some converted mill buildings have complex private drainage arrangements."
    },
    "drain-unblocking": {
      intro: "From emergency callouts near the town centre to routine unblocking on Dalton Lane, our Keighley drain unblocking service covers every eventuality. We understand the varied property stock across the area and bring the right equipment to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our Keighley-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Keighley's older terraced properties along Dalton Lane and Stockbridge often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period terrace on Dalton Lane or investigating drainage issues at a town centre business, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Keighley property.",
      commonProblems: ["Unknown pipe routes in converted buildings", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Keighley's converted mill properties often share complex drainage systems. A CCTV survey helps identify responsibility boundaries before issues arise."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Keighley, equally effective on Victorian clay pipes in traditional terraces and modern systems in newer housing estates. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in commercial kitchens", "Scale deposits from water supply", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Keighley's thriving restaurant scene along the town centre means commercial premises should schedule regular jetting to comply with environmental regulations and prevent emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Keighley receive our immediate attention, with engineers stationed to respond rapidly to properties from Stockbridge to Utley. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage and disruption to your property.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest Keighley engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Keighley properties near the River Aire and River Worth should have emergency drainage contacts readily available, particularly during autumn leaf fall and periods of heavy rainfall."
    },
    "drain-repairs": {
      intro: "Keighley's diverse building stock requires drainage repair expertise spanning centuries of construction techniques. Our repair teams handle everything from relining Victorian clay pipes in traditional terraces to replacing damaged plastic sections in newer housing estates, always using materials and methods suited to your specific property.",
      commonProblems: ["Cracked clay pipes in Victorian terraces", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from third-party excavations"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Keighley's former mill and industrial areas may have unexpected underground features. Always commission surveys before excavating for drain repairs."
    }
  },
  "shipley": {
    "blocked-drains": {
      intro: "Shipley's position on the River Aire in the Airedale corridor, combined with its mix of historic and modern housing, creates diverse drainage challenges. Our Shipley blocked drain specialists understand how river proximity and canal levels affect drainage systems, from Windhill's traditional terraces to Wrose's newer housing developments.",
      commonProblems: ["Silt and sediment accumulation from river proximity", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your Shipley property's position relative to the River Aire and Leeds-Liverpool Canal before selecting clearing methods. Riverside properties may require different approaches than those further up the valley sides. Our engineers are experienced with all Shipley property types and drainage configurations.",
      localTip: "Shipley properties near the River Aire in Hirst Wood and Nab Wood should ensure external drains have adequate gully pots to catch debris before it enters the pipe system, particularly after heavy rain."
    },
    "drain-unblocking": {
      intro: "When drains block in Shipley, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Windhill or an overflowing external drain in Wrose, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Shipley engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Shipley's historic High Street properties often have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "cctv-drain-surveys": {
      intro: "Shipley's architectural variety, from Hirst Wood's traditional stone cottages to Windhill's modern estates, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing in Shipley's older areas around Nab Wood? CCTV surveys can identify period drainage features that may need specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Shipley's varied drainage systems often need. From clearing scale deposits in Hirst Wood's traditional pipes to routine maintenance for Windhill's newer systems, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Scale accumulation from water supply", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Shipley properties near the canal and river benefit from periodic jetting to remove silt and mineral deposits before they restrict flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Shipley receive rapid response from our local teams, day or night. From flooded gardens in Windhill to sewage issues in Hirst Wood, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Shipley service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Shipley's riverside and canal-side properties are prone to surface water issues during heavy rain and high water levels. Keeping gullies clear helps prevent property flooding."
    },
    "drain-repairs": {
      intro: "Shipley's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for a Victorian pipe in Nab Wood or excavation repairs in a newer Windhill property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Shipley's clay and alluvial valley soil can cause seasonal pipe movement. Consider flexible repair solutions that accommodate ground conditions."
    }
  },
  bingley: {
    "blocked-drains": {
      intro: "Bingley's market town heritage and surrounding Aire valley communities present a varied set of drainage challenges. From the traditional stone-built properties of Eldwick to the terraced housing in Crossflatts and Gilstead, our Bingley blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Debris accumulation in ageing stone drainage", "Root intrusion from established trees in mature gardens", "Fat and grease buildup in domestic kitchens", "Shared drainage blockages in terraced housing", "Surface water issues near the River Aire"],
      process: "Bingley's varied property types demand flexible approaches. We assess each situation individually, considering property age, pipe material, and the area's specific environmental factors before selecting our clearing method.",
      localTip: "Bingley properties near the River Aire and Myrtle Park should have drainage inspected regularly, as riverside tree roots and water table levels affect pipe integrity."
    },
    "drain-unblocking": {
      intro: "When Bingley drains need unblocking, our local teams cover the entire area from Eldwick and Gilstead to Crossflatts and Micklethwaite. We handle everything from simple kitchen sink blockages to complex shared drainage issues in the area's many traditional terraced properties.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages from hair and soap", "External gulley obstructions from fallen leaves", "Interceptor trap blockages in older properties", "Washing machine and utility drain problems"],
      process: "Our Bingley engineers arrive with comprehensive unblocking tools suited to the area's property mix. We identify the obstruction quickly and clear it completely, testing flow restoration before finishing the job.",
      localTip: "Bingley's terraced streets in Crossflatts and Gilstead often share rear drainage — if neighbours are experiencing slow drains too, the blockage is likely in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Bingley property's drainage is essential for effective maintenance. Our CCTV surveys provide detailed pipe condition assessments, particularly valuable for the area's period properties, canal-side homes, and modern developments where drainage history may be less documented.",
      commonProblems: ["Mapping drainage in older stone buildings", "Assessing drainage near the River Aire and canal", "Pre-purchase surveys for period properties", "Root ingress from mature vegetation", "Investigating causes of recurring blockages"],
      process: "We survey Bingley drainage methodically, recording condition and mapping routes. This is especially important for properties near the river and canal where water table levels can affect drainage infrastructure.",
      localTip: "Buying a property near Crossflatts or Beckfoot? Always commission a full CCTV drain survey — riverside and canal-side areas may have ground conditions that affect pipe stability."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Bingley's varied drainage systems, from traditional stone channels in period properties to modern plastic pipes in newer estates. Our specialist equipment clears the silt, scale, and debris that accumulate in local drainage throughout the Aire valley.",
      commonProblems: ["Silt and sediment deposits from nearby rivers", "Scale accumulation from water supply", "Grease buildup in residential drains", "Root fragments requiring clearance", "Pre-survey cleaning for accurate assessment"],
      process: "We match jetting equipment to Bingley's pipe types and conditions. Period drainage receives careful, lower-pressure treatment, while modern systems can handle more thorough cleaning for optimal results.",
      localTip: "Bingley's riverside properties experience higher groundwater levels that can carry silt into drainage — regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Bingley drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding in Crossflatts or sewage backup in Gilstead. Our engineers are available around the clock, equipped to handle emergencies across the Bingley area.",
      commonProblems: ["Surface water flooding during heavy rainfall", "Sewage backing up into ground-floor rooms", "Manhole overflows on terraced streets", "Drain collapses after ground saturation", "River-related drainage emergencies"],
      process: "Emergency calls from Bingley receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation.",
      localTip: "Bingley properties near the River Aire should maintain clear surface water drains year-round, as river levels can rise rapidly after sustained rainfall in the Pennine hills."
    },
    "drain-repairs": {
      intro: "Bingley's drainage spans from original stone-built channels to modern plastic systems, and our repair teams work confidently with all types. Whether it's relining Victorian pipes in Eldwick or replacing collapsed sections in Crossflatts, we select repair methods suited to each property's age and construction.",
      commonProblems: ["Cracked stone drainage channels", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Subsidence-related damage near the river and canal"],
      process: "We investigate thoroughly before recommending Bingley drainage repairs. Our approach accounts for the area's terrain and ground conditions, using durable materials that provide long-lasting results.",
      localTip: "Bingley properties near the River Aire and canal may experience elevated water tables — ensure your repair contractor checks for ground conditions before undertaking drainage work."
    }
  },
  ilkley: {
    "blocked-drains": {
      intro: "Ilkley's Victorian spa town heritage means most properties have drainage systems dating from the Victorian and Edwardian eras, with aging clay pipes requiring careful maintenance. Our Ilkley blocked drain service combines knowledge of period drainage design with modern clearing techniques, effectively tackling blockages in properties across the town from The Grove to Ben Rhydding.",
      commonProblems: ["Deteriorating Victorian clay pipes in period properties", "Root intrusion from mature garden trees and street trees", "Fat accumulation in domestic drains", "Debris in shared drainage serving terraced housing", "Surface water blockages from leaf litter and moorland runoff"],
      process: "Ilkley's established layout means drainage routes are generally well-documented, which helps us diagnose issues efficiently. We assess your specific situation, considering property age, pipe material, and blockage characteristics before selecting the most effective clearing method.",
      localTip: "Ilkley's mature street trees and large gardens are now large enough to cause root intrusion in nearby drainage. Properties with trees close to pipe runs should have annual inspections."
    },
    "drain-unblocking": {
      intro: "When Ilkley drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From The Grove to Wells Road, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages", "Commercial drainage issues"],
      process: "Our Ilkley engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Ilkley's terraced and semi-detached properties often share drainage systems serving multiple homes. If your neighbours also have slow drains, the blockage is likely in the communal section — contact us to investigate."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Ilkley property's drainage is essential, particularly as the town's original infrastructure ages. Our CCTV surveys reveal the condition of pipes beneath your property, identifying deterioration that surface inspection cannot detect. This is increasingly valuable for Ilkley's Victorian and Edwardian housing stock.",
      commonProblems: ["Age-related pipe deterioration in Victorian clay systems", "Root ingress from established street trees and large gardens", "Pipe condition assessment for home purchases", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Ilkley's Victorian and Edwardian properties often have clay drainage well over a century old — a CCTV survey reveals how much service life remains and helps plan maintenance."
    },
    "drain-jetting": {
      intro: "Ilkley's ageing Victorian drainage benefits greatly from regular high-pressure jetting maintenance. Our specialist equipment removes the deposits that accumulate over decades in clay pipes, maintaining optimal flow in domestic and commercial drainage systems throughout the town.",
      commonProblems: ["Scale buildup in ageing pipes", "Grease accumulation", "Silt and debris deposits", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting the integrity of ageing pipe infrastructure. We verify results with flow testing.",
      localTip: "Ilkley businesses along The Grove and Brook Street should consider scheduled jetting as part of their maintenance regime, particularly food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Ilkley drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded ground floor in Ben Rhydding or sewage backup in Wells Road, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage from ageing infrastructure", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Ilkley's Victorian drainage was designed for lower water volumes than modern usage demands. During heavy rainfall combined with moorland runoff, systems can become overwhelmed — keep emergency drain contacts readily available."
    },
    "drain-repairs": {
      intro: "Ilkley's Victorian and Edwardian housing stock has drainage systems that increasingly require specialist repair. Our repair specialists understand the materials and methods used in period construction and provide repair solutions that extend the life of ageing clay pipe systems while delivering reliable results.",
      commonProblems: ["Cracked Victorian clay drainage pipes", "Deteriorating clay pipe joints", "Root damage from established trees and large gardens", "Ground settling causing pipe displacement", "Age-related material degradation"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Ilkley's Victorian drainage infrastructure is well past its original design life in many areas. Consider proactive repair and relining rather than waiting for complete failure."
    }
  },
  saltaire: {
    "blocked-drains": {
      intro: "Saltaire's UNESCO World Heritage status and unique planned village layout creates varied drainage challenges. Our Saltaire blocked drain specialists understand the differences between the listed workers' cottages along Victoria Road and the properties around Caroline Street and Albert Terrace, bringing the right expertise to every callout.",
      commonProblems: ["Root intrusion from mature garden trees and hedgerows in Roberts Park", "Fat and grease buildup from busy household kitchens", "Debris accumulation in original Victorian clay pipes", "Surface water blockages near the River Aire and canal", "Shared drainage issues in terraced workers' cottages"],
      process: "We assess each Saltaire blockage considering the property type, pipe age, and drainage layout. Listed properties along Victoria Road need heritage-sensitive handling, and our engineers adapt their approach accordingly.",
      localTip: "Saltaire's leafy streets and mature gardens along Victoria Road and around Roberts Park are beautiful but pose significant root intrusion risks — schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "drain-unblocking": {
      intro: "When drains block in Saltaire, our local teams respond promptly with the right equipment for every property type. From listed cottages along Victoria Road to properties near Salt's Mill, we clear blockages efficiently while respecting your property.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Commercial drainage issues near Salt's Mill"],
      process: "Our Saltaire engineers arrive equipped for the area's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Saltaire properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a listed cottage on Victoria Road or investigating drainage at a property near Salt's Mill, our CCTV surveys provide the detailed assessment you need. We reveal the true condition of pipes beneath Saltaire's heritage properties.",
      commonProblems: ["Pre-purchase surveys for period stone villas", "Root ingress investigation in mature gardens", "Mapping complex drainage in commercial premises", "Condition assessment of mid-century pipe systems", "Insurance and renovation planning requirements"],
      process: "We survey Saltaire properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Saltaire home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Saltaire's heritage drainage at peak performance. Our careful approach removes accumulated deposits from Victorian clay pipes along Victoria Road and clears root masses from properties near Roberts Park, restoring optimal flow throughout your system.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for residential drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Saltaire's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Saltaire properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Saltaire demand swift, professional response. Whether you're facing sewage backup in a listed cottage or flooding at a property near the canal, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "Storm water overwhelming period drainage systems"],
      process: "Emergency calls from Saltaire are prioritised and dispatched immediately. Our engineers understand the area's property types and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Saltaire properties near the River Aire may experience increased surface water runoff during heavy rain — ensure gullies and downpipe connections are clear."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Saltaire's heritage properties requires specialist care. Our repair teams understand the constraints of working in a UNESCO World Heritage Site, restoring Victorian clay pipes in listed workers' cottages and addressing drainage issues across the village.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Damage from extension and renovation projects"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Saltaire's clay subsoil and mature tree cover cause seasonal ground movement — flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  idle: {
    "blocked-drains": {
      intro: "Idle's reputation as one of Bradford's most desirable suburbs comes with distinctive drainage challenges. The area's substantial Victorian and Edwardian stone-built properties feature original clay drainage systems, while tree-lined avenues contribute to root intrusion issues. Our Idle specialists understand these local factors and deliver effective blocked drain solutions.",
      commonProblems: ["Tree root intrusion from mature gardens and avenues", "Aged clay pipe deterioration", "Fat buildup from busy household kitchens", "Leaf debris in autumn months from tree-lined streets", "Shared drainage in converted period properties"],
      process: "We approach Idle blocked drains with appreciation for the area's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Idle's beautiful mature trees along Bolton Road and surrounding avenues are a root intrusion risk. Consider annual CCTV checks if you have large trees near your drainage runs."
    },
    "drain-unblocking": {
      intro: "Idle residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls from Thorpe Edge to Simpson Green, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Cellar drainage issues"],
      process: "Our Idle engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Idle's Victorian properties often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Idle's premium property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the area's sought-after Victorian and Edwardian homes.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey Idle properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Idle home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points in what is Bradford's most competitive property market."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Idle's period drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features.",
      commonProblems: ["Scale from water supply", "Grease accumulation over time", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "Idle's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Idle's elevated position means good natural drainage gradients, but pipe scale buildup can still restrict flow. Periodic jetting maintains optimal performance and extends drainage lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Idle receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a Victorian stone villa or flooding in a converted flat, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into cellars", "Garden flooding from blocked drains", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Idle properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Idle properties with cellars should ensure drainage pumps and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Idle's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects", "Historical modification issues", "Cellar drainage problems"],
      process: "We investigate Idle drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Idle's Victorian drainage often includes original salt-glazed pipes. These can be repaired and relined rather than replaced, preserving heritage features."
    }
  },
  thornton: {
    "blocked-drains": {
      intro: "Thornton's hilltop position west of Bradford creates specific drainage considerations, from exposed weather conditions to Victorian pipe systems in the village's traditional stone cottages. Our Thornton blocked drain specialists understand how the hilltop location and steep gradients affect drainage systems and bring the expertise needed for properties from School Green to Hill Top Road.",
      commonProblems: ["Frost damage to exposed drainage infrastructure", "Root intrusion from garden trees in established streets", "Fat and grease buildup from domestic kitchens", "Debris accumulation in Victorian clay pipes", "Surface water issues from steep hillside gradients"],
      process: "We assess your Thornton property's position and drainage layout before selecting clearing methods. Properties at higher elevations may require different approaches than those in the lower village areas around Leaventhorpe. Our engineers are experienced with all property types across the village.",
      localTip: "Thornton's exposed hilltop position means drainage infrastructure experiences more severe frost action, which can crack aging clay pipes. Properties should have drainage checked regularly to catch frost damage early."
    },
    "drain-unblocking": {
      intro: "When drains block in Thornton, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink on Market Street or an overflowing external drain on Egypt Road, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages in hilltop properties", "Washing machine drain problems"],
      process: "Our Thornton engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Thornton's terraced village properties often have rear drainage running close to neighbouring boundaries. Know your drainage layout to identify the responsible party when blockages occur."
    },
    "cctv-drain-surveys": {
      intro: "Thornton's varied property market, from traditional stone cottages to modern conversions, makes drainage condition assessment increasingly important. Our CCTV surveys reveal exactly what's inside your pipes, providing essential information for property transactions and ongoing maintenance in this historic hilltop village.",
      commonProblems: ["Frost and weather damage assessment", "Age-related pipe deterioration in stone cottages", "Root ingress from established gardens", "Drainage route mapping before renovations", "Condition assessment for property purchases"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any issues related to the exposed hilltop location. The final report includes annotated footage, a condition summary, and maintenance recommendations.",
      localTip: "Purchasing a stone cottage in Thornton village? A pre-purchase CCTV survey is essential — the exposed hilltop conditions accelerate pipe deterioration and hidden defects are common."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Thornton's exposed hilltop drainage systems often need. Our service removes silt, scale, and debris deposits from Victorian pipes around School Green and clears accumulated deposits from properties throughout the village and Leaventhorpe.",
      commonProblems: ["Silt and debris accumulation from surface water runoff", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. Hilltop properties often have rapid surface water flow that carries debris, requiring thorough cleaning.",
      localTip: "Thornton's exposed hilltop properties experience faster debris accumulation from wind-blown material and surface water runoff. Consider jetting every 12 months rather than the usual 18 to maintain optimal flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Thornton receive rapid response from our local teams, day or night. From flooded properties near School Green to sewage issues on Hill Top Road, our engineers are ready to tackle any emergency and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Surface water flooding from overwhelmed drainage on steep gradients", "Overflowing inspection chambers", "Collapsed drains from frost damage", "Storm water overwhelming aging village drainage"],
      process: "Emergency calls to our Thornton service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Thornton's hilltop properties should have non-return valves fitted on main drainage connections to prevent surface water from forcing water back into the system during heavy storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Thornton's exposed hilltop environment requires understanding the specific challenges of frost action, millstone grit bedrock, and the area's mix of traditional stone cottages and modern properties. Our repair specialists select methods and materials suited to these conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from frost action and ground movement", "Root damage from garden vegetation", "Joint displacement from freeze-thaw cycles", "Weathering damage to exposed pipe connections", "Debris infiltration through damaged joints"],
      process: "We assess Thornton drainage repairs with the hilltop conditions in mind. Materials are chosen for durability in exposed conditions, and repair methods account for the millstone grit bedrock that can make excavation challenging.",
      localTip: "Thornton's millstone grit bedrock can make traditional excavation repairs more expensive than in softer ground — no-dig relining techniques are often the most cost-effective solution in the village."
    }
  },
  queensbury: {
    "blocked-drains": {
      intro: "Queensbury and the surrounding hilltop communities blend historic village charm with modern housing developments, each with their own drainage characteristics. Our Queensbury blocked drain service covers everything from the traditional stone terraces on High Street to Ambler Thorn's newer family homes, bringing local expertise to every callout.",
      commonProblems: ["Root intrusion from established village trees and hedgerows", "Fat and grease buildup in domestic kitchens", "Debris accumulation in older stone drainage systems", "Surface water blockages from leaf litter", "Shared drainage conflicts in terraced housing"],
      process: "We assess each Queensbury blockage considering the property type, drainage age, and local conditions. Traditional stone properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Queensbury properties near Sand Beds and the lower slopes should have drainage inspected after periods of heavy rainfall when debris and silt can accumulate rapidly."
    },
    "drain-unblocking": {
      intro: "When Queensbury drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From High Street to Ambler Thorn, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Utility room drainage issues"],
      process: "Our Queensbury engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Queensbury's older stone-built properties often have deep inspection chambers. Ensure access covers are in good condition and accessible for maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Queensbury property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable in the Queensbury area where ground conditions vary.",
      commonProblems: ["Unknown drainage routes in period properties", "Pipe condition assessment for home purchases", "Root ingress detection from mature gardens", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Queensbury properties near Black Dyke Mills and former industrial sites may have unexpected underground features. Surveys help identify complex drainage arrangements before problems develop."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Queensbury's drainage systems. Our specialist equipment handles everything from clearing root masses in the village's older properties to descaling pipes in Ambler Thorn's modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale buildup from water supply", "Grease accumulation in residential drains", "Silt and sediment from nearby river and streams", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Queensbury properties on the lower slopes near Sand Beds experience more silt buildup from surface water runoff — consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Queensbury drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden in Ambler Thorn or sewage backup on High Street, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Queensbury's exposed hilltop location means severe weather can overwhelm drainage quickly after sustained rain. Keep emergency drain contacts readily available and know your manhole locations."
    },
    "drain-repairs": {
      intro: "Queensbury's property stock spans traditional stone cottages to modern family homes, and our drain repair expertise matches this diversity. From relining Victorian pipes on High Street to replacing damaged sections in Ambler Thorn, we provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked stone drainage channels in period properties", "Clay pipe deterioration from age", "Joint failures from ground movement", "Root damage from established trees", "Ground settling effects on newer developments"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Queensbury's mix of former mill land and hilltop geology means ground conditions can vary — always commission a proper survey before planning drainage repair work."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Yorkshire Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Yorkshire Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Bradford and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Bradford and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Bradford and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Bradford and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
