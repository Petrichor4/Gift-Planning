const notes = document.querySelector("ol");

ol.addEventListener('keyup', persist);

function persist() {
    localStorage.setItem('value', notes.value);
    console.log( localStorage.getItem('value'));
}