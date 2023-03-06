import { render } from "@testing-library/react";
import React, { Component } from "react";
import Toc from "./components/Toc";
import Subject from "./components/Subject";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <div>
      <Subject title="WEB" sub="world wide web!" />
      <Subject title="REACT" sub="For UI!" />
      <Toc />
      <Content title="HTML" desc="HTML is HyperText Markup Language!" />
    </div>
  );
}

export default App;
