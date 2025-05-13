document.addEventListener('DOMContentLoaded', () => {
  // Navigation functionality from index.json
  console.log("Here!");
  fetch('../ring/index.json')
    .then(res => res.json())
    .then(caseList => {

      console.log("Wait!");
      const currentFile = window.location.pathname.split("/").pop();
      const currentIndex = caseList.indexOf(currentFile);

      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const randomBtn = document.getElementById('randomBtn');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          const prevIndex = (currentIndex - 1 + caseList.length) % caseList.length;
          window.location.href = `../gamecase_examples/${caseList[prevIndex]}`;
        });
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          const nextIndex = (currentIndex + 1) % caseList.length;
          window.location.href = `../gamecase_examples/${caseList[nextIndex]}`;
        });
      }

      if (randomBtn) {
        randomBtn.addEventListener('click', () => {
          let randIndex;
          do {
            randIndex = Math.floor(Math.random() * caseList.length);
          } while (randIndex === currentIndex);

          window.location.href = `../gamecase_examples/${caseList[randIndex]}`;
        });
      }
    });
});
