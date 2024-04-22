import React from "react";
import BaseShapes from "./baseShapes.svg";
import Path from "./path.svg";
import "./index.css";

const list = [
  {
    title: "简单图形",
    component: BaseShapes,
  },
  {
    title: "path路径绘制",
    component: Path,
  },
];

const DEMOS = () => {
  return (
    <ul className="demos">
      {list.map((item) => {
        const { title, component } = item;
        return (
          <li key={title} className="item">
            <h3 className="title">{title}</h3>
            <item.component />
          </li>
        );
      })}
    </ul>
  );
};

export default DEMOS;
