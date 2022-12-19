import React from "react";
import { Imagenes } from "./Imagenes";
import { SvgIcons } from "./svgIcons";

export const Home = () => {
  return (
    <div>
      <h1 className="tituloHome">Solution Box Uruguay</h1>
      <SvgIcons />
      <Imagenes />
    </div>
  );
};
