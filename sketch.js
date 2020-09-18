var car,wall
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  
 
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)

  bullet=createSprite(50,200,50,5);

  wall=createSprite(700,200,thickness,height/2)
  wall.shapeColor=(180)


  bullet.velocityX=speed;
  bullet.shapeColor=color(255);


  

}

function draw() {
  background(0);  
 
  if(hasCollided(bullet,wall)){
        bullet.velocityX=0;
        var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

          if(damage>10)
              {

                wall.shapeColor=color("green");
              }
          
          if(damage<10){

              wall.shapeColor=color("red");


          }






  }
 
  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{

    return true;

}
return false;
}














