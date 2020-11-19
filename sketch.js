var fixed, moving
function setup() {
  createCanvas(800, 400);
  fixed = createSprite(400, 400, 50, 50);
  fixed.shapeColor = "blue"
  moving = createSprite(400, 10, 50, 50);
  moving.shapeColor = "blue"

  fixed.velocityY = -5
  moving.velocityY = 5
}

function draw() {
  background(255, 255, 255);

  if (moving.y - fixed.y < moving.height / 2 + fixed.height / 2 &&
    fixed.y - moving.y < moving.height / 2 + fixed.height / 2) {
    fixed.velocityY = fixed.velocityY * (-1)
    moving.velocityY = moving.velocityY * (-1)

  } else if (moving.x - fixed.x < moving.width / 2 + fixed.width / 2 &&
    fixed.x - moving.x < moving.width / 2 + fixed.width / 2) {

    fixed.velocityX = fixed.velocityX * (-1)
    moving.velocityX = moving.velocityX * (-1)


  }








  // moving.x = mouseX
  // moving.y = mouseY
  // if (moving.x - fixed.x < moving.width / 2 + fixed.width / 2 &&
  //   fixed.x - moving.x < moving.width / 2 + fixed.width / 2 &&
  //   moving.y - fixed.y < moving.height /2 + fixed.height /2 &&
  //   fixed.y - moving.y < moving.height /2 + fixed.height /2){
  //   moving.shapeColor = "purple"
  //   fixed.shapeColor = 'purple'
  //   }else{
  //     moving.shapeColor = "blue"
  //     fixed.shapeColor = 'blue'
  //   }
  drawSprites();
}