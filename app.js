panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');

}

function wordAppear(event) {
  this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', wordAppear));
