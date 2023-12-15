import { useMenuLi } from "@/hooks";

export default function ManuLiBtn({ route, content }: any) {
  const menuLiHook = useMenuLi();
  const handleClick = () => {
    menuLiHook(route);
  };
  return (
    <button
      className="text-black rounded-full border border-black p-3 m-1 w-[90%]"
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
