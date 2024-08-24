import Employee from '../dto/employee.js';

class EmployeeGenerator {
    constructor(random) {
        this.random = random;
    }

    getRandomEmployee(minId=1, maxId=10000, minSalary=1000, maxSalary=100000) {
        const id = this.random(minId, maxId);
        const emailAddress = `email${id}@gmail.com`;
        const gender = this.random(0, 1) ? 'female' : 'male';
        const name = `Employee_${id}`;
        const salary = this.random(minSalary, maxSalary);
        const titles = ['Wage Employee', 'Manager', 'Sales Person', 'Sales Manager'];
        const title = titles[this.random(0, titles.length - 1)];

        return new Employee(id, emailAddress, gender, name, salary, title);
    }
}

export default EmployeeGenerator;
