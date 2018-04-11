//alert("Hallo Welt");

let nachricht = "Hallo Welt";
//alert (Nachricht);
nachricht = "neuer Text";
//alert (nachricht);
console.log(nachricht);
const linkColor = "#ff0000";
let eine_variable = "test";
console.log("Variable: eine_variable: ", eine_variable);
let highscore = 354.5
console.log("highscore:", highscore/20);

let meineNachricht ="test1";
console.log(meineNachricht)
meineNachricht = "test2";
console.log(meineNachricht)
meineNachricht = `Eine mehr
und
ein
ganz
langer
text`;
console.log (meineNachricht);

let isOver18 = true;
console.log("Über 18?", isOver18);
let age = 17;
console.log("age über 18", age > 18);

let zahlenListe = [2, 3, 4, 5, 6];
console.log(zahlenListe);
let namenListe = ["Jane", "John"];
console.log(namenListe[1]);
console.log(namenListe.length);

let benutzer = {
    vorname: "Jane",
    nachname: "Doe",
    alter: 28
};
console.log("Benutzer: ", benutzer.alter);
benutzer.bestzeit = 200;
console.log(benutzer);
benutzer["bestzeit ever"] = 100;
console.log(benutzer);


//Benutzer Eingabe
//let alter = prompt("Wie alt bist du?");
//console.log("Du bist ", alter, "Jahre alt");
//console.log("Über 18?", alter > 18);
//if (alter > 18) {
//    console.log("Du darfst hinein...")
//} else {
//    console.log("noch nicht 18...")
//}

for (let i=1; i<10; i++) {
    console.log("Wert von i: ", i);

}

function showAge(birthYear) {
    let age = 2018 - birthYear;
    console.log("Du bist ", age, "Jahre alt")
}

showAge(1992);
showAge(1988);

function calcAge(birthYear) {
    return 2018 - birthYear;
}

console.log("Du bist ", calcAge(1980), "Jahre alt");
console.log("und du ", calcAge(1997), "Jahre alt");