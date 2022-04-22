function createPoolTable(num) {
    
   
  let ballblack = document.createElement('div')
  ballblack.className = 'ball-black'

  let ballwhite = document.createElement('div')
  ballwhite.className = 'ball-white'

    
   
  let ballblue = document.createElement('div')
  ballblue.className = 'ball-blue'
   
    

  let ballred = document.createElement('div')
  ballred.className = 'ball-red'

    

    document.body.appendChild(ballblue)
    document.body.appendChild(ballred)
    document.body.appendChild(ballblack)
    document.body.appendChild(ballwhite)

  }


  createPoolTable()