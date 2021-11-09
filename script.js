const button = document.querySelector('#update-button');
const importantMessage = document.querySelector('#important-message');

function display() {
  button.style.display = 'none';
  importantMessage.style.visibility = `visible`;
}

function changeStatus () {
    setTimeout(display, 200);
}

button.addEventListener('click', e => {
  changeStatus();
});

