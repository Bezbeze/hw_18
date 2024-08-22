class Employee {
    #id;
    #email;
    #gender;
    #name;
    #salary;
    #title;

    constructor(id, email, gender, name, salary, title) {
        if (typeof id !== 'number' || id < 0)
            throw new Error('ID must be a positive number.');
        if (!this.#validateEmail(email))
            throw new Error('Invalid email address.');
        if (!['female', 'male'].includes(gender))
            throw new Error('Gender must be "female" or "male".');
        if (typeof name !== 'string' || name.trim() === '')
            throw new Error('Name cannot be empty.');
        if (typeof salary !== 'number' || salary <= 0)
            throw new Error('Salary must be a positive number.');
        if (typeof title !== 'string' || title.trim() === '')
            throw new Error('Invalid job title.')

        this.#id = id;
        this.#email = email;
        this.#gender = gender;
        this.#name = name;
        this.#salary = salary;
        this.#title = title;
    }

    #validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    getId() {
        return this.#id;
    }
    getEmail() {
        return this.#email;
    }
    getGender() {
        return this.#gender;
    }
    getName() {
        return this.#name;
    }
    getSalary() {
        return this.#salary;
    }
    getTitle() {
        return this.#title;
    }
}
export default Employee;