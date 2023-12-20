import { useRouter } from "next/navigation";
import { menuAtom } from "@/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Location {
  latitude: any;
  longitude: any;
}

interface GeolocationHook {
  location: Location | null;
  error: string | null;
}

export function useGeolocation(): GeolocationHook {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);

          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocalización no está soportada en este navegador");
    }
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  return { location, error };
}

export function useGoTo() {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
}

export function useMenuLi() {
  const [menuStatus, menuStatusSetter] = useRecoilState(menuAtom);
  const goto = useGoTo();
  return (route: string) => {
    goto(route);
    menuStatusSetter(!menuStatus);
  };
}

export function useLogoHook() {
  const goto = useGoTo();
  const menuStatusSetter = useSetRecoilState(menuAtom);
  const { data: session } = useSession();
  return () => {
    session ? goto("/home") : goto("/");
    menuStatusSetter(false);
  };
}

export function useCTA() {
  const goto = useGoTo();
  return () => {
    goto("/login");
  };
}

export function useSignin() {
  //Este hook es para iniciar sesion
  return async () => {
    await signIn("google", {
      callbackUrl: `${process.env.NEXT_PUBLIC_ENV}/home`,
    });
  };
}

export function useLogOut() {
  return async () => {
    await signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_ENV}/` });
  };
}
