const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameOutput.addEventListener('input', () => {
if (nameInput.ariaValueMax.trim () !== '') {
    nameOutput.textContent = nameInput.value
} else {
    nameOutput.textContent = 'Anonymus';
}
})