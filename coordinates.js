      		  import json from "./stars.json";

L.CursorHandler = L.Handler.extend({

        addHooks: function () {
            this._popup = new L.Popup();
            this._map.on('mouseover', this._open, this);
            this._map.on('mousemove', this._update, this);
            this._map.on('mouseout', this._close, this);
        },

        removeHooks: function () {
            this._map.off('mouseover', this._open, this);
            this._map.off('mousemove', this._update, this);
            this._map.off('mouseout', this._close, this);
        },

        _open: function (e) {
            this._update(e);
            this._popup.openOn(this._map);
        },

        _close: function () {
            this._map.closePopup(this._popup);
        },

        _update: function (e) {
            this._popup.setLatLng(e.latlng)
                .setContent(e.latlng.toString());
        }


    });

    L.Map.addInitHook('addHandler', 'cursor', L.CursorHandler);	 

      const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2
      });
	  map.cursor.enable();
      const bounds = [[0,0], [4881,8337]];
      const image = L.imageOverlay('images/osrs_world_map_january11_2023.png', bounds).addTo(map);

		  var Karamja = L.polygon([
			  [1300,4855],
			  [1215,4890],
			  [1200,5530],
			  [1855,5410],
			  [2020,5425],
			  [2130,5190],
			  [2430,5180],
			  [2485,5145],
			  [2470,5085],
			  [2292,4810],
			  [2190,4705],
			  [2020,4695],
			  [1960,4805],
			  [1915,4840]
			  ]).addTo(map);
		  
		  var Feldip = L.polygon([
			  [1582,4502],
			  [1565,2965],
			  [1420,2865],
			  [1135,2838],
			  [900,3065],
			  [855,3280],
			  [1107,4394],
			  [1435,4550],
			  [1550,4538]
			  ]).addTo(map);
		  Feldip.setStyle({color: 'red'});
		  
		  const onEachFeature = (feature, layer) => {
			  let popupContent = `
			  <table>
			  <tr>
			  <th>location:</th>
			  <td>${feature.value.location}</td>
			  </tr>
		  </table>`;
			   if (feature.value && feature.value.popupContent) {
    popupContent += feature.value.popupContent;
  }
			   layer.bindPopup(popupContent);
};
		  const feature = L.geoJSON(json, {
  onEachFeature
}).addTo(map);
			  
			  

      map.fitBounds(bounds);
