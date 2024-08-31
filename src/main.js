import Company from './model/company.js';
import { handleEmployeeDataFormSubmit } from './ui/formHandlers.js';
import './ui/modalHandler.js';
import Navigator from './ui/Navigator.js';
import { arrSectionsButtons } from './utils/navConfig.js';
const company = new Company();

handleEmployeeDataFormSubmit(company);

new Navigator("#buttons", arrSectionsButtons);


