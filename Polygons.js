var polygon0 = [];
fetch('./images/Asgarnia.geojson')
  .then(response => response.json())
  .then(data => {
    polygon0 = L.geoJSON(data).addTo(map);
});
console.log(polygon0);

var polygon1 = [];
fetch('./images/Karamja.geojson')
  .then(response => response.json())
  .then(data => {
    polygon1 = L.geoJSON(data).addTo(map);
});
console.log(polygon1);

var polygon2 = [];
fetch('./images/Feldip.geojson')
  .then(response => response.json())
  .then(data => {
    polygon2 = L.geoJSON(data).addTo(map);
});
console.log(polygon2);

	   fetch("stars.json?timestamp=" + Date.now())
      .then((response) => response.json())
      .then((data) => {
		   createPopup(polygon0, 0, data);
		   createPopup(polygon1, 1, data);
		   createPopup(polygon2, 2, data);
	    console.log(data); // log the retrieved data
	  });
  var popup = L.popup({ maxWidth: 700 }).setContent(table);
  polygon.bindPopup(popup);
