var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');


c.fillStyle = "#333333";
c.fillRect(0,0,innerWidth,innerHeight);
c.lineWidth = 2;

var mouseX = 0;
var mouseY = 0;
var mousePressed = false;
var color = 0;
c.strokeStyle = `hsl(${color},100%,50%)`;

window.addEventListener("mousedown",e=>
{
  mouseX = e.clientX;
  mouseY = e.clientY;
  mousePressed = true;
});

window.addEventListener("mouseup",e=>
{
  mouseX = e.clientX;
  mouseY = e.clientY;
  mousePressed = false;
});

window.addEventListener("mousemove",e=>
{
  if(mousePressed)
  {
    let mirror = true;
    let angle1 = Math.atan2(mouseY-innerHeight/2,mouseX-innerWidth/2)/Math.PI*180;
    let length1 = Math.sqrt((mouseX-innerWidth/2)*(mouseX-innerWidth/2)+(mouseY-innerHeight/2)*(mouseY-innerHeight/2));
    let angle2 = Math.atan2(e.clientY-innerHeight/2,e.clientX-innerWidth/2)/Math.PI*180;
    let length2 = Math.sqrt((e.clientX-innerWidth/2)*(e.clientX-innerWidth/2)+(e.clientY-innerHeight/2)*(e.clientY-innerHeight/2));
    // if(angle1<0)angle1+=360;
    // if(angle2<0)angle2+=360;

    for(let i=0;i<12;i++)
    {
      let x1 = Math.cos((angle1+i*30)*Math.PI/180)*length1 + innerWidth/2;
      let y1 = Math.sin((angle1+i*30)*Math.PI/180)*length1 + innerHeight/2;
      let x2 = Math.cos((angle2+i*30)*Math.PI/180)*length2 + innerWidth/2;
      let y2 = Math.sin((angle2+i*30)*Math.PI/180)*length2 + innerHeight/2;
      c.beginPath();
      c.moveTo(x1,y1);
      c.lineTo(x2,y2);
      c.stroke();
      angle1 *= -1;
      angle2 *= -1;
    }
    color++;
    c.strokeStyle = `hsl(${color},100%,50%)`;
    
  }
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate()
{
  
  window.requestAnimationFrame(animate);
}
animate();
