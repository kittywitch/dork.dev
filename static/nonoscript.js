function nonoscriptImplementer() {
  var nonoscript = document.getElementsByClassName("nonoscript");
  console.log(nonoscript);
  for (let item of nonoscript) {
    console.log("meep!");
    item.classList.remove("nonoscript");
  }
}
window.onload = nonoscriptImplementer();
