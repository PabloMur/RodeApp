import Helmet from "./Helmet";
import { useLogoHook } from "@/hooks";
export default function Logo() {
  const logoHook = useLogoHook();
  return (
    <div
      className="flex items-center justify-center gap-2 border border-black rounded-full p-2 cursor-pointer"
      onClick={() => {
        logoHook();
      }}
    >
      <Helmet></Helmet>
      <h3 className="text-black text-xl">RodeApp</h3>
    </div>
  );
}
