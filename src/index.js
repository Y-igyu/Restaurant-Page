import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

home();

homeBtn.addEventListener("click", () => {
  home();
});
menuBtn.addEventListener("click", () => {
  menu();
});
aboutBtn.addEventListener("click", () => {
  about();
});
