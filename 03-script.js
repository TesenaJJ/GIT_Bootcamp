const sentence = "Whoops, I did it again."

//obsahuje string nějaký substring?
if(sentence.includes("I")) {
    console.log("Jsem tam!");
}

//práce s textem
console.log(sentence.slice(0,6));

//druhý řetězec
const secondsentence = "Singer: Britney Spears";

//spojení řetězců
const final = sentence + " " + secondsentence;  // nebo: const final = `${sentence} ${secondsentence}`;
console.log(final);

//regulární výrazy
const result = sentence.match(/whoops/i);
if (result !== null){
    console.log(result[0]);
}  

//promenna `secondsentence`
//chceme najít "Spears", který musí být na konci prohledávaného stringu
const result2 = secondsentence.match(/Spears$/i);
if (result2 !== null){
    console.log(result2[0]);
}
