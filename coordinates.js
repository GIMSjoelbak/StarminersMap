const map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -3
      });
      const bounds = [[0,0], [4881,8337]];
      const image = L.imageOverlay('images/osrs_world_map_january11_2023.png', bounds).addTo(map);

      map.fitBounds(bounds);
