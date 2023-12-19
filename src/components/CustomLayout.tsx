"use client";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Providers from "@/app/Providers";

export default function CustomLayout({ children }: any) {
  return (
    <Providers>
      <RecoilRoot>
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
      </RecoilRoot>
    </Providers>
  );
}
