"use strict";var clickOnLink,hamburgerMenuInput=document.querySelector(".hamburger-menu__input"),hamburger=document.querySelector(".hamburger"),maincontent=document.querySelector(".maincontent"),menuLinks=document.querySelectorAll("[data-scrollId");0<menuLinks.length&&(clickOnLink=function(e){hamburgerMenuInput.click();var r=e.target;r.dataset.scrollid&&document.querySelector(r.dataset.scrollid)&&(r=document.querySelector(r.dataset.scrollid).getBoundingClientRect().top+pageYOffset,window.scrollTo({top:r,behavior:"smooth"}),e.preventDefault())},menuLinks.forEach(function(e){e.addEventListener("click",clickOnLink)}));var headerHamb=document.querySelector(".header");function noScroll(){window.scrollTo(0,0)}hamburgerMenuInput.addEventListener("click",function(e){1==hamburgerMenuInput.checked?(hamburger.classList.add("hamburger--visible"),headerHamb.classList.add("_fixed"),window.addEventListener("scroll",noScroll)):(hamburger.classList.remove("hamburger--visible"),window.removeEventListener("scroll",noScroll),headerHamb.classList.remove("_fixed"))});