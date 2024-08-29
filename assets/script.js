const notes = document.querySelector("ol");
const input = document.querySelector("textarea");
let li = document.createElement("li")

notes.innerHTML = localStorage.getItem('value');

input.addEventListener('keyup', persist);

function persist() {
    localStorage.setItem('value', input.value);
    console.log(localStorage.getItem('value'))
    notes.innerHTML = localStorage.getItem('value');
}