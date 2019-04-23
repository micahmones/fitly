//fade for logo and button
function timeOut() {
  setTimeout(function () {
    document.getElementsByClassName('landing-logo')[0].classList.remove('fade');
  }, 150); // delay for fitly logo
  setTimeout(function () {
    document.getElementsByClassName('blue-btn')[0].classList.remove('fade')
  }, 2000); // delay for get started button
}

document.addEventListener("DOMContentLoaded", timeOut())