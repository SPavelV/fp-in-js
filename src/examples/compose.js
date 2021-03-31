const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const addToDom = (elementId) => (content) =>
  (document.getElementById(`${elementId}`).innerHTML = content);

const h1 = (message) => `<h1>${message}</h1>`;
const echo = (message) => message;

const printMessage = compose(addToDom("app"), h1, echo);

printMessage("Hello World!");
