const Schema = require("./employees_pb");
const fs = require("fs");

const chethan = new Schema.Employee();
chethan.setId(1);
chethan.setName("Chethan");
chethan.setSalary(100000);

console.log("My name is " + chethan.getName());

const maxv = new Schema.Employee();
maxv.setId(2);
maxv.setName("Max Verstappen");
maxv.setSalary(1500000);

const lh = new Schema.Employee();
lh.setId(3);
lh.setName("Lewis Hamilton");
lh.setSalary(2000000);

const employees = new Schema.Employees();
employees.addEmployees(chethan);
employees.addEmployees(maxv);
employees.addEmployees(lh);

const binaryData = employees.serializeBinary();
console.log("binary data: " + binaryData);
fs.writeFileSync("employeesProto.bin", binaryData);

const employeesBack = Schema.Employees.deserializeBinary(binaryData);
console.log(employeesBack.toString());
