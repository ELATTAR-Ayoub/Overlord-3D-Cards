// Shalltear_Bloodfallen Card ---------------------

//Movement Animation to Happen
const Shalltear_Bloodfallen_card = document.querySelector(".card");
const Shalltear_Bloodfallen_container = document.querySelector(".container");

//Items
const Shalltear_Bloodfallen = document.querySelector(".Shalltear_Bloodfallen img");
const Shalltear_Bloodfallen_square = document.querySelector(".Shalltear_Bloodfallen-square");
const stats = document.querySelector(".stats");
const border_level = document.querySelector(".Shalltear_Bloodfallen-border-level");
const status_table = document.querySelector(".statusTable");
const status_name = document.querySelector(".status-name");
const status_title = document.querySelector(".status-title");



//Moving Animation Event
Shalltear_Bloodfallen_container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    Shalltear_Bloodfallen_card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Mouse Enter
Shalltear_Bloodfallen_container.addEventListener("mouseenter", (e) => {
    Shalltear_Bloodfallen_card.style.transition = "none";
    //Popout
    Shalltear_Bloodfallen.style.transform = "translateZ(90px) rotateZ(7deg)"
    Shalltear_Bloodfallen_square.style.transform = "translateZ(30px)"
    border_level.style.transform = "translateZ(35px)"
    status_table.style.transform = "translateZ(35px)"
    status_name.style.transform = "translateZ(20px)"
    status_title.style.transform = "translateZ(20px)"
});

//Mouse out the Container
Shalltear_Bloodfallen_container.addEventListener("mouseleave", (e) => {
    Shalltear_Bloodfallen_card.style.transition = "all 0.5s ease";
    Shalltear_Bloodfallen_card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    //Popback
    Shalltear_Bloodfallen.style.transform = "translateZ(0px)"
    Shalltear_Bloodfallen_square.style.transform = "translateZ(0px)"
    border_level.style.transform = "translateZ(0px)"
    status_table.style.transform = "translateZ(0px)"
    status_name.style.transform = "translateZ(0px)"
    status_title.style.transform = "translateZ(0px)"


});