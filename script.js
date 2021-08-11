const getValue = document.querySelector("#header-profile");
getValue.addEventListener("click", menuShow);

function menuShow() {
  let divDOM = document.getElementById("drop-menu-field");

  divDOM.style.display === "block"
    ? (divDOM.style.display = "none")
    : (divDOM.style.display = "block");
}
