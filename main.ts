import { Priest } from "./Priest";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Personagem } from "./Personagem";

let mage: Personagem = new Mage("Alessandra mage");
let warrior: Personagem = new Warrior("Alessandra warrior");
let priest: Personagem = new Priest("Alessandra priest");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest); 