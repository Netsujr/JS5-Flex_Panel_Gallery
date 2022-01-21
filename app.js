panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');

}

function wordAppear(event) {
  // console.log(event.propertyName);
  if(event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', wordAppear));
//transition end is an event listener thats related to css
