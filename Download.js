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

    startDownload();
}

function startDownload() {
    if (adClickedFlag && currentDownloadLink !== '') {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('downloadLink').setAttribute('href', currentDownloadLink);
        document.getElementById('downloadLink').click();
        adClickedFlag = false;
    } else {
        alert('Please click on an ad to start the download.');
    }
}
