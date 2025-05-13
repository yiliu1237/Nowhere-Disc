const input = document.getElementById('coverInput');
const preview = document.getElementById('coverPreview');

input.addEventListener('change', () => {
    const file = input.files[0];
    if(file){
        preview.src = URL.createObjectURL(file);
        preview.style.display = 'block';

        document.getElementById('uploadLabel').style.display = 'none';
    }
});



