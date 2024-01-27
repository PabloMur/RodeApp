"use client";
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { createMap, initGeolocate } from "../lib/Mapbox";
import { userLocation } from "@/atoms";
import { useRecoilState } from "recoil";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG9sbXVyIiwiYSI6ImNsYWc0ejh0eTFhYTEzcXBlNGh4N3p6eGgifQ.J7CA9nlTGPzjWhdDW1QFvA";

export default function MapboxNavigation() {
  let myRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useRecoilState(userLocation);

  const creteMapAndControls = async () => {
    let map = (await createMap(myRef.current)) as any;
    const geolocateControl = await initGeolocate();

    // Maneja eventos cuando la ubicación cambia
    geolocateControl.on("geolocate", (event: any) => {
      const { latitude, longitude } = event.coords;
      setValue({ latitude, longitude });
    });

    map.addControl(geolocateControl);
    map.addControl(new mapboxgl.NavigationControl());
  };
  useEffect(() => {
    creteMapAndControls();
  }, []);

  return (
    <div className="h-[80vh] w-[90%]  relative rounded-xl" ref={myRef}></div>
  );
}
