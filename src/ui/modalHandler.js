const employeeDataBtn = document.getElementById('employeeDataBtn');
const randomEmployeeBtn = document.getElementById('randomEmployeeBtn');
const employeeDataModal = document.getElementById('employeeDataModal');
const randomEmployeeModal = document.getElementById('randomEmployeeModal');

employeeDataBtn.addEventListener('click', () => {
    employeeDataModal.style.display = 'flex';
});

randomEmployeeBtn.addEventListener('click', () => {
    randomEmployeeModal.style.display = 'flex';
});

window.addEventListener('click', (event) => {
    if (event.target === employeeDataModal) {
        employeeDataModal.style.display = 'none';
    } else if (event.target === randomEmployeeModal) {
        randomEmployeeModal.style.display = 'none';
    }
});
