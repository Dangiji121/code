let downloadButtons = document.querySelectorAll('.download-btn');
let adClickedFlag = false;
let currentDownloadLink = '';

downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        currentDownloadLink = this.getAttribute('data-download');

        document.getElementById('popup').style.display = 'flex';
    });
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

function adClicked() {
    adClickedFlag = true;

    document.getElementById('popup').style.display = 'none';
    showProgressBar();
}

function showProgressBar() {
    let progressContainer = document.getElementById('progressContainer');
    let progressBar = document.getElementById('progressBar');
    let progressText = document.getElementById('progressText');
    
    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    
    let progress = 0;
    let downloadSimulation = setInterval(function() {
        progress += 10; // Simulate download progress increment
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(downloadSimulation);
            startDownload();
        }
    }, 300); // Simulating progress every 300ms
}

function startDownload() {
    if (adClickedFlag && currentDownloadLink !== '') {
        document.getElementById('downloadLink').setAttribute('href', currentDownloadLink);
        document.getElementById('downloadLink').click();
        
        adClickedFlag = false;
    } else {
        alert('Please click on an ad to start the download.');
    }
}
