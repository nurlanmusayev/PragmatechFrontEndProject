function createCircle(radius,backgroundColor) {
    let circle = document.createElement('div')
    circle.className = 'circle'

    
    
    circle.style.height = `${radius}px`
    circle.style.width =  `${radius}px`
    circle.style.backgroundColor = `${backgroundColor}`

    document.body.appendChild(circle)
  }




  createCircle(44,'green')