"use strict";

import Clipboard from "clipboard";
import { highlightBlock } from "highlight.js";

const codeBlocks = document.querySelectorAll("pre code");
Array.from(codeBlocks).forEach(block => highlightBlock(block));

new Clipboard(codeBlocks, { target: trigger => trigger });

const toc = document.getElementById("toc");
const scrollTop = toc.offsetTop + toc.clientHeight - window.innerHeight + 224;

window.addEventListener("scroll", event => {
  if (document.documentElement.scrollTop >= scrollTop) {
    toc.classList.add("fixed");
  } else {
    toc.classList.remove("fixed");
  }
});
