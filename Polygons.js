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

function updateTable(marker, data) {
	var prevData = {};
  var filteredData = data.filter((d) => d.calledLocation === marker.options.calledLocation);
	var filteredData2 = filteredData.filter((d) => d.calledLocation !== "");

  // Compare the previous data with the new data
  var isDataChanged = false;
  if (marker.prevData[marker.options.calledLocation] !== undefined) {
    var prevData2 = prevData[marker.options.calledLocation].filter((d) => d.calledLocation !== "");
        isDataChanged = filteredData2.length > prevData2.length;
  }
  marker.prevData[calledLocation] = filteredData;

  // Flash the marker if data has changed
  if (isDataChanged) {
    marker.getElement().classList.add("flash");
    setTimeout(function () {
      marker.getElement().classList.remove("flash");
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

function addMarkers(map, data) {
  var markers = [];

  var markerData = [
    { latlng: [2395, 6636], calledLocation: "North of Al Kharid PvP Arena" },
    { latlng: [2445, 6472], calledLocation: "Al Kharid mine" },
  ];

  markerData.forEach((d) => {
    var marker = L.marker(d.latlng, { calledLocation: d.calledLocation }).addTo(map);
    markers.push(marker);
  });

  markers.forEach((marker) => {
    updateTable(marker, data);
  });
}
