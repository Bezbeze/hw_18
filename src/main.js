import Company from './model/company.js';
import { handleEmployeeDataFormSubmit } from './ui/formHandlers.js';
import Navigator from './ui/Navigator.js';
import { arrSectionsButtons } from './utils/navConfig.js';
import TabCreater from "./ui/TabCreater";
import {arrTabHeader} from "./utils/constants";

const company = new Company();
const tableCreator = new TabCreater(".table", arrTabHeader);
new Navigator("#buttons", arrSectionsButtons);

handleEmployeeDataFormSubmit(company, tableCreator);

const listEmployee = document.getElementById('list-employee');

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-layer')) {
        event.target.style.display = 'none';
    }
});