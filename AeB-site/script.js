document.getElementById('logoUpload').addEventListener('change', function(event) {
    const logo = document.getElementById('logo');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            logo.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.getElementById('catalogUpload').addEventListener('change', function(event) {
    const gallery = document.getElementById('gallery');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Óculos';
            gallery.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});
