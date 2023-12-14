import css from "@/styles/home.module.css";
export default function Home() {
  return (
    <div
      className={`${css.mainContainer} flex flex-col justify-center items-center min-h-[90vh] w-full bg-white flex-grow`}
    >
      <h1 className="text-3xl font-bold">Bienvenido a RodeApp</h1>
      <h3 className="">Una app hecha por moteros, para moteros</h3>
    </div>
  );
}
