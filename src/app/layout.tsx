import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomLayout from "@/components/CustomLayout";
import "mapbox-gl/dist/mapbox-gl.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RodeApp",
  description:
    "Modulo 11 | Carrera de Desarrollo Web FullStack | Apx | Nextjs | Typescript | Firebase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
