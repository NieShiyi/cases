import React from "react";
import BaseShapes from "./baseShapes.svg";
import Path from "./path.svg";
import BaseTags from "./baseTags.svg";
import "./index.css";

const list = [
  {
    title: "基础图形",
    component: BaseShapes,
  },
  {
    title: "path路径绘制",
    component: Path,
  },
  {
    title: "基础标签",
    component: BaseTags,
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
