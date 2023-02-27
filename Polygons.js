	var polygon0, polygon1, polygon2, polygon3, polygon4, polygon5, polygon6, polygon7, polygon8, polygon9, polygon10, polygon11, polygon12, polygon13;
Promise.all([  fetch('./images/Asgarnia.geojson'),  fetch('./images/Karamja.geojson'),  fetch('./images/Feldip.geojson'), fetch('./images/Fossil.geojson'), fetch('./images/Fremennik.geojson'), fetch('./images/Great Kourend.geojson'), fetch('./images/Kandarin.geojson'), fetch('./images/Kebos.geojson'), fetch('./images/Desert.geojson'), fetch('./images/Misthalin.geojson'), fetch('./images/Morytania.geojson'), fetch('./images/PiscGnome.geojson'), fetch('./images/Tirannwn.geojson'), fetch('./images/Wilderness.geojson')])
.then(responses => Promise.all(responses.map(response => response.json())))
.then(result => {
  var polygon0 = L.geoJSON(result[0], {
    style: {
      fillColor: 'DodgerBlue',
	    color: 'DodgerBlue',
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
      fillColor: 'Plum',
	    color: 'Plum',
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


// Function to fetch data and update table
  function fetchDataAndUpdateTable() {
 fetch("stars.json?timestamp=" + Date.now())
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
	 // Call the fetch data function for the 1st time
  fetchDataAndUpdateTable();

  // Call the fetch data function every 60 seconds
  setInterval(fetchDataAndUpdateTable, 30000);
});
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
  header1.innerHTML = "<b>Location</b>";
  header2.innerHTML = "<b>World</b>";
  header3.innerHTML = "<b>Min Time</b>";
  header4.innerHTML = "<b>Max Time</b>";
  header5.innerHTML = "<b>Time until</b>";	
  header6.innerHTML = "<b>Called Location</b>";
	
  	function updateTable() {
		
		var filteredData = data.filter((d) => d.location === location);
		var filteredData2 = filteredData.filter((d) => d.calledLocation !== "");
		        // Compare the previous data with the new data
	var isDataChanged = false;
      if (prevData[location] !== undefined) {
         var prevData2 = prevData[location].filter((d) => d.calledLocation !== "");
        isDataChanged = filteredData2.length > prevData2.length;
      }
prevData[location] = filteredData;
	// Flash the polygon if data has changed and polygon type is defined
        if (isDataChanged) {
		 polygon.eachLayer(function (layer) {
              layer.getElement().classList.add("flash");
		setTimeout(function () {
                   layer.getElement().classList.remove("flash");
            }, 2000);
		 });
          }
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
          cell1.innerHTML = locationWord;
          cell2.innerHTML = d.world;	
        // Convert Unix timestamp to normal time format
        var minTime = new Date(d.minTime * 1000).toLocaleString();
        var maxTime = new Date(d.maxTime * 1000).toLocaleString();
          cell3.innerHTML = minTime;
          cell4.innerHTML = maxTime;
	var now = Date.now();
        var relativeTime = Math.round((d.minTime * 1000 - now) / 60000);
        if (relativeTime > 0) {
          relativeTime = -relativeTime;
        }
          cell5.innerHTML = relativeTime + " min";
          cell6.innerHTML = d.calledLocation;
    });
  }

	  // Determine the type of the polygon argument and store it
  if (polygon instanceof L.Polygon) {
    polygonType = "Polygon";
  } else if (polygon instanceof L.GeoJSON) {
    polygonType = "GeoJSON";
  }
			updateTable();
	console.log('complete');


  var popup = L.popup({ maxWidth: 700 }).setContent(table);
  polygon.bindPopup(popup);
}

/* 
Start of marker data
*/

var prevData = {};
 var defaultOpacity = 0;
function addMarkers(map, data) {
	
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
{ latlng: [1811, 4390], calledLocation: "Yanille bank", color: "black" },
{ latlng: [1975, 4455], calledLocation: "Port Khazard mine", color: "black" },
{ latlng: [2252, 4408], calledLocation: "Ardougne Monastary", color: "black" },
{ latlng: [2550, 4698], calledLocation: "South of Legends' Guild", color: "black" },
{ latlng: [2855, 4996], calledLocation: "Catherby bank", color: "black" },
{ latlng: [2986, 4350], calledLocation: "Coal Trucks west of Seers'", color: "black" },
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
  ];

	var AsgarniaMarkers = L.layerGroup().addTo(map);
	var KaramjaMarkers = L.layerGroup().addTo(map);
	var FeldipMarkers = L.layerGroup().addTo(map);
	var FossilMarkers = L.layerGroup().addTo(map);
	var FremennikMarkers = L.layerGroup().addTo(map);
	var KourendMarkers = L.layerGroup().addTo(map);
	var KandarinMarkers = L.layerGroup().addTo(map);
	var KebosMarkers = L.layerGroup().addTo(map);
var MisthalinMarkers = L.layerGroup().addTo(map);
  var DesertMarkers = L.layerGroup().addTo(map);

	// Clear the markers from the layer groups and from the map from previous update
  AsgarniaMarkers.clearLayers();
  KaramjaMarkers.clearLayers();
	FeldipMarkers.clearLayers();
	FossilMarkers.clearLayers();
	FremennikMarkers.clearLayers();
	KourendMarkers.clearLayers();
	KandarinMarkers.clearLayers();
	KebosMarkers.clearLayers();
  MisthalinMarkers.clearLayers();
  DesertMarkers.clearLayers();
  map.eachLayer(function(layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  markerData.forEach((d) => {
    var markerOptions = {
      calledLocation: d.calledLocation,
      shadow: false,
      opacity: defaultOpacity
    };
  
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
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-gold.png"
	    }));
    } else if (d.color === "black") {
      marker.addTo(KandarinMarkers);
	    marker.setIcon(L.icon({
		    iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-black.png"
	    }));
    }
    updateTable(marker, data);
  });

function updateTable(marker, data) {
	
  var filteredData = data.filter((d) => d.calledLocation === marker.options.calledLocation);
	var filteredData2 = filteredData.filter((d) => d.calledLocation !== "");

  // Compare the previous data with the new data
  var isDataChanged = false;
  if (prevData[marker.options.calledLocation] !== undefined) {
    var prevData2 = prevData[marker.options.calledLocation].filter((d) => d.calledLocation !== "");
        isDataChanged = filteredData2.length > prevData2.length;
  }
  prevData[marker.options.calledLocation] = filteredData;

  // Flash the marker if data has changed
  if (isDataChanged) {
    marker.getElement().classList.add("white-glow");
    setTimeout(function () {
      marker.getElement().classList.remove("white-glow");
    }, 2000);
  }

  // Create the table
  var table = document.createElement("table");
  var headerRow = table.insertRow();
  var header1 = headerRow.insertCell(0);
  var header2 = headerRow.insertCell(1);
  var header3 = headerRow.insertCell(2);
  var header4 = headerRow.insertCell(3);
  var header5 = headerRow.insertCell(4);
  var header6 = headerRow.insertCell(5);

  header1.innerHTML = "<b>Location</b>";
  header2.innerHTML = "<b>World</b>";
  header3.innerHTML = "<b>Min Time</b>";
  header4.innerHTML = "<b>Max Time</b>";
  header5.innerHTML = "<b>Time until</b>";
  header6.innerHTML = "<b>Called Location</b>";
	
//opacity set when marker tables are empty
  var currentOpacity = marker.options.opacity !== undefined ? marker.options.opacity : defaultOpacity;
  if (filteredData2.length === 0 && currentOpacity !== 0.4) {
    marker.setOpacity(0.4);
    marker.options.opacity = 0.4; // Set new opacity value
  } else if (filteredData2.length !== 0 && currentOpacity !== 1.0) {
    marker.setOpacity(1.0);
    marker.options.opacity = 1.0; // Set new opacity value
  }
	
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
          cell1.innerHTML = locationWord;
          cell2.innerHTML = d.world;	
        // Convert Unix timestamp to normal time format
        var minTime = new Date(d.minTime * 1000).toLocaleString();
        var maxTime = new Date(d.maxTime * 1000).toLocaleString();
          cell3.innerHTML = minTime;
          cell4.innerHTML = maxTime;
	var now = Date.now();
        var relativeTime = Math.round((d.minTime * 1000 - now) / 60000);
        if (relativeTime > 0) {
          relativeTime = -relativeTime;
        }
          cell5.innerHTML = relativeTime + " min";
          cell6.innerHTML = d.calledLocation;
  });

  // Create the popup and add the table to it
  var popup = L.popup({maxWidth: 700}).setContent(table);
  marker.bindPopup(popup);
}
}
