import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const navigate = useNavigate();

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        console.log('clickou');
        navigate('form');
      }}
    >
      <h1>Map</h1>
      <h1>
        Position: {lat},{lng}
      </h1>
    </div>
  );
};

export default Map;
