import Employee from '../dto/employee.js';

export function handleEmployeeDataFormSubmit(company, tableCreator) {
    const employeeDataForm = document.getElementById('employeeDataForm');
    employeeDataForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const id = parseInt(e.target.id.value);
        const email = e.target.email.value;
        const gender = e.target.gender.value;
        const name = e.target.name.value;
        const salary = parseFloat(e.target.salary.value);
        const title = e.target.title.value;

        try {
            const employee = new Employee(id, email, gender, name, salary, title);
            company.hire(employee);
            tableCreator.addRow(employee);
            employeeDataForm.reset();
        } catch (error) {
            alert(error.message);
        }

        document.getElementById('employeeDataModal').style.display = 'none';
    });
}

