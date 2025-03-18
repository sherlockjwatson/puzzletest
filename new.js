let currentRotation = 0;
let targetRotation = 225;
let targetNegativeRotation = -135;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    handleKeyRight();
  }

  if (e.key === "ArrowLeft") {
    handleKeyLeft();
  }
});

function handleKeyRight() {
    if (currentRotation < 0) {
    currentRotation = 360 + (currentRotation % 360);
  }
  
  currentRotation += 45;
  
  if (currentRotation >= 360) {
    currentRotation = currentRotation % 360;
  }
  
  if (currentRotation == targetRotation) {
    console.log("correct");
  } else {
    console.log("nope");
  }
  
document.getElementById ("Spaceship").style.transform = `rotate(${currentRotation}deg)`;
}

function handleKeyLeft() {
  if (currentRotation > 0) {
    currentRotation = currentRotation % 360 - 360;
  }
  
  currentRotation -= 45;
  
  if (currentRotation <= -360) {
    currentRotation = currentRotation % 360;
  }
  
  if (currentRotation == targetNegativeRotation) {
    console.log("correct");
} 
  else {
  console.log("nope");
}
  document.getElementById("Spaceship").style.transform = `rotate(${currentRotation}deg)`;
}

