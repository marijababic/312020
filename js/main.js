var navId = 'main-nav';
var navButton = document.querySelector('nav#' + navId + ' button');
var navBody = document.querySelector('nav#' + navId + ' ul');
navButton.onclick = function () {
    if (navBody.style.display === 'flex') {
        navBody.style.display = 'none';
    } else {
        navBody.style.display = 'flex';
    }
}