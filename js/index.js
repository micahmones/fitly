//fade for logo and button
function timeOut() {
  setTimeout(function () {
    document.getElementsByClassName('landing-logo')[0].classList.remove('fade');
  }, 150); // delay for fitly logo
  setTimeout(function () {
    document.getElementsByClassName('blue-btn')[0].classList.remove('fade')
  }, 1600); // delay for get started button
  setTimeout(function () {
    document.getElementsByClassName('landing-info-text')[0].classList.remove('fade')
  }, 1200); // delay for get started button
  setTimeout(function () {
    document.getElementsByClassName('landing-info')[0].classList.remove('fade')
  }, 1000); // delay for get started button
}

document.addEventListener("DOMContentLoaded", timeOut())