import React from "react";
import Header from "./components/Header";
import Currency from "./components/Currency";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Currency />
      <Toaster />
    </>
  );
}

export default App;
