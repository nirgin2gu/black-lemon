import { useState } from 'react';
import Map from '../pages/components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4308, 24.7264], zoom: 12});

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [59.4308, 24.7264], zoom: 15})}>Black Lemon</button>
    <button onClick={() => setCoordinates({lngLat: [59.4308, 24.7264], zoom: 12})}>Zoomi välja</button>
 <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;
    