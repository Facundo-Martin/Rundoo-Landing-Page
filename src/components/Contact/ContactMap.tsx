import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { MapPinIcon as SolidMapPinIcon } from '@heroicons/react/24/solid';

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
    <div className="w-full max-w-xl">
      <a href="https://goo.gl/maps/HYA6uSi2jh1tCp9D6" target="_blank" rel="noreferrer">
        <div className="w-full h-[400px] shadow-md rounded-md overflow-hidden">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
            {/* Child components, such as markers, info windows, etc. */}
            <>
              <Marker position={center} />
            </>
          </GoogleMap>
        </div>
      </a>
      <a href="https://goo.gl/maps/HYA6uSi2jh1tCp9D6" target="_blank" rel="noreferrer" className="flex items-center gap-1 mt-2 group">
        <MapPinIcon className="w-6 h-6 group-hover:hidden" />
        <SolidMapPinIcon className="w-6 h-6 hidden group-hover:block fill-red-600/90" />
        <p className="group-hover:font-medium">370 Convention Way Suite 102, Redwood City, CA</p>
      </a>
    </div>
  );
}
