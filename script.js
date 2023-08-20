const keyCode = document.getElementById('keyCode');
const keyValue = document.getElementById('keyValue');
const charCode = document.getElementById('charCode');

document.addEventListener('keydown',(event) => {
    keyCode.textContent = event.keyCode;
    keyValue.textContent = event.key;
    charCode.textContent = event.charCode;
})

document.addEventListener('keydown', 'keyCode');
document.addEventListener('keydown', 'keyValue');
document.addEventListener('keydown', 'charCode');

