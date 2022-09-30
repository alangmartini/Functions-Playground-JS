const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  const employee = data.employees.find((emp) =>
    emp.firstName === name || emp.lastName === name);
  return employee;
}

function getEmployeeById(id) {
  const employee = data.employees.find((emp) => emp.id === id);
  return employee;
}

function getAnimalsNameAndLocation(employee) {
  const animalsId = employee.responsibleFor;
  const animalsName = [];
  const locations = [];
  animalsId.forEach((animalId) =>
    data.species.forEach((specie) => {
      if (specie.id === animalId) {
        animalsName.push(specie.name);
        locations.push(specie.location);
      }
    }));
  return { animalsName, locations };
}

function noParam() {
  return data.employees.map((emp) => {
    const { animalsName, locations } = getAnimalsNameAndLocation(emp);
    return {
      id: emp.id,
      fullName: `${emp.firstName} ${emp.lastName}`,
      species: animalsName,
      locations,
    };
  });
}

function getEmployeesCoverage(obj) {
  if (!obj) return noParam();
  const { name, id } = obj;
  let employee;
  if (name) employee = getEmployeeByName(name);
  if (id) employee = getEmployeeById(id);
  if (!employee) throw new Error('Informações inválidas');
  const { animalsName, locations } = getAnimalsNameAndLocation(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animalsName,
    locations,
  };
}

// console.log(getEmployeesCoverage({ name: data.employees[0].firstName }));

module.exports = getEmployeesCoverage;
