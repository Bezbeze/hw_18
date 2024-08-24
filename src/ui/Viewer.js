export function viewerEmployees(company) {
    const employeeList = document.getElementById('list');
    employeeList.innerHTML = '';

    const employees = company.getAll();
    employees.forEach(employee => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${employee.getId()},
                                Name: ${employee.getName()}, 
                                Title: ${employee.getTitle()}, 
                                Salary: ${employee.getSalary()}, 
                                Gender: ${employee.getGender()},
                                Email: ${employee.getEmail()}`;
        employeeList.appendChild(listItem);
    });
}