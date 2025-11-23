// Get the envelope wrapper element
const envelopeWrapper = document.getElementById('envelopeWrapper');

// Add click event listener
envelopeWrapper.addEventListener('click', function() {
    // Toggle the 'opened' class to trigger the animation
    this.classList.toggle('opened');
});
