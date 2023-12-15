import CtaBtn from "@/components/ui/Buttons/CtaBtn";
import css from "@/styles/home.module.css";
export default function Home() {
  return (
    <div
      className={`${css.mainContainer} flex flex-col justify-center items-center min-h-[88vh] w-full bg-white flex-grow relative`}
    >
      <h1 className="text-2xl font-bold z-10">Bienvenido a RodeApp</h1>
      <h3 className="z-20 text-center">
        Organiza todo para tu viaje en un solo lugar!
      </h3>
      <CtaBtn></CtaBtn>
      <div className="h-full w-full absolute top-0 bg-black/50"></div>
    </div>
  );
}
