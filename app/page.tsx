'use client'
import { Provider } from "react-redux";
import Home from "./guest/home/page";
import React from "react";
import { store } from "@/store/store";
const page = () => {
  return (
    <div>
      <Provider store={store}>
      <Home />
      </Provider>
     
    </div>
  );
};

export default page;
