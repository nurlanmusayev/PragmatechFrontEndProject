var canvas= document.getElementById('canvas');
var ctx= canvas.getContext('.2d');


canvas.width=700;
canvas.height=700;
canvas.style.border='border 5px solid white';

var rain;


function main()
{
    for(var k=0;k<=300;k++)
    {
        rain[k] = new rainDrop();
    }
    init()
}


function init()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var d=0;d< rain.length;d++)
    {
        rain[d].updateRain();
        rain[d].drawRain();
    }

    requestAnimationFrame(init);
}





function rainDrop(){
    this.x = Math.random() * canvas.width;
    this.y = (Math.random() * 80) -80;
    this.height = (Math.random() *6) +3;
    this.speed = (Math.random() *6) +3


    this.updateRain = function()
    {
        this.y += this.speed;

        if(this.y + this.height >= canvas.height)
        {
            this.y = (Math.random() * 80) -80;
        }
    }


    this.drawRain = function()
    {
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x,this.x + this.height);
        ctx.stroke();
    }

    
}