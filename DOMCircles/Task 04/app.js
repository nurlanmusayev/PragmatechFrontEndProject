function randomCirclePlacement() {
    
    let circle = document.createElement('div')
    circle.className = 'circle'

    document.body.appendChild(circle)

    let randomX = Math.floor(Math.random() *1000);
    let randomY = Math.floor(Math.random() *1000);


    circle.style.height = '50px'
    circle.style.width = '50px'
    circle.style.backgroundColor = 'black'
    circle.style.borderRadius = '50%'
    circle.style.margin = `${randomX}px ${randomY}px`

   



    document.querySelector('body').appendChild(circle);
}


randomCirclePlacement()