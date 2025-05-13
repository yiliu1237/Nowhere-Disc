let isDragging = false;
let startX = 0;
let startY = 0;
let rotationX = 0; // up/down
let rotationY = 0; // left/right

let posX = 0;
let posY = 0;
let posZ = -800; // Start zoomed out a bit
let keysPressed = {}
const step = 4;
const zoomStep = 6;

function updateCameraTransform() {
  camera.style.transform = `
    translateZ(${posZ}px)
    translateX(${posX}px)
    translateY(${posY}px)
    rotateX(${rotationX}deg)
    rotateY(${rotationY}deg)
  `;
}

function updateMovement() {
  if (keysPressed['w']) posY += step;
  if (keysPressed['s']) posY -= step;
  if (keysPressed['a']) posX += step;
  if (keysPressed['d']) posX -= step;
  if (keysPressed['z']) posZ += zoomStep;
  if (keysPressed['x']) posZ -= zoomStep;

  // console.log("posX: ", posX);
  // console.log("posY: ", posY);
  // console.log("posZ: ", posZ);

  updateCameraTransform();
  requestAnimationFrame(updateMovement);
}



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('returnBtn');
  btn.addEventListener('click', () => {
    window.location.href = "../index.html";
  });

  const camera = document.getElementById('camera');
  const ring = document.getElementById('ring');

  document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    ring.style.animation = 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    //e.clientX and e.clientY are the mouse's current screen coordinates
    //startX and startY store the previous position (from the last mousemove event).
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;

    rotationY += deltaX * 0.5;         // horizontal rotation
    rotationX -= deltaY * 0.5;         // vertical rotation (subtract to invert mouse direction)

    // Clamp vertical rotation to prevent flipping
    rotationX = Math.max(-90, Math.min(90, rotationX));

    updateCameraTransform();
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.getElementById('ring').style.animation = 'spin 20s linear infinite';

  });

  document.addEventListener('mouseleave', () => {
    isDragging = false;
    document.getElementById('ring').style.animation = 'spin 20s linear infinite';
  });

  document.addEventListener('keydown', (e) => {
    console.log("KeyPressed: ", )
    keysPressed[e.key.toLowerCase()] = true;
  });
  
  document.addEventListener('keyup', (e) => {
    keysPressed[e.key.toLowerCase()] = false;
  });


  updateMovement();
  

});


