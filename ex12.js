const getFullName = (firstName, lastName) => {
  const capitalize = (result) => {
    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
  };

  return `Nom complet : ${capitalize(firstName)} ${capitalize(lastName)}.`;
};

console.log(getFullName("albert", "einstein"));
