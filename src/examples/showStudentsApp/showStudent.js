const find = curry((db, id) => {
  let obj = db.find(id);
  if (obj === null) {
    throw new Error("Object not found!");
  }
  return obj;
});

const csv = (student) =>
  `${student.ssn}, ${student.firstname}, ${student.lastname}`;

const append = curry((selector, info) => {
  document.querySelector(selector).innerHTML = info;
});

const showStudent = run(append("#app"), csv, find(db));
showStudent("777-77-7777");
