// Countdown for 5 seconds
let countdown = 5;
const countdownDisplay = document.getElementById('countdown');
const checkpointSection = document.getElementById('checkpointSection');

// Start countdown and show button after 5 seconds
const countdownInterval = setInterval(() => {
    countdownDisplay.textContent = countdown;
    countdown--;
    
    if (countdown < 0) {
        clearInterval(countdownInterval);
        countdownDisplay.style.display = 'none';  // Hide countdown
        checkpointSection.style.display = 'block';  // Show the checkpoint button
    }
}, 1000);

// Redirect to LootLabs page when button is clicked
document.getElementById('checkpointButton').addEventListener('click', () => {
    window.location.href = 'lootlabs.html'; // Redirect to LootLabs page
});
