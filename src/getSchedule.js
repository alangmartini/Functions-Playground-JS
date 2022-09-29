const data = require('../data/zoo_data');

function noParam() {
  const obj = {};
  Object.keys(data.hours).forEach((key) => {
    const exhibition = data.species.filter((specie) =>
      specie.availability.includes(key)).map((item) => item.name);
    const { open, close } = data.hours[key];
    if (key !== 'Monday') {
      obj[key] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition,
      };
    } else {
      obj[key] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  });
  return obj;
}
function validator(scheduleTarget) {
  const existName = data.species.some((specie) => specie.name === scheduleTarget);
  const existDate = Object.keys(data.hours).some((date) => date === scheduleTarget);
  const test1 = existName || existDate;
  return (test1);
}

function getSchedule(scheduleTarget) {
  if (validator(scheduleTarget) === false) return noParam();
  if (!scheduleTarget) return noParam();
  const isName = data.species.find((specie) => specie.name === scheduleTarget);
  if (isName) return isName.availability;
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const isData = data.species.filter((specie) => specie.availability.includes(scheduleTarget));
  console.log(isData);
  const obj = {};
  const { open, close } = data.hours[scheduleTarget];
  obj[scheduleTarget] = {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: isData.map((specie) => specie.name),
  };
  return obj;
}

module.exports = getSchedule;
