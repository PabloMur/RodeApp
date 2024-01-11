import RecentList from "@/components/RecentList";
import WeatherGadget from "@/components/WeatherGadget";
import CreateListCard from "@/components/cards/CreateList";
import NavigateCard from "@/components/cards/NavigateCard";
import WelcomeCard from "@/components/cards/WelcomeCard";

export default function MainPanel() {
  return (
    <div className="flex  flex-col justify-start items-center min-h-[88vh] w-full p-2 gap-2 bg-black">
      <WelcomeCard></WelcomeCard>
      <WeatherGadget></WeatherGadget>
      <div className="flex justify-end items-center w-full gap-2">
        <NavigateCard></NavigateCard>
        <CreateListCard></CreateListCard>
      </div>
      <RecentList></RecentList>
    </div>
  );
}
