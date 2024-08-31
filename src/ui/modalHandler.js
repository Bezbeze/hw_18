
const listEmployee = document.getElementById('list-employee');

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-layer')) {
        event.target.style.display = 'none';
    }
});
