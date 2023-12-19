import { useRouter } from "next/navigation";
import { menuAtom } from "@/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { signIn, signOut } from "next-auth/react";

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
  return () => {
    goto("/");
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
    await signIn("google", { callbackUrl: "http://localhost:3000/home" });
  };
}

export function useLogOut() {
  return async () => {
    await signOut({ callbackUrl: "http://localhost:3000/" });
  };
}
