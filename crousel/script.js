const buttons=document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button,()=>{
    button.addEventListener('click',()=>{
        const offset= button.dataset.carouselButton==="prev"?  1:-1;
        const slides=button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide=slides.querySelectorAll("[data-active]");
        const newIndex=[...slides.children].indexOf()
    })
})