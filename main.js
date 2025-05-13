document.getElementById('search-btn').addEventListener('click', () => {
    const type = document.getElementById("gameType").value;

    if (type !== "") {
        //window.location.href = `ring/index_${type}.html`;
        window.location.href = `ring/index_ring.html`;
    } else {
        alert("Please select a game type.");
    }
});

