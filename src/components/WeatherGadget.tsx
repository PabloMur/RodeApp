"use client";
import { useGeolocation } from "@/hooks";
import Image from "next/image";

export default function WeatherGadget() {
  const { weatherData, error } = useGeolocation();

  // Manejar el caso de error
  if (error) {
    return (
      <div className="border-2 border-red-500 rounded-2xl p-4 w-full flex justify-center items-center h-40">
        Error: {error}
      </div>
    );
  }

  // Manejar el caso de carga
  if (!weatherData) {
    return (
      <div className="border-2 border-gray-500 rounded-2xl p-4 w-full flex justify-center items-center h-40">
        Cargando datos...
      </div>
    );
  }

  // Desestructurar datos del clima
  const {
    current: {
      temp_c: temperature,
      condition: { text: description, icon },
    },
    location,
  } = weatherData as any;

  return (
    <div className="border-2 border-orange-500 rounded-2xl p-4 w-full flex justify-center items-center h-40 text-orange-500">
      <div className="flex items-center">
        <div className="w-2/3 flex flex-col h-[100%] gap-2">
          <p className="text-md font-bold">{description}</p>
          <p className="text-xs">
            Ubicación: {location.name}, {location.region}, {location.country}
          </p>
        </div>
        <div className="p-4 w-full flex flex-col-reverse justify-center items-center h-40">
          <p className="text-4xl font-bold flex">{temperature} °C</p>
          <Image
            src={`https:${icon}`}
            alt={`Clima actual`}
            height={70}
            width={70}
          />
        </div>
      </div>
    </div>
  );
}
