const fs = require("fs");
const employees = [];

employees.push({
  name: "Chethan",
  Salary: 100000,
  id: 1,
});

const maxv = {
  name: "Max Verstappen",
  Salary: 15000000,
  id: 2,
};
employees.push(maxv);

employees.push({
  name: "Lewis Hamilton",
  Salary: 12000000,
  id: 3,
});

console.log(JSON.stringify(employees));
fs.writeFileSync("employeesJSON.json", JSON.stringify(employees));
