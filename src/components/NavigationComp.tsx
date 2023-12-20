"use client";

import { useRef, useState } from "react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
export default function MyComponent() {
  const mapRef = useRef<any>(null);
  const [viewport, setViewport] = useState({
    latitude: 43,
    longitude: -79,
    zoom: 10,
  });
  return (
    <div className="relative">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="calc(100vh-64px)"
        mapboxApiAccessToken={process.env.MAPBOX_API_TOKEN}
        ref={mapRef}
      ></ReactMapGL>
    </div>
  );
}
