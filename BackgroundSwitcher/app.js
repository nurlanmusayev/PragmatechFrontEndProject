const body = document.querySelector('.body');
const swtch = document.querySelector('.swtch');
const swtchon = document.querySelector('.swtchclick');


swtchon.addEventListener('click',() =>{
    body.classList.toggle('active');
    swtchon.classList.toggle('active');
    swtch.classList.toggle('active')
})
