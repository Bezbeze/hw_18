
import Company from './company.js';
import EmployeeGenerator from './employeeGenerator.js';
import random from './random.js';

const company = new Company();
const employeeGenerator = new EmployeeGenerator(random);

for (let i = 0; i < 20; i++) {
    const employee = employeeGenerator.getRandomEmployee();
    company.hire(employee);
}

document.addEventListener("DOMContentLoaded", function() {
    const employees = company.getAll();
    const employeesList = document.createElement('ul');

    employees.forEach(employee => {
        const listItem = document.createElement('li');
        listItem.textContent =
            `ID: ${employee.getId()}, 
            Name: ${employee.getName()},
            Title: ${employee.getTitle()},
            Salary: ${employee.getSalary()},
            Gender: ${employee.getGender()},
            Email: ${employee.getEmail()}`;
        employeesList.appendChild(listItem);
    });

    document.getElementById('employees-container').appendChild(employeesList);
});
