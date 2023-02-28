
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
        }

    });

    L.Map.addInitHook('addHandler', 'cursor', L.CursorHandler);	 

      const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2.5
      });
	  map.cursor.enable();
      const bounds = [[0,0], [4881,8337]];
      const image = L.imageOverlay('images/osrs_world_map_january11_2023.png', bounds).addTo(map);

      map.fitBounds(bounds);
