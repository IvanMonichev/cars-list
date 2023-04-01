import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { Location } from '../../types/cars';
import Pin from '../../assets/images/pin.svg';


type MapProps = {
  locations: Location[]
};

const customIcon = new Icon({
  iconUrl: Pin,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ locations }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {

      locations.forEach((location) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(customIcon)
          .addTo(map);

        markers.push(marker);
      });

      map.setView({ lat: 59.986607, lng: 30.321435 });
    }

    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };

  }, [map, locations]);

  return (
    <div
      className="map"
      ref={mapRef}
    />
  );
}

export default Map;
