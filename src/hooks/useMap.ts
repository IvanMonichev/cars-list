import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

const MapSettings = {
  TILE_LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: 59.986607,
          lng: 30.321435
        },
        zoom: 13,
      });

      const layer = new TileLayer(
        MapSettings.TILE_LAYER,
        {
          attribution: MapSettings.ATTRIBUTION,
        },
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, map]);

  return map;
}

export default useMap;
