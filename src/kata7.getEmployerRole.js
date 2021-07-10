const getEmployerRole = (employeeName, employees) => {


return employees.filter(({name}) => name === employeeName).map(({role}) => role)[0]};

module.exports = getEmployerRole;
