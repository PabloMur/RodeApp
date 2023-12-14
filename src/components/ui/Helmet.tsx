import helmet from "../../../public/helmet.svg";
import Image from "next/image";

export default function Helmet() {
  return (
    <Image
      src={helmet}
      alt="isotipo de la aplicacion"
      height={35}
      width={35}
    ></Image>
  );
}
