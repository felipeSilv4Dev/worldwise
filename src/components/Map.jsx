import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './Map.module.css';
import { MapContainer } from 'react-leaflet';
import { Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
  const navigate = useNavigate();
  const [mapPosition, setMapPostion] = useState([40, 0]);

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.mapContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
