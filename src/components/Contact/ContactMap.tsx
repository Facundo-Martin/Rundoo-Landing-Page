import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 37.49456,
  lng: -122.2291,
};
export default function ContactMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA8_4azs9OKZB4llcB4IntYA0kiym3kV1U',
  });
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return <div>ContactMap</div>;
  }
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} />
      </>
    </GoogleMap>
  );
}
