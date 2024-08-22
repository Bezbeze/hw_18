import Employee from './employee.js';

class EmployeeGenerator {
    constructor(random) {
        this.random = random;
    }

    getRandomEmployee() {
        const id = this.random(1, 10000);
        const emailAddress = `email${id}@gmail.com`;
        const gender = this.random(0, 1) ? 'female' : 'male';
        const name = `Employee_${id}`;
        const salary = this.random(30000, 100000);
        const titles = ['Wage Employee', 'Manager', 'Sales Person', 'Sales Manager'];
        const title = titles[this.random(0, titles.length - 1)];

        return new Employee(id, emailAddress, gender, name, salary, title);
    }
}

export default EmployeeGenerator;
