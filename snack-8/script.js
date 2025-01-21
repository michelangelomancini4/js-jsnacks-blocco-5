const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// creo nuovo array solo con le classi
const classArray = students.map ((classe) => {

  // mostro la classe nell'array solo se fa parte dello stesso oggetto di Marco Lanci
  if (classe.name === 'Marco Lanci') {
    return classe.class;
  }
   return false;
});

// stampo in console il nuovo array con le classi
console.log(classArray);

// stampo in console solo la classe appartenente a Marco Lanci
const newArray = classArray.find((marcoClass) => {
  return marcoClass != false ;
});

console.log(newArray);


