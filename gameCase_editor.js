document.querySelectorAll('.editable-box').forEach(box => {
    const editable = box.querySelector('[contenteditable]');

    const updatePlaceholder = () => {
        const text = editable.innerText.trim();

        if(text === ""){
            box.classList.add('empty');
        }
        else{
            box.classList.remove('empty'); 
        }
    };

    updatePlaceholder();

    editable.addEventListener('input', updatePlaceholder);
    editable.addEventListener('blur', updatePlaceholder); // DOM event that fires when an element loses focus
});



document.getElementById('saveBtn').addEventListener('click', () => {

    const description = document.getElementById('description').innerText.trim();
    const gameTitle = document.getElementById('gameTitle').innerText.trim();

    const gameType = document.getElementById('gameType').value.trim();
    const abandoned = document.getElementById('whyAbandonSelect').value.trim();



    if (gameTitle === "" || gameTitle === "[Game Title]") {
        alert("Please fill in Game Title before saving.");
        return; 
    }
    else if (description === ""){
        alert("Please fill in Description section before saving.");
        return; 
    }
    else if(gameType === ""){
        alert("Please select a Game Type.");
        return;
    }
    else if(abandoned === ""){
        alert("Please select a reason for Why Abandoned.");
        return;
    }

    document.getElementById('modal').style.display = 'flex';


    const data = {
        title: document.getElementById('gameTitle').innerText,
        cover: document.getElementById('coverPreview').src,
        type: document.getElementById('gameType').value,
        reason: document.getElementById('whyAbandonSelect').value,
        description: document.getElementById('description').innerText,
        whyAbandon: document.getElementById('whyAbandon').innerText,
        future: document.getElementById('futureConsideration').innerText,
        contact: document.getElementById('contactInfo').innerText
      };
    
      const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>${data.title}</title>
      <link rel="stylesheet" href="../styles.css"/>
    </head>
    <body>
      <div class="gamecase">
        <h1>${data.title}</h1>
        <div class="cover-upload">
          <img src="${data.cover}" alt="Game Cover" class="cover" />
        </div>
    
        <p><strong>Game Type:</strong> ${data.type}</p>
        <p><strong>Why Abandoned:</strong> ${data.reason}</p>
    
        <section>
          <h2>Description</h2>
          <p>${data.description}</p>
        </section>
    
        <section>
          <h2>Abandonment Details</h2>
          <p>${data.whyAbandon}</p>
        </section>
    
        <section>
          <h2>Future Considerations</h2>
          <p>${data.future}</p>
        </section>
    
        <section>
          <h2>Contact</h2>
          <p>${data.contact}</p>
        </section>
    
        <footer>
          <div class="webring">
            <a href="prev_gamecase.html">⬅ Previous</a> |
            <a href="random_gamecase.html">🔄 Random</a> |
            <a href="next_gamecase.html">➡ Next</a> |
            <a href="index.html">🏠 Back to Ring</a>
          </div>
        </footer>
      </div>
    </body>
    </html>
      `;
    
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${data.title.replace(/\s+/g, '_').toLowerCase()}.html`;  // e.g., "egg_factory.html"
      a.click();
});



document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
  
document.getElementById('viewRingBtn').addEventListener('click', () => {
    window.location.href = "ring/index_ring.html"; 
});


document.getElementById('returnBtn').addEventListener('click', () => {
    window.location.href = "index.html"; 
});




const params = new URLSearchParams(window.location.search);
if (params.get("readonly") === "true") {
  document.querySelectorAll('[contenteditable]').forEach(el => {
    el.removeAttribute('contenteditable');
  });

  document.getElementById('uploadLabel')?.remove();
  document.getElementById('saveBtn')?.remove();
}