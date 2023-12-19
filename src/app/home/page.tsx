import WeatherGadget from "@/components/WeatherGadget";
import WelcomeCard from "@/components/cards/WelcomeCard";

export default function MainPanel() {
  return (
    <div className="flex  flex-col justify-start items-center h-[88vh] w-full p-2 gap-2">
      <WelcomeCard></WelcomeCard>
      <WeatherGadget></WeatherGadget>
    </div>
  );
}
