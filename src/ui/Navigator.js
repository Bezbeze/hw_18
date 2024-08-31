
export default class Navigator {
    constructor(navSelector, arrSections) {
        this.navContainer = document.querySelector(navSelector);
        this.arrSections = arrSections.map(item => {
            const section = document.querySelector(item.selector);
            const btn = this.#createButton(item.title, section);
            this.navContainer.appendChild(btn);
            return { section, btn };
        });
        this.#hideAllSections();
    }

    #createButton(title, section) {
        const btn = document.createElement('button');
        btn.className = "nav-item btn btn-info mr-5";
        btn.textContent = title;
        btn.addEventListener('click', () => {
            this.#hideAllSections();
            this.#deactivateAllButtons();
            section.style.display = 'flex';
            btn.classList.add('active');
        });
        return btn;
    }

    #hideAllSections() {
        this.arrSections.forEach(item => item.section.style.display = 'none');
    }

    #deactivateAllButtons() {
        this.arrSections.forEach(item => item.btn.classList.remove('active'));
    }
}
