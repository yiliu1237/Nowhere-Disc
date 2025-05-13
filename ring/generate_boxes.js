
const gameCases = [
  {
    id: "dreamgirl-horror",
    title: "Dreamgirl Horror",
    cover: "https://placehold.co/260x400/880000/ffffff?text=Horror",
    url: "../gamecase_examples/dreamgirl_horror.html"
  },
  {
    id: "egg-factory",
    title: "Egg Factory",
    cover: "https://placehold.co/260x400/444400/ffffff?text=Idle",
    url: "../gamecase_examples/egg_factory.html"
  },
  {
    id: "pixel-maze",
    title: "Pixel Maze",
    cover: "https://placehold.co/260x400/004488/ffffff?text=Puzzle",
    url: "../gamecase_examples/pixel_maze.html"
  },
  {
    id: "broken-time",
    title: "Broken Time",
    cover: "https://placehold.co/260x400/222266/ffffff?text=Time",
    url: "../gamecase_examples/broken_time.html"
  },
  {
    id: "echo-garden",
    title: "Echo Garden",
    cover: "https://placehold.co/260x400/336633/ffffff?text=Zen",
    url: "../gamecase_examples/echo_garden.html"
  },
  {
    id: "monster-milk-tea",
    title: "Monster Milk Tea",
    cover: "https://placehold.co/260x400/552255/ffffff?text=Delivery",
    url: "../gamecase_examples/monster_milk_tea.html"
  }
];

let selectedBox = null;
let zoomedIn = false;

document.addEventListener("DOMContentLoaded", () => {
    const ring = document.getElementById('ring');
    const numBoxes = gameCases.length;
    const radius = 500;
  
    
    gameCases.forEach((game, i) => {
      const angle = (i / numBoxes) * 360;
  
      const box = document.createElement('div');
      box.className = 'box';
      box.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

  
      const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
  
      faces.forEach((face) => {
        const fig = document.createElement('figure');
        fig.className = face;
  
        if (['front', 'back', 'left', 'right'].includes(face)) {
          const img = document.createElement('img');
          img.src = `https://dl.dropboxusercontent.com/u/68034081/codepen-assets/3d-box/${face}.png`;
          img.alt = `${face} face`;
          fig.appendChild(img);
        }
  
        box.appendChild(fig);

      });

      // Double-click goes to the game page
      box.addEventListener('dblclick', () => {
        window.location.href = game.url;
      });
  
      ring.appendChild(box);

    });

});



document.addEventListener("DOMContentLoaded", () => {
  const ring = document.getElementById('ring');
  const numBoxes = gameCases.length;
  const radius = 500;

  gameCases.forEach((game, i) => {
    const angle = (i / numBoxes) * 360;

    const box = document.createElement('div');
    box.className = 'box';
    box.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;

    const face = document.createElement('figure');
    face.className = 'front';

    const img = document.createElement('img');
    img.src = game.cover;
    img.alt = game.title;

    face.appendChild(img);
    box.appendChild(face);

    // Double-click goes to the game page
    box.addEventListener('dblclick', () => {
      window.location.href = game.url;
    });

    ring.appendChild(box);
  });
});
