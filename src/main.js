import Company from './model/company.js';
import EmployeeGenerator from './model/employeeGenerator.js';
import random from './utils/random.js';
import { handleEmployeeDataFormSubmit, handleRandomEmployeeFormSubmit } from './ui/formHandlers.js';
import './ui/modalHandler.js';

const company = new Company();
const employeeGenerator = new EmployeeGenerator(random);

handleEmployeeDataFormSubmit(company);
handleRandomEmployeeFormSubmit(company, employeeGenerator);