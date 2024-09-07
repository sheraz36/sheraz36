// JavaScript to handle button click and show status
document.addEventListener('DOMContentLoaded', (event) => {
    const openTikTokButton = document.getElementById('openTikTokButton');
    const statusDiv = document.getElementById('status');
    const loadingDiv = document.getElementById('loading');

    openTikTokButton.addEventListener('click', function() {
        // Show the status message
        statusDiv.classList.remove('hidden');
        // Show the loading animation
        loadingDiv.classList.remove('hidden');
        
        // Simulate a delay for data transfer (e.g., 3 seconds)
        setTimeout(() => {
            loadingDiv.classList.add('hidden'); // Hide the loading animation after delay
            // Redirect to TikTok
            window.location.href = 'https://www.tiktok.com';
        }, 3000);
    });
});
