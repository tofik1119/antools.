import{openOverlay, closeAllComponents} from "./overlay";

const authorizationButtonElements = document.querySelectorAll("[data-target]");

authorizationButtonElements.forEach(buttonElement => {
   buttonElement.onclick = () => {
      const targetSelector = buttonElement.dataset.target;
      const targetElement = document.querySelector(targetSelector);

      targetElement.classList.add("authorization--is-open");
      openOverlay();
   }
});

      const x = document.querySelector(".header__authorization-menu-button").dataset.target;
      console.log(x);

// import{openOverlay, closeAllComponents} from "./overlay";

// const loginButtonElement = document.querySelector(".authorization__login-button");
// const loginElement = document.querySelector(".authorization--login");

// loginButtonElement.onclick = () => {
//    loginElement.classList.add("authorization--is-open");

//    openOverlay()
//    console.log(loginButtonElement);
// };

// const registerButtonElement = document.querySelector(".authorization__register-button");
// const registerElement = document.querySelector(".authorization--register");

// registerButtonElement.onclick = () => {
//    registerElement.classList.add("authorization--is-open");

//    openOverlay()
//    console.log(registerButtonElement);