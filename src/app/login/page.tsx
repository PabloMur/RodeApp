"use client";
import { signIn } from "next-auth/react";
export default function Login() {
  return (
    <div>
      Login page
      <button
        onClick={() => {
          signIn();
        }}
      >
        Iniciar Sesion
      </button>
    </div>
  );
}
