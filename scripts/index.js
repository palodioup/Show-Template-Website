import { boxToBeShown } from "./modules.js";
import { HTMLObject } from "./modules.js";

const resultArea = document.getElementById("footer");
const renderButton = document.getElementById("run");

renderButton.onclick = () => {
  resultArea.innerHTML = boxToBeShown;
};
