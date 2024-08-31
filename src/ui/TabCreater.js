export default class TabCreater {
    #count = 1;

    constructor(selector, headers) {
        this.headers = headers;
        this.table = document.createElement('table');
        this.tabHead = document.createElement('thead');
        this.tabBody = document.createElement('tbody');
        this.fillHeader();
        this.table.append(this.tabHead, this.tabBody);
        document.querySelector(selector).append(this.table);
    }

    fillHeader() {
        const tabRow = document.createElement('tr');
        const headers = ["№", ...this.headers];
        headers.forEach(header => {
            const tabCell = document.createElement('th');
            tabCell.textContent = header;
            tabCell.className = "text-center";
            tabRow.append(tabCell);
        });
        this.tabHead.append(tabRow);
    }

    addRow(employee) {
        const tabRow = document.createElement('tr');
        const values = [
            this.#count,
            employee.getId(),
            employee.getEmail(),
            employee.getGender(),
            employee.getName(),
            employee.getSalary(),
            employee.getTitle()
        ];

        values.forEach(value => {
            const tabCell = document.createElement('td');
            tabCell.textContent = value;
            tabCell.className = "text-center";
            tabRow.append(tabCell);
        });

        this.tabBody.append(tabRow);
        this.#count++;
    }
}
