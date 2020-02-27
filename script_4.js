const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//Question 1 -
console.log("===== Les entrepreneurs né dans les années 70s ===== ")

entrepreneurs.forEach(entrepreneur => {
  if(entrepreneur.year >= 1970 && entrepreneur.year < 1980)
    console.log(`${entrepreneur.first} ${entrepreneur.last}`);
})

//Question 2 -
console.log(" ===== Voici les noms et les prénoms des entrepreneurs ===== ")
entrepreneurs_name = [];

entrepreneurs.forEach(entrepreneur => {
  entrepreneurs_name.push(`${entrepreneur.first} ${entrepreneur.last}`);
})

console.log(entrepreneurs_name)

//Question 3 -
console.log("===== L'âge des entrepreneurs aujourd'hui ===== ")

entrepreneurs.forEach (entrepreneur => {
  let age = 2020 - entrepreneur.year;
  console.log(`${entrepreneur.first} ${entrepreneur.last} a ${age} ans aujourd'hui`);
})

//Question 4 -
console.log("===== Trie des entrepreneurs par ordre alphabétique du nom de famille =====")

entrepreneursLastName = []

entrepreneurs.forEach (entrepreneur => {
  entrepreneursLastName.push(`${entrepreneur.first} ${entrepreneur.last}`);
})
console.log(`${entrepreneursLastName.sort().join("\n")}`);

