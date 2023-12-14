import Helmet from "./Helmet";
export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 border border-black rounded-full p-2 cursor-pointer">
      <Helmet></Helmet>
      <h3 className="text-black text-xl">RodeApp</h3>
    </div>
  );
}
