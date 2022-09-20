const readline = require("readline-sync");

const employees = [];

function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.info = "Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status;
    this.printEmployeeForm = function () {
        console.log(this.info);
    }
}

var paul = new Employee("paul", "senior developer", "300k", "Full Time");
employees.push(paul.info);

var colin = new Employee("colin", "senior developer", "290k", "Full Time");
employees.push(colin.info);

var andrew = new Employee("andrew", "rv mechanic", "250k", "Contract");
employees.push(andrew.info);

paul.printEmployeeForm();
colin.printEmployeeForm();
andrew.printEmployeeForm();

console.log(employees);