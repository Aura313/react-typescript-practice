document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const orderButton = document.getElementById('orderButton');
    const output = document.getElementById('output');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnail.classList.toggle('selected');
        });
    });

    orderButton.addEventListener('click', function() {
        const selectedThumbnails = document.querySelectorAll('.thumbnail.selected');
        let orderedPhotos = [];
        selectedThumbnails.forEach(thumbnail => {
            orderedPhotos.push(thumbnail.getAttribute('data-id'));
        });
        output.textContent = orderedPhotos.join(', ');
    });
});
