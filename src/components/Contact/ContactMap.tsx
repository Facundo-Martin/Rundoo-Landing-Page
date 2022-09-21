import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: 37.494744607467815,
  lng: -122.22848885266833,
};
export default function ContactMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA8_4azs9OKZB4llcB4IntYA0kiym3kV1U',
  });

  if (!isLoaded) {
    return <div>ContactMap</div>;
  }
  return (
    <div className="w-[550px] h-[400px] shadow-md rounded-md overflow-hidden">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <Marker position={center} />
        </>
      </GoogleMap>
    </div>
  );
}
