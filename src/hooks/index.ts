import { useRouter } from "next/navigation";
import { loaderAtom, menuAtom } from "@/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { createList, getUserLists, getWeather } from "@/lib/APICalls";

interface Location {
  latitude: any;
  longitude: any;
}

interface GeolocationHook {
  weatherData: Location | null;
  error: string | null;
}

export function useGeolocation(): GeolocationHook {
  const [weatherData, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const weather = (await getWeather(latitude, longitude)) as any;
          setLocation(weather);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocalización no está soportada en este navegador");
    }
  }, []);

  return { weatherData, error };
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
      callbackUrl: `${process.env.NEXT_PUBLIC_ENV}/my-lists`,
    });
  };
}

export function useLogOut() {
  return async () => {
    await signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_ENV}/` });
  };
}

export function useCreateList() {
  const loaderSetter = useSetRecoilState(loaderAtom);
  return async function (list: any) {
    loaderSetter(true);
    const createdList = await createList(list);
    loaderSetter(false);
    return createdList;
  };
}

export function useGetUserList() {
  const loaderSetter = useSetRecoilState(loaderAtom)
  const { data: session } = useSession();
  const userEmail = session?.user?.email || "";

  return async () => {
    loaderSetter(true)
    console.log("trayendo los datos");
    
    const lists = await getUserLists(userEmail);
    console.log("trayendo los datos");
    loaderSetter(false)
    return lists;
  };

}
