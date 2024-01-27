import MapboxNavigation from "@/components/MapComp";

export default function Navigation() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[90vh]">
      <MapboxNavigation></MapboxNavigation>
    </div>
  );
}
