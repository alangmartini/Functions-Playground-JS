const data = require('../data/zoo_data');

function isManager(id) {
  return !data.employees
    .find((employee) => employee.id === id)
    .id.length === 0;
}

// Filters for employees in which managers array includes
// managerId parameter, returning an array of objects.
// Map the array so the each object become an string of firstName + lastName
function getRelatedEmployees(managerId) {
  return data.employees.filter((employee) =>
    employee.managers.includes(managerId))
    .map((func) =>
      `${func.firstName} ${func.lastName}`);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
