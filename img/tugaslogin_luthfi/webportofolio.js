let header = document.getElementById("header");
let title = document.querySelector(".title");
let menu = document.querySelectorAll(".menu ul li a");



function ubahWarnaHeader(){
    if (window.scrollY > 0){
         header.style.backgroundColor = "black";
          header.style.borderBottom = "none";
          title.style.color = "white";
          menu.forEach(function(item){
            item.style.color = "white";
          });
}else{
       header.style.backgroundColor = "transparent";
        header.style.borderBottom = "2px solid ";
          title.style.color = "black";
          menu.forEach(function(item){
            item.style.color = "black";
          });
}
    }
window.addEventListener("scroll", ubahWarnaHeader);


let floatButton = document.getElementById("floating-button");

function showOrHideFloatingButton(){
    if(window.scrollY > 2400){
        floatButton.style.display = "flex";

    }else{
        floatButton.style.display = "none";
    }
}
window.addEventListener("scroll",showOrHideFloatingButton);

function scrollOnTop(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}

floatButton.onclick = scrollOnTop;


let aboutLink = document.querySelector('.menu ul li a[href="#About"]');
let heroLink = document.querySelector('.menu ul li a[href="#hero"]');


let aboutSection = document.getElementById("about");
let heroSection = document.getElementById("hero");

function scrollToAbout(event){
    event.preventDefault();
    aboutSection.scrollIntoView({
        behavior: "smooth"});
}
function scrollToHero(event){
    event.preventDefault();
    heroSection.scrollIntoView({
        behavior: "smooth"});
}


aboutLink.onclick = scrollToAbout;
heroLink.onclick = scrollToHero;




let studyLink = document.querySelector('.menu ul li a[href="#Study"]');
let businessLink = document.querySelector('.menu ul li a[href="#Business"]');


let studySection = document.getElementById("Study");
let businessSection = document.getElementById("Business");

function scrollToStudy(event){
    event.preventDefault();
   studySection.scrollIntoView({
        behavior: "smooth"});
}
function scrollToBusiness(event){
    event.preventDefault();
    businessSection.scrollIntoView({
        behavior: "smooth"});
}


 studyLink.onclick = document.scrollToStudy;
 businessLink.onclick = document.scrollToBusiness;





 let menuBars = document.getElementById("menu-bars");
 let sidebarResponsive = document.getElementById("sidebar-responsive");
 let closeSidebarButton = document.getElementById("close-sidebar");

 function sideBars(){
sidebarResponsive.style.display = "flex";
menuBars.style.display = "none";
 }function closeSidebar(){
    sidebarResponsive.style.display = "none";
    menuBars.style.display = "block";
 }
 menuBars.addEventListener("click",sideBars);
 closeSidebarButton.addEventListener("click",closeSidebar);

let resolusiScreen = window.matchMedia("(max-width: 769px)");

function responsiveScreen(screen){
    if (screen.matches){
        menuBars.style.display = ("block");
        menuBars.addEventListener("click",function(){
            sidebarResponsive.style.display = "block";
            menuBars.style.display = "none";

        });
        closeSidebarButton.addEventListener("click",function(){
            sidebarResponsive.style.display = "none";
            menuBars.style.display = "block";
        })
    }else{
        sidebarResponsive.style.display = "none";
        menuBars.style.display = "none";
    }
}

 responsiveScreen(resolusiScreen);
 resolusiScreen.addEventListener("change",responsiveScreen);



