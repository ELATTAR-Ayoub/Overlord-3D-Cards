// Albedo Card ---------------------

//Movement Animation to Happen
const albedo_card = document.querySelector(".albedo-card");
const albedo_container = document.querySelector(".albedo-container");

//Items
const albedo = document.querySelector(".albedo img");
const albedo_square = document.querySelector(".albedo-square");
const stats = document.querySelector(".stats");
const border_level = document.querySelector(".albedo-border-level");
const status_table = document.querySelector(".statusTable");
const status_name = document.querySelector(".status-name");
const status_title = document.querySelector(".status-title");



//Moving Animation Event
albedo_container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    albedo_card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Mouse Enter
albedo_container.addEventListener("mouseenter", (e) => {
    albedo_card.style.transition = "none";
    //Popout
    albedo.style.transform = "translateZ(90px) rotateZ(7deg)"
    albedo_square.style.transform = "translateZ(30px)"
    border_level.style.transform = "translateZ(35px)"
    status_table.style.transform = "translateZ(35px)"
    status_name.style.transform = "translateZ(20px)"
    status_title.style.transform = "translateZ(20px)"
});

//Mouse out the Container
albedo_container.addEventListener("mouseleave", (e) => {
    albedo_card.style.transition = "all 0.5s ease";
    albedo_card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    //Popback
    albedo.style.transform = "translateZ(0px)"
    albedo_square.style.transform = "translateZ(0px)"
    border_level.style.transform = "translateZ(0px)"
    status_table.style.transform = "translateZ(0px)"
    status_name.style.transform = "translateZ(0px)"
    status_title.style.transform = "translateZ(0px)"


});