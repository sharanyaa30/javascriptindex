const heros = ["spider-man", "iron-man", "thor"];
const villains = ["loki", "thanos", "ultron"];

// heros.push(villains)

// console.log(heros);
// console.log(heros[1]);

// heros.concat(villains)

// console.log(heros);

// const allheros = heros.concat(villains)

// console.log(allheros);

const all_new_heros = [...heros, ...villains]
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array .isArray("sharanyaa"));
console.log(Array.from("Sharanyaa"));

console.log(Array.from({name: "sharanyaa"})) // it will give empty array because it is not iterable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
