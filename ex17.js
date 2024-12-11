// Tableau des étudiants
const students = [
  { nom: "Bobby", note: 15 },
  { nom: "Johnny", note: 12 },
  { nom: "Coddy", note: 18 },
  { nom: "Jeanny", note: 10 },
  { nom: "Katy", note: 17 },
  { nom: "Jean-Michel", note: 3 },
];

function filterAndAverage(students, noteLimit) {
  const studentsFilter = students.filter((student) => student.note > noteLimit);

  const totalNotes = studentsFilter.reduce(
    (acc, etudiant) => acc + etudiant.note,
    0
  );
  const average = studentsFilter.length > 0 ? totalNotes / students.length : 0;

  return {
    studentsFilter,
    average,
  };
}

console.log(filterAndAverage(students, 12));
