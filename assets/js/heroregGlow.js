document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.querySelector(".register__btn");
    const heroRegister = document.querySelector(".hero__register");

    if (registerBtn && heroRegister) {
        registerBtn.addEventListener("click", function () {
            if (window.innerWidth >= 768) {
                 // First remove any existing animation class
                 heroRegister.classList.remove('glow');

                 // Force reflow (browser hack to re-trigger animation)
                 void heroRegister.offsetWidth;
 
                 // Then add the animation class again
                 heroRegister.classList.add('glow');
             }
         });
     }
 });