import { BurguerBtn } from "./ui/Buttons";
import Logo from "./ui/Logo";
import ManuDesplegable from "./ui/MenuDesplegable";
import MenuLiBtn from "./ui/Buttons/MenuLiBtn";
import SignoutBtn from "./ui/Buttons/Signout";
export default function Navbar() {
  return (
    <nav className="bg-orange-500  w-full flex justify-between items-center p-2 h-[12vh] relative px-4">
      <Logo></Logo>
      <BurguerBtn></BurguerBtn>
      <ManuDesplegable>
        <MenuLiBtn route={"/"} content={"Inicio"}></MenuLiBtn>
        <MenuLiBtn route={"/lists"} content={"Crear Lista"}></MenuLiBtn>
        <MenuLiBtn route={"/my-lists"} content={"Mis Listas"}></MenuLiBtn>
        <MenuLiBtn route={"/profile"} content={"Perfil"}></MenuLiBtn>
        <MenuLiBtn route={"/navigation"} content={"Navegar"}></MenuLiBtn>
        <SignoutBtn></SignoutBtn>
      </ManuDesplegable>
    </nav>
  );
}
