// Handle worker profile button click
const profileButtons = document.querySelectorAll('.worker-profile button');
profileButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Viewing profile for " + button.previousElementSibling.previousElementSibling.textContent);
    });
});

// Handle booking form submission
const bookingForm = document.querySelector('#booking-scheduling form');
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const worker = document.querySelector('#worker').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    alert(`Booking confirmed for ${worker} on ${date} at ${time}.`);
});

// Handle payment form submission
const paymentForm = document.querySelector('#payment-processing form');
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.querySelector('#card-number').value;
    alert(`Payment processing for card ending in ${cardNumber.slice(-4)}...`);
});

// Handle review form submission
const reviewForm = document.querySelector('#rating-review form');
reviewForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const worker = document.querySelector('#worker').value;
    const rating = document.querySelector('#rating').value;
    const review = document.querySelector('#review').value;

    alert(`Thank you for rating ${worker} with ${rating} stars. Your review: "${review}" has been submitted.`);
});

// Handle adding/removing favorites
const favoriteWorkers = document.querySelectorAll('#favorite-workers ul li button');
favoriteWorkers.forEach(button => {
    button.addEventListener('click', () => {
        const workerName = button.parentElement.textContent.split(" - ")[0];
        alert(`Removed ${workerName} from favorites.`);
    });
});

// Real-time availability updates (example using dummy logic)
const availabilityStatus = document.querySelectorAll('.availability-status');
setInterval(() => {
    availabilityStatus.forEach(status => {
        const isAvailable = Math.random() > 0.5;
        const availabilityText = status.querySelector('span');
        availabilityText.textContent = isAvailable ? 'Available' : 'Not Available';
        availabilityText.classList.toggle('available', isAvailable);
        availabilityText.classList.toggle('not-available', !isAvailable);
    });
}, 5000);

// Handle search functionality
const searchForm = document.querySelector('#service-search form');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.querySelector('#search').value;
    alert(`Searching for services related to: ${searchQuery}`);
});
