import "./styles/style.css";

const openDropDown = (function () {
  const dropDown = document.querySelector(".drop-down");
  const body = document.querySelector("body");

  const clickHandler = (event) => {
    if (event.target.closest(".menu-btn")) {
      dropDown.classList.toggle("active");
    } else if (
      !event.target.closest(".menu-btn") &&
      !event.target.closest(".drop-down")
    ) {
      dropDown.classList.remove("active");
    }
  };

  body.addEventListener("click", clickHandler);
})();
