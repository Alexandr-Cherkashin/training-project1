const navigation = document.querySelector(".navigation");
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__menu");
const body = document.querySelector("body");
const burgerLink = document.querySelectorAll(".burger__link");

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;
    if(scrollPos > 80){
        navigation.classList.add("navigation_fixed");
    }
    else {
        navigation.classList.remove("navigation_fixed");
    }
    
});

document.addEventListener("DOMContentLoaded", function(){
    let scrollPos = window.scrollY;
    if(scrollPos > 80){
        navigation.classList.add("navigation_fixed");
    }
    else {
        navigation.classList.remove("navigation_fixed");
    }
});

burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    body.classList.toggle("lock");
    let scrollPos = window.scrollY;
    if(scrollPos < 80){
        navigation.classList.toggle("navigation_fixed");
    }
    
});

burgerLink.forEach(burgerMenuHide);

function burgerMenuHide (item) {
    item.addEventListener("click", function(){
        burgerMenu.classList.remove("active");
        burger.classList.remove("active");
        body.classList.remove("lock");
    });
};