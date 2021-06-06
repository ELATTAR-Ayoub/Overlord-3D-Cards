//Movement Animation to Happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const ainz = document.querySelector(".ainz img");
const square = document.querySelector(".ainz-square");
const stats = document.querySelector(".stats");
const border_level = document.querySelector(".border-level");
const status_table = document.querySelector(".statusTable");
const status_name = document.querySelector(".status-name");
const status_title = document.querySelector(".status-title");



//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Mouse Enter
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    ainz.style.transform = "translateZ(90px) rotateZ(7deg)"
    square.style.transform = "translateZ(30px)"
    border_level.style.transform = "translateZ(35px)"
    status_table.style.transform = "translateZ(35px)"
    status_name.style.transform = "translateZ(20px)"
    status_title.style.transform = "translateZ(20px)"
});

//Mouse out the Container
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    //Popback
    ainz.style.transform = "translateZ(0px)"
    square.style.transform = "translateZ(0px)"
    border_level.style.transform = "translateZ(0px)"
    status_table.style.transform = "translateZ(0px)"
    status_name.style.transform = "translateZ(0px)"
    status_title.style.transform = "translateZ(0px)"


});

