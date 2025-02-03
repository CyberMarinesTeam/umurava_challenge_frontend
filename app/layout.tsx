"use client";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { AppStore, makeStore } from "@/lib/redux/store";
import { useRef, Suspense } from "react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./loading";
import { ToastContainer, Flip } from "react-toastify";

const work_Sans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "100", "400", "700", "900"],
});

// const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

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
    <Suspense fallback={<Loading />}>
      <html lang="en">
        <body className={`${work_Sans.className}  antialiased`}>
          <Provider store={storeRef.current}>
            <ToastContainer
              position="top-right"
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnHover
              theme="dark"
              transition={Flip}
            />
            {children}
          </Provider>
        </body>
      </html>
    </Suspense>
  );
}
