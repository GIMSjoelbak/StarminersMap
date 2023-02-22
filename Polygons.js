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
