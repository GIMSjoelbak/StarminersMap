//Set polygons initially for functions	
var polygon0, polygon1, polygon2, polygon3, polygon4, polygon5, polygon6, polygon7, polygon8, polygon9, polygon10, polygon11, polygon12, polygon13;
//promise to make sure all popups load into polygons on initial load
Promise.all([  fetch('./images/Asgarnia.geojson'),  fetch('./images/Karamja.geojson'),  fetch('./images/Feldip.geojson'), fetch('./images/Fossil.geojson'), fetch('./images/Fremennik.geojson'), fetch('./images/Great Kourend.geojson'), fetch('./images/Kandarin.geojson'), fetch('./images/Kebos.geojson'), fetch('./images/Desert.geojson'), fetch('./images/Misthalin.geojson'), fetch('./images/Morytania.geojson'), fetch('./images/PiscGnome.geojson'), fetch('./images/Tirannwn.geojson'), fetch('./images/Wilderness.geojson')])
.then(responses => Promise.all(responses.map(response => response.json())))
.then(result => {
  var polygon0 = L.geoJSON(result[0], {
    style: {
      fillColor: 'DodgerBlue',
	    color: 'DodgerBlue',
	    //weight = outline thickness
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);

  var polygon1 = L.geoJSON(result[1], {
    style: {
      fillColor: 'Chocolate',
	    color: 'Chocolate',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);

  var polygon2 = L.geoJSON(result[2], {
    style: {
      fillColor: 'Brown',
	    color: 'Brown',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
  var polygon3 = L.geoJSON(result[3], {
    style: {
      fillColor: 'Brown',
	    color: 'Brown',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
  var polygon4 = L.geoJSON(result[4], {
    style: {
      fillColor: 'Gold',
	    color: 'Gold',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
  var polygon5 = L.geoJSON(result[5], {
    style: {
      fillColor: 'SpringGreen',
	    color: 'SpringGreen',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
  var polygon6 = L.geoJSON(result[6], {
    style: {
      fillColor: '#004d00',
	    color: '#004d00',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
  var polygon7 = L.geoJSON(result[7], {
    style: {
      fillColor: 'DarkOrange',
	    color: 'DarkOrange',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
  var polygon8 = L.geoJSON(result[8], {
    style: {
      fillColor: 'MediumSeaGreen',
	    color: 'MediumSeaGreen',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
  var polygon9 = L.geoJSON(result[9], {
    style: {
      fillColor: 'Red',
	    color: 'Red',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
	  var polygon10 = L.geoJSON(result[10], {
    style: {
      fillColor: 'Purple',
	    color: 'Purple',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
	  var polygon11 = L.geoJSON(result[11], {
    style: {
      fillColor: 'Purple',
	    color: 'Purple',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
	  var polygon12 = L.geoJSON(result[12], {
    style: {
      fillColor: 'Olive',
	    color: 'Olive',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);
	  var polygon13 = L.geoJSON(result[13], {
    style: {
      fillColor: 'Grey',
	    color: 'Grey',
	    weight: 1,
      fillOpacity: 0.4,
    }
  }).addTo(map);


// Function to fetch data from endpoint and update tables
  function fetchDataAndUpdateTable() {
 fetch("./stars.json?timestamp=" + Date.now())
      .then((response) => response.json())
      .then((data) => {
	createPopup(polygon0, 0, data);
	createPopup(polygon1, 1, data);
	createPopup(polygon2, 2, data);
	createPopup(polygon3, 3, data);
	createPopup(polygon4, 4, data);
	createPopup(polygon5, 5, data);
	createPopup(polygon6, 6, data);
	createPopup(polygon7, 7, data);
	createPopup(polygon8, 8, data);
	createPopup(polygon9, 9, data);
	createPopup(polygon10, 10, data);
	createPopup(polygon11, 11, data);
	createPopup(polygon12, 12, data);
	createPopup(polygon13, 13, data);
	    console.log(data); // log the retrieved data
	 addMarkers(map, data);
	  });
	}
	 // Call the fetch data function for the initial time
  fetchDataAndUpdateTable();

  // Call the fetch data function every 60 seconds
  setInterval(fetchDataAndUpdateTable, 60000);
});
//creating table header and setting initial prevdata to nothing
	var prevData = {};
function createPopup(polygon, location, data) {
  var table = document.createElement("table");
  var headerRow = table.insertRow();
  var header1 = headerRow.insertCell(0);
  var header2 = headerRow.insertCell(1);
  var header3 = headerRow.insertCell(2);
  var header4 = headerRow.insertCell(3);
  var header5 = headerRow.insertCell(4);
  var header6 = headerRow.insertCell(5);
  header1.innerHTML = "<b>Calltime</b>";
  header2.innerHTML = "<b>Tier</b>";
  header3.innerHTML = "<b>World</b>";
  header4.innerHTML = "<b>Called Location</b>";
  header5.innerHTML = "<b>Landing time</b>";	
  header6.innerHTML = "<b>Called By</b>";
	// updater to fill table content
  	function updateTable() {
		//filtered data for each region
		var filteredData = data.filter((d) => d.location === location);
		//filtered data where calledLocation is not empty
		var filteredData2 = filteredData.filter((d) => d.calledLocation !== "");
		        // Compare the previous data with the new data
		//set initial data change to false
	var isDataChanged = false;
		//if statement for data after initial load
      if (prevData[location] !== undefined) {
	      //filter data where prevdata calledlocation is not empty
         var prevData2 = prevData[location].filter((d) => d.calledLocation !== "");
	      //check if new filteredData has more calledLocation records than prevData
        isDataChanged = filteredData2.length > prevData2.length;
      }
		//set PrevData for next update
prevData[location] = filteredData;
	// Flash the polygon if data has changed
        if (isDataChanged) {
		 polygon.eachLayer(function (layer) {
              layer.getElement().classList.add("flash");
		setTimeout(function () {
                   layer.getElement().classList.remove("flash");
            }, 10000);
		 });
          }
		//create table rows
        filteredData.forEach((d) => {
          var row = table.insertRow();
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
	  var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
		  var locationWord;
  if (d.location === 0) {
    locationWord = "Asgarnia";
  } else if (d.location === 1) {
    locationWord = "Karamja/Crandor";
  } else if (d.location === 2) {
    locationWord = "Feldip/Isle of Souls";
  } else if (d.location === 3) {
    locationWord = "Fossil Island/Mos le'";
  } else if (d.location === 4) {
    locationWord = "Fremennik/Lunar Isle";
  } else if (d.location === 5) {
    locationWord = "Great Kourend";
  } else if (d.location === 6) {
    locationWord = "Kandarin";
  } else if (d.location === 7) {
    locationWord = "Kebos Lowlands";
  } else if (d.location === 8) {
    locationWord = "Kharidian Desert";
  } else if (d.location === 9) {
    locationWord = "Misthalin";
  } else if (d.location === 10) {
    locationWord = "Morytania";
  } else if (d.location === 11) {
    locationWord = "Piscatoris/Gnome Str.";
  } else if (d.location === 12) {
    locationWord = "Tirannwn";
  } else if (d.location === 13) {
    locationWord = "Wilderness";
  }
else {
    locationWord = d.location;
  }
		var now = Date.now();
	var relativeTime = Math.round((now - d.calledAt * 1000) / 60000);  
          cell1.innerHTML = relativeTime;
          cell2.innerHTML = d.tier;	
        // Convert Unix timestamp to normal time format
        var minTime = new Date(d.minTime * 1000).toLocaleString();
        var maxTime = new Date(d.maxTime * 1000).toLocaleString();
          cell3.innerHTML = d.world;
          cell4.innerHTML = d.calledLocation;
        var relativeTime2 = Math.round((now - d.maxTime * 1000) / 60000);
          cell5.innerHTML = relativeTime2 + " min ago";
          cell6.innerHTML = d.calledBy;
    });
  }

	  // Determine the type of the polygon argument and store it
  if (polygon instanceof L.Polygon) {
    polygonType = "Polygon";
  } else if (polygon instanceof L.GeoJSON) {
    polygonType = "GeoJSON";
  }
	//call updateTable to fire after headers are created
			updateTable();
	console.log('complete');

//set maxwidth to make table fit in white outline and bind to corresponding polygon
  var popup = L.popup({ maxWidth: 700 }).setContent(table);
  polygon.bindPopup(popup);
}

/* 
Start of marker data
*/
//set initial prevData and initial marker opacity
var prevData = {};
 var defaultOpacity = 0;
//add markers to the map
function addMarkers(map, data) {
	//set initial empty markers
  var markers = [];
 	
 var markerData = [
	 //Asgarnia
{ latlng: [2276, 5506], calledLocation: "Rimmington mine", color: "blue" },
{ latlng: [2391, 5404], calledLocation: "Crafting guild", color: "blue" },
{ latlng: [2617, 5302], calledLocation: "West Falador mine", color: "blue" },
{ latlng: [2597, 5673], calledLocation: "East Falador bank", color: "blue" },
{ latlng: [2882, 5637], calledLocation: "North Dwarven Mine entrance", color: "blue" },
{ latlng: [2974, 5229], calledLocation: "Taverley house portal", color: "blue" },
	 //Karamja
{ latlng: [2215, 4791], calledLocation: "Brimhaven northwest gold mine", color: "orange" },
{ latlng: [1981, 4811], calledLocation: "Southwest of Brimhaven Poh", color: "orange" },
{ latlng: [1663, 5120], calledLocation: "Nature Altar mine north of Shilo", color: "orange" },
{ latlng: [1549, 5064], calledLocation: "Shilo Village gem mine", color: "orange" },
{ latlng: [2441, 5091], calledLocation: "North Crandor", color: "orange" },
{ latlng: [2267, 5050], calledLocation: "South Crandor", color: "orange" },
	 //Feldip
{ latlng: [1126, 4285], calledLocation: "Corsair Cove bank", color: "red" },
{ latlng: [1210, 4033], calledLocation: "Corsair Resource Area", color: "red" },
{ latlng: [1078, 3987], calledLocation: "Myths' Guild", color: "red" },
{ latlng: [1444, 4297], calledLocation: "Feldip Hills (aks fairy ring)", color: "red" },
{ latlng: [1532, 4473], calledLocation: "Rantz cave", color: "red" },
{ latlng: [928, 3184], calledLocation: "Soul Wars south mine", color: "red" },
	 //Fossil Island/Mos le harmless
{ latlng: [3956, 8038], calledLocation: "Fossil Island Volcanic Mine entrance", color: "orange" },
{ latlng: [3995, 7906], calledLocation: "Fossil Island rune rocks", color: "orange" },
{ latlng: [1459, 7642], calledLocation: "Mos Le'Harmless west bank", color: "orange" },
	 //Fremennik/Lunar Isle
{ latlng: [3600, 4764], calledLocation: "Keldagrim entrance mine", color: "gold" },
{ latlng: [3650, 4633], calledLocation: "Rellekka mine", color: "gold" },
{ latlng: [3994, 3763], calledLocation: "Jatizso mine entrance", color: "gold" },
{ latlng: [4048, 3706], calledLocation: "Neitiznot south of rune rock", color: "gold" },
{ latlng: [4214, 4168], calledLocation: "Miscellania mine (cip fairy ring)", color: "gold" },
{ latlng: [4366, 3001], calledLocation: "Lunar Isle mine entrance", color: "gold" },
	 //Great Kourend
{ latlng: [3031, 1918], calledLocation: "Hosidius mine", color: "blue" },
{ latlng: [3678, 1891], calledLocation: "Port Piscarilius mine in Kourend", color: "blue" },
{ latlng: [3496, 1375], calledLocation: "Shayzien mine south of Kourend Castle", color: "blue" },
{ latlng: [3792, 1186], calledLocation: "South Lovakengj bank", color: "blue" },
{ latlng: [4072, 894], calledLocation: "Lovakite mine", color: "blue" },
{ latlng: [4111, 1865], calledLocation: "Arceuus dense essence mine", color: "blue" },
	 //Kandarin
{ latlng: [1811, 4390], calledLocation: "Yanille bank", color: "grey" },
{ latlng: [1975, 4455], calledLocation: "Port Khazard mine", color: "grey" },
{ latlng: [2252, 4408], calledLocation: "Ardougne Monastary", color: "grey" },
{ latlng: [2550, 4698], calledLocation: "South of Legends' Guild", color: "grey" },
{ latlng: [2855, 4996], calledLocation: "Catherby bank", color: "grey" },
{ latlng: [2986, 4350], calledLocation: "Coal Trucks west of Seers'", color: "grey" },
	 //Kebos Lowlands
{ latlng: [4000, 548], calledLocation: "Mount Karuulm bank", color: "orange" },
{ latlng: [4003, 422], calledLocation: "Mount Karuulm mine", color: "orange" },
{ latlng: [3505, 215], calledLocation: "Kebos Swamp mine", color: "orange" },
{ latlng: [3244, 358], calledLocation: "Chambers of Xeric bank", color: "orange" },
	 //Desert
{ latlng: [2395, 6636], calledLocation: "North of Al Kharid PvP Arena", color: "yellow" },
{ latlng: [2445, 6472], calledLocation: "Al Kharid mine", color: "yellow" },
{ latlng: [2042, 6412], calledLocation: "Al Kharid bank", color: "yellow" },
{ latlng: [2030, 6850], calledLocation: "Nw of Uzer (Eagle's Eyrie)", color: "yellow" },
{ latlng: [1219, 6886], calledLocation: "Nardah bank", color: "yellow" },
{ latlng: [1150, 6528], calledLocation: "Agility Pyramid mine", color: "yellow" },
{ latlng: [1282, 6097], calledLocation: "Desert Quarry mine", color: "yellow" },
	 //Misthalin
{ latlng: [2777, 6357], calledLocation: "Varrock east bank", color: "red" },
{ latlng: [2612, 6453], calledLocation: "Southeast Varrock mine", color: "red" },
{ latlng: [2637, 6108], calledLocation: "Champions' Guild mine", color: "red" },
{ latlng: [2257, 5865], calledLocation: "Draynor Village", color: "red" },
{ latlng: [2007, 6045], calledLocation: "West Lumbridge Swamp mine", color: "red" },
{ latlng: [2017, 6276], calledLocation: "East Lumbridge Swamp mine", color: "red" },
	 //Morytania
{ latlng: [2572, 7489], calledLocation: "Darkmeyer ess. mine entrance", color: "violet" },
{ latlng: [2194, 7535], calledLocation: "Theatre of Blood bank", color: "violet" },
{ latlng: [3007, 7098], calledLocation: "Canifis bank", color: "violet" },
{ latlng: [2208, 7084], calledLocation: "Burgh de Rott bank", color: "violet" },
{ latlng: [2253, 6938], calledLocation: "Abandoned Mine west of Burgh", color: "violet" },
	 //Piscatoris/Gnome Stronghold
{ latlng: [3022, 3916], calledLocation: "West of Grand Tree", color: "violet" },
{ latlng: [2859, 3928], calledLocation: "Gnome Stronghold spirit tree", color: "violet" },
{ latlng: [3457, 3606], calledLocation: "Piscatoris (akq fairy ring)", color: "violet" },
	 //Tirannwn
{ latlng: [2041, 3570], calledLocation: "Lletya", color: "green" },
{ latlng: [2025, 3390], calledLocation: "Isafdar runite rocks", color: "green" },
{ latlng: [2449, 3343], calledLocation: "Prifddinas Zalcano entrance", color: "green" },
{ latlng: [2360, 3537], calledLocation: "Arandar mine north of Lleyta", color: "green" },
{ latlng: [2780, 3103], calledLocation: "Mynydd nw of Prifddinas", color: "green" },
	 //Wilderness
{ latlng: [3260, 5908], calledLocation: "Mage of Zamorak mine (lvl 7 Wildy)", color: "black" },
{ latlng: [3331, 5638], calledLocation: "Skeleton mine (lvl 10 Wildy)", color: "black" },
{ latlng: [3820, 5864], calledLocation: "Hobgoblin mine (lvl 30 Wildy)", color: "black" },
{ latlng: [4214, 5755], calledLocation: "Lava maze runite mine (lvl 46 Wildy)", color: "black" },
{ latlng: [4371, 5731], calledLocation: "Pirates' Hideout (lvl 53 Wildy)", color: "black" },
{ latlng: [4438, 5857], calledLocation: "Mage Arena bank (lvl 56 Wildy)", color: "black" },
{ latlng: [4348, 6148], calledLocation: "Wilderness Resource Area", color: "black" },	 
  ];
//Add layergroups (needed for marker opacity)
	var AsgarniaMarkers = L.layerGroup().addTo(map);
	var KaramjaMarkers = L.layerGroup().addTo(map);
	var FeldipMarkers = L.layerGroup().addTo(map);
	var FossilMarkers = L.layerGroup().addTo(map);
	var FremennikMarkers = L.layerGroup().addTo(map);
	var KourendMarkers = L.layerGroup().addTo(map);
	var KandarinMarkers = L.layerGroup().addTo(map);
	var KebosMarkers = L.layerGroup().addTo(map);
	var DesertMarkers = L.layerGroup().addTo(map);
	var MisthalinMarkers = L.layerGroup().addTo(map);
	var MorytaniaMarkers = L.layerGroup().addTo(map);
	var PiscatorisMarkers = L.layerGroup().addTo(map);
	var TirannwnMarkers = L.layerGroup().addTo(map);
	var WildernessMarkers = L.layerGroup().addTo(map);
  

	// Clear the markers from the layer groups and from the map from previous update (also needed for marker opacity, to not overlay markers after updates
  	AsgarniaMarkers.clearLayers();
  	KaramjaMarkers.clearLayers();
	FeldipMarkers.clearLayers();
	FossilMarkers.clearLayers();
	FremennikMarkers.clearLayers();
	KourendMarkers.clearLayers();
	KandarinMarkers.clearLayers();
	KebosMarkers.clearLayers();
	DesertMarkers.clearLayers();
  	MisthalinMarkers.clearLayers();
	MorytaniaMarkers.clearLayers();
	PiscatorisMarkers.clearLayers();
	TirannwnMarkers.clearLayers();
	WildernessMarkers.clearLayers();
  map.eachLayer(function(layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });
//Remove shadow from all markers and set defaultOpacity
  markerData.forEach((d) => {
    var markerOptions = {
      calledLocation: d.calledLocation,
      shadow: false,
      opacity: defaultOpacity
    };
  //set colors for marker Layergroups
    var marker = L.marker(d.latlng, markerOptions);
	  if (d.color === "blue") {
      marker.addTo(AsgarniaMarkers, KourendMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-blue.png"
	    }));
    } else if (d.color === "orange") {
      marker.addTo(KaramjaMarkers, FossilMarkers, KebosMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-orange.png"
	    }));
    } else if (d.color === "red") {
      marker.addTo(MisthalinMarkers, FeldipMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png"
	    }));
    } else if (d.color === "gold") {
      marker.addTo(FremennikMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-gold.png"
	    }));
    } else if (d.color === "yellow") {
      marker.addTo(DesertMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-yellow.png"
	    }));
    } else if (d.color === "grey") {
      marker.addTo(KandarinMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "./images/marker-icon-dark-green.png"
	    }));
    } else if (d.color === "violet") {
      marker.addTo(MorytaniaMarkers, PiscatorisMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-violet.png"
	    }));
    } else if (d.color === "green") {
      marker.addTo(TirannwnMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-green.png"
	    }));
    } else if (d.color === "black") {
      marker.addTo(WildernessMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-black.png"
	    }));
    }
	  //call the updatetable for markers
    updateTable(marker, data);
  });
//define updatetable for markers
function updateTable(marker, data) {
	//filtered data where calledLocation strings are equal
  var filteredData = data.filter((d) => d.calledLocation === marker.options.calledLocation);
	//filtered data where calledLocation string is not empty
	var filteredData2 = filteredData.filter((d) => d.calledLocation !== "");

  // set initial datachange to false
  var isDataChanged = false;
	//if old data marker.options.calledLocation is not undefined
  if (prevData[marker.options.calledLocation] !== undefined) {
	  //filter prevdata amount with corresponding calledlocation string where it is not empty
    var prevData2 = prevData[marker.options.calledLocation].filter((d) => d.calledLocation !== "");
	  //check if more calls are added to marker compared to previous data
        isDataChanged = filteredData2.length > prevData2.length;
  }
	//set new prevData for next update
  prevData[marker.options.calledLocation] = filteredData;

  // Flash the marker if data has changed
  if (isDataChanged) {
    marker.getElement().classList.add("white-glow");
    setTimeout(function () {
      marker.getElement().classList.remove("white-glow");
    }, 30000);
  }

  // Create the table header
  var table = document.createElement("table");
  var headerRow = table.insertRow();
  var header1 = headerRow.insertCell(0);
  var header2 = headerRow.insertCell(1);
  var header3 = headerRow.insertCell(2);
  var header4 = headerRow.insertCell(3);
  var header5 = headerRow.insertCell(4);
  var header6 = headerRow.insertCell(5);

  header1.innerHTML = "<b>Calltime</b>";
  header2.innerHTML = "<b>Tier</b>";
  header3.innerHTML = "<b>World</b>";
  header4.innerHTML = "<b>Called Location</b>";
  header5.innerHTML = "<b>Landing Time</b>";
  header6.innerHTML = "<b>Called By</b>";
	
//opacity set when marker tables are empty
  var currentOpacity = marker.options.opacity !== undefined ? marker.options.opacity : defaultOpacity;
	//if filtered data has no calls for marker, and marker was previously filled
  if (filteredData2.length === 0 && currentOpacity !== 0.4) {
    marker.setOpacity(0.4);
    marker.options.opacity = 0.4;
	  //if filtered data has calls for marker, and marker was previously empty
  } else if (filteredData2.length !== 0 && currentOpacity !== 1.0) {
    marker.setOpacity(1.0);
    marker.options.opacity = 1.0;
  }
	//create table contents for markers
  filteredData.forEach((d) => {
    var row = table.insertRow();
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
	  var cell5 = row.insertCell(4);
	  var cell6 = row.insertCell(5);
		  var locationWord;
  if (d.location === 0) {
    locationWord = "Asgarnia";
  } else if (d.location === 1) {
    locationWord = "Karamja/Crandor";
  } else if (d.location === 2) {
    locationWord = "Feldip/Isle of Souls";
  } else if (d.location === 3) {
    locationWord = "Fossil Island/Mos le'";
  } else if (d.location === 4) {
    locationWord = "Fremennik/Lunar Isle";
  } else if (d.location === 5) {
    locationWord = "Great Kourend";
  } else if (d.location === 6) {
    locationWord = "Kandarin";
  } else if (d.location === 7) {
    locationWord = "Kebos Lowlands";
  } else if (d.location === 8) {
    locationWord = "Kharidian Desert";
  } else if (d.location === 9) {
    locationWord = "Misthalin";
  } else if (d.location === 10) {
    locationWord = "Morytania";
  } else if (d.location === 11) {
    locationWord = "Piscatoris/Gnome Str.";
  } else if (d.location === 12) {
    locationWord = "Tirannwn";
  } else if (d.location === 13) {
    locationWord = "Wilderness";
  }
else {
    locationWord = d.location;
  }
	var now = Date.now();
	var relativeTime = Math.round((now - d.calledAt * 1000) / 60000);  
          cell1.innerHTML = relativeTime;
          cell2.innerHTML = d.tier;
	  cell3.innerHTML = d.world;
        var maxTime = new Date(d.maxTime * 1000).toLocaleString();
        var relativeTime2 = Math.round((now - d.maxTime * 1000) / 60000);
	  cell4.innerHTML = d.calledLocation;
          cell5.innerHTML = relativeTime2 + " min ago";
	  cell6.innerHTML = d.calledBy;
  });

  // Create the popup for markers and add the table to it, set width to fit white outline
  var popup = L.popup({maxWidth: 700}).setContent(table);
  marker.bindPopup(popup);
}
}
