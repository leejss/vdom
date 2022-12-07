import "./style.css";
import { createElement, render } from "./vdom";

// console.log(createElement("div"));

const Box = createElement("div", {}, createElement("p", { class: "hello" }, "HI!"));

const root = document.getElementById("app")!;

const app = render(Box);

root.appendChild(app);
