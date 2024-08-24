import Employee from '../dto/employee.js';
import { viewerEmployees } from './Viewer.js';

export function handleEmployeeDataFormSubmit(company) {
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
            viewerEmployees(company);
            employeeDataForm.reset();
        } catch (error) {
            alert(error.message);
        }

        document.getElementById('employeeDataModal').style.display = 'none';
    });
}

export function handleRandomEmployeeFormSubmit(company, employeeGenerator) {
    const randomEmployeeForm = document.getElementById('randomEmployeeForm');
    randomEmployeeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const idDigits = e.target.idDigits.value;
        const numEmployees = e.target.numEmployees.value;
        const minSalary = parseFloat(e.target.minSalary.value);
        const maxSalary = parseFloat(e.target.maxSalary.value);
        const minId = Math.pow(10, idDigits - 1);
        const maxId = Math.pow(10, idDigits) - 1;

        for (let i = 0; i < numEmployees; i++) {
            try {
                const employee = employeeGenerator.getRandomEmployee(minId, maxId, minSalary, maxSalary);
                company.hire(employee);
            }catch(error) {
                alert(error.message);
            }
        }

        viewerEmployees(company);
        randomEmployeeForm.reset();
        document.getElementById('randomEmployeeModal').style.display = 'none';
    });
}
