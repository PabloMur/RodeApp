"use client";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function CustomLayout({ children }: any) {
  return (
    <RecoilRoot>
      <div className="min-h-screen">
        <Navbar />
        {children}
      </div>
      <Footer />
    </RecoilRoot>
  );
}
