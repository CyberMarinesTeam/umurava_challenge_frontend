"use client";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { AppStore, makeStore } from "@/lib/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";

const work_Sans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "100", "400", "700", "900"],
});

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <html lang="en">
      <body className={`${work_Sans.className}  antialiased`}>
        <Provider store={storeRef.current}>{children}</Provider>
      </body>
    </html>
  );
}
