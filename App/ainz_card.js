//Movement Animation to Happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const ainz = document.querySelector(".img-section img");
const square = document.querySelector(".square");
const border_level = document.querySelector(".border-levels");



//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Mouse Enter
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    ainz.style.transform = "translateZ(40px) rotateZ(5deg)"
    square.style.transform = "translateZ(30px)"
    border_level.style.transform = "translateZ(35px)"
});

//Mouse out the Container
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    //Popback
    ainz.style.transform = "translateZ(0px)"
    square.style.transform = "translateZ(0px)"
    border_level.style.transform = "translateZ(0px)"


});