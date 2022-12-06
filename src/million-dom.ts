import { _, m, render } from "million";

const divNode = m(
  "div",
  {
    class: "red",
  },
  ["hello world"],
);
// console.log(divNode);

const a = render(document.body, divNode);
console.dir(a);
