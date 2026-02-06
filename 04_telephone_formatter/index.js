const inputBox = document.querySelector("#tele");

inputBox.addEventListener("input", (e) => {
  let inputLength = String(e.target.value).length;
  console.log(String(e.target.value).length);

  let myStr = e.target.value.replace(/\D/g, "");

  if (inputLength < 3) {
    e.target.value = myStr;
  } else if (inputLength < 7) {
    e.target.value = `+(${myStr.substring(0, 3)}) (${myStr.substring(3)})`;
  } else {
    e.target.value = `+(${myStr.substring(0, 3)}) (${myStr.substring(3, 6)})-(${myStr.substring(6, 10)})`;
  }
});
