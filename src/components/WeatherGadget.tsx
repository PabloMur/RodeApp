"use client";
import { useGeolocation } from "@/hooks";
export default function WeatherGadget() {
  useGeolocation();
  return (
    <div className="border-2 border-orange-500 rounded-2xl p-4 w-full flex justify-center items-center">
      Aca va a estar la informacion del clima
    </div>
  );
}
