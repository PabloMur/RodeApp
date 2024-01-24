import { useRouter } from "next/navigation";
import { deleteListModal, lastListID, loaderAtom, menuAtom } from "@/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  APIDeleteList,
  APIGetListData,
  createList,
  getUserLists,
  getWeather,
} from "@/lib/APICalls";

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
          console.log(weather);

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
  const { data: session } = useSession();
  return () => {
    if (session?.user) {
      goto("/home");
    } else {
      goto("/login");
    }
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
  const loaderSetter = useSetRecoilState(loaderAtom);
  const { data: session } = useSession();
  const userEmail = session?.user?.email || "";

  return async () => {
    loaderSetter(true);
    const lists = await getUserLists(userEmail);
    loaderSetter(false);
    return lists;
  };
}

export function useMiniList() {
  const lastListIDSetter = useSetRecoilState(lastListID);
  const goto = useGoTo();
  return (id: string, route: string) => {
    lastListIDSetter(id);
    goto(route);
  };
}

export function useGetListData() {
  const loaderSetter = useSetRecoilState(loaderAtom);
  return async (listID: string) => {
    loaderSetter(true);
    const listData = await APIGetListData(listID);
    loaderSetter(false);
    return listData;
  };
}

export function useGetRecentList() {
  const listID = useRecoilValue(lastListID);
  return async () => {
    const listData = await APIGetListData(listID);
    console.log(listData);
    return listData;
  };
}

export function useDeleteList() {
  const loaderSetter = useSetRecoilState(loaderAtom);
  const listID = useRecoilValue(lastListID);
  const goto = useGoTo();
  return async () => {
    loaderSetter(true);
    await APIDeleteList(listID);
    loaderSetter(false);
    goto("/home");
  };
}
