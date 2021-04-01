export const showStudent = (ssn) => {
  const student = db.find(ssn);
  if (student !== null) {
    document.querySelector(`${elementId}`).innerHTML = `
      ${student.ssn},
      ${student.firstname},
      ${student.lastname}
    `;
  } else {
    throw new Error("Student not found!");
  }
};

showStudent("777-77-7777");
