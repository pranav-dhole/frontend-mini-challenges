import { quoteData } from "./data.js";
const btn = document.getElementById("btn");
const quotePara = document.getElementById("quote");
const authorPara = document.getElementById("author");

btn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * quoteData.length);
  authorPara.classList.add("activate");
  quotePara.innerHTML = quoteData[randomNum].quote;
  authorPara.innerText = `-By ${quoteData[randomNum].author}`;
});
