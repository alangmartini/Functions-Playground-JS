const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees
    .some((employee) => employee.managers.includes(id));
}

// Filters for employees in which managers array includes
// managerId parameter, returning an array of objects.
// Map the array so the each object become an string of firstName + lastName
function getRelatedEmployees(managerId) {
  const managersEmployees = data.employees.filter((employee) =>
    employee.managers.includes(managerId));
  console.log(isManager(managerId));
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return managersEmployees.map((func) =>
    `${func.firstName} ${func.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
