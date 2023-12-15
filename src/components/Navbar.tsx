import { BurguerBtn } from "./ui/Buttons";
import Logo from "./ui/Logo";
import ManuDesplegable from "./ui/MenuDesplegable";
import MenuLiBtn from "./ui/Buttons/MenuLiBtn";
export default function Navbar() {
  return (
    <nav className="bg-orange-500  w-full flex justify-between items-center p-2 h-[12vh] relative">
      <Logo></Logo>
      <BurguerBtn></BurguerBtn>
      <ManuDesplegable>
        <MenuLiBtn content={"Calculator"}></MenuLiBtn>
        <MenuLiBtn content={"Lists"}></MenuLiBtn>
      </ManuDesplegable>
    </nav>
  );
}
