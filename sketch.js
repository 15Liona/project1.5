var sprite;

function setup() {
  createCanvas(700,700);
  sprite = createSprite(400, 400, 100, 100);
  sprite.shapeColor = "magenta";
}

function draw() 
{
  background("cyan");

 if (keyDown(UP_ARROW)){
  sprite.y -= 5;
 }
 if (keyDown(DOWN_ARROW)){
  sprite.y += 5;
 }
 if (keyDown(LEFT_ARROW)){
  sprite.x -= 5;
 }
 if (keyDown(RIGHT_ARROW)){
  sprite.x += 5;
 }


drawSprites();
}




