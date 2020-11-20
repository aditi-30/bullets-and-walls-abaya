var wall 
var bullet; 
var speed; 
var weight; 
var thickness;

function setup() 
{ 
  createCanvas(1600,400);

speed=random(223,321); 
weight=random(30,52); 
thickness=random(22,83)

wall=createSprite(1200, 200, thickness, height/2); 
wall.shapeColor="grey"

bullet= createSprite(50, 200, 50,5)
bullet.shapeColor="white"
bullet.velocityX = speed;

}

function draw() 
{ 
  background(0);



if(hasCollided(bullet,wall)) {
   bullet.velocityX=0 
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0)
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0)
}

} 
drawSprites()
}


function hasCollided(bullet,wall) 
{

bulletRightEdge=bullet.x +  bullet.width;
wallleftEdge=wall.x;
if( bulletRightEdge>= wallleftEdge)
{
  return true
}
return false
}
