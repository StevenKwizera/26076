// CV Download Handler - Opens CV in new tab for viewing/printing
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.btn-download');
    
    downloadButtons.forEach(button => {
        // Remove the default download behavior if it's a CV download button
        if (button.href && button.href.includes('cv.html')) {
            button.addEventListener('click', function(e) {
                // Let the default behavior happen (opens in new tab)
                // Users can then use browser's print to save as PDF
                // No need to prevent default
            });
        }
    });
});
