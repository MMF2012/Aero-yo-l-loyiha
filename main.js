document.getElementById('homeBtn').addEventListener('click', function(event) {
    event.preventDefault();
});

document.getElementById('aboutBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('aboutModal').style.display = "block";
});

document.getElementById('reviewsBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('reviewsModal').style.display = "block";
});

document.getElementById('closeAboutBtn').addEventListener('click', function() {
    document.getElementById('aboutModal').style.display = "none";
});

document.getElementById('closeReviewsBtn').addEventListener('click', function() {
    document.getElementById('reviewsModal').style.display = "none";
});

const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeImageBtn = document.getElementById('closeImageBtn');

document.querySelectorAll('.image-modal-trigger').forEach(image => {
    image.addEventListener('click', function() {
        modalImage.src = this.src;
        imageModal.style.display = "block";
    });
});

closeImageBtn.addEventListener('click', function() {
    imageModal.style.display = "none";
});
