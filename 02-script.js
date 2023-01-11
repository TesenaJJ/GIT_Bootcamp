// V tomto souboru budu tvořit konflikty - která zvířata vyhrajou??

const animals = ["dog", "cat", "Persian cat"]; //kočka porazí myš

//loopování - 3 způsoby:
for(let i = 0; i < animals.length; i++) { // i index reprezentovaný nějakou proměnnou //i++ - navyš o 1
    console.log(`animal number ${i + 1} is: ${animals[i]}`);
} 

for(const animal of animals) { //to samé trochu jinak ;)
    console.log(`My animal is: ${animal}`);
    if(animal === "cat"){
        break;  //break mi říká, kdy mám "vyskočit", tj. skončit, např. když něco hledám, tak poté, co to najdu mám přestat vyhledávat
    }
}

//tahle metoda nejde ukončit (použít break), tj. vždy projde celé pole
animals.forEach((item) => {  // => znamená anonymní funkci
    console.log(`This is not my favourite animal: ${item}`);
});


//Přidat zvíře
const count = animals.push('cows');
console.log(count);
// expected output: 4 ; vypíše počet prvků v poli
console.log(animals);


animals.push('rabbit');
for(const animal of animals) { 
    console.log(`My animal is: ${animal}`);
}

//VRACENÍ SUBPOLÍ - SLICE
const group = animals.slice(1, 3); //slice je zleva uzavřený interval; vrací nové pole (původní se nemění)
console.log(group);

//metoda splice změní původní pole - nevybírá, ale maže, případně nahradí
