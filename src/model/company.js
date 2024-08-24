class Company {
    constructor() {
        this.data = {};
    }

    hire(employee) {
        if (this.data[employee.getId()])
            throw new Error('Employee "' + employee.getId() + '" already exists');
        this.data[employee.getId()] = employee;
        return true;
    }
    fire(id) {
        if (!this.data[id]) return false;
        delete this.data[id];
        return true;
    }

    get(id) {
        return this.data[id] || null;
    }

    getAll() {
        return Object.values(this.data);
    }
}

export default Company;
