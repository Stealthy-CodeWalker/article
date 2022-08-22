import React from "react";
import Background from "./components/Background/Background";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

export default function App(){
  return(
    <main>
      <Background/>
      <Header/>
      <Content/>
    </main>
  );
}