const overlayElement = document.querySelector(".overlay");

const openOverlay = () => {
   overlayElement.classList.add("overlay--is-active");

   overlayElement.onclick = () => {
      closeAllComponents();
   };
};

const closeAllComponents = () => {
   overlayElement.classList.remove("overlay--is-active");

   let openedElements = document.querySelectorAll("[class*=--is-open]");

   openedElements.forEach(element => {
      element.classList.forEach(className => {
         if(className.endsWith("--is-open")) {
            element.classList.remove(className);
         };
      });
   });
};

export {openOverlay, closeAllComponents};