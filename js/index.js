let menuBtn = document.querySelector('.feedback_dropDown_btn');
let menu = document.querySelector('.feedback_dropDown');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle("feedback_dropDown_active");
});

menu.addEventListener('click', () => {
    menu.classList.toggle("feedback_dropDown_active");
});