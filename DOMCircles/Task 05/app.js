function createPoolTable(num) {
    
  let rndtopbl = Math.floor(Math.random() *100)
  let rndleftbl = Math.floor(Math.random() *95)
  let ballblack = document.createElement('div')
  ballblack.className = 'ball-black'
  ballblack.style.top = `${rndtopbl}%`
  ballblack.style.left = `${rndleftbl}%`

  

  let rndtopw = Math.floor(Math.random() *100)
  let rndleftw = Math.floor(Math.random() *95)
  let ballwhite = document.createElement('div')
  ballwhite.className = 'ball-white'
  ballwhite.style.top = `${rndtopw}%`
  ballwhite.style.left = `${rndleftw}%`

  

    
  for(let i=0;i<num;i++){
    let rndtopb = Math.floor(Math.random() *100)
    let rndleftb = Math.floor(Math.random() *95)
    let ballblue = document.createElement('div')
    ballblue.className = 'ball-blue'
    ballblue.style.top = `${rndtopb}%`
    ballblue.style.left = `${rndleftb}%`
    document.body.appendChild(ballblue)
  }
  
   
    
  for(let i=0;i<num;i++){
    let rndtop = Math.floor(Math.random() *100)
    let rndleft = Math.floor(Math.random() *95)
    let ballred = document.createElement('div')
    ballred.className = 'ball-red'
    ballred.style.top = `${rndtop}%`
    ballred.style.left = `${rndleft}%`
    document.body.appendChild(ballred)
  }
  

    
    
   
    
    document.body.appendChild(ballblack)
    document.body.appendChild(ballwhite)

  }


  createPoolTable(7)