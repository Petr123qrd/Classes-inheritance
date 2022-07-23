import Character from "../basic";

import Bowerman from "../bowerman";
import Swordsman from "../swordsman";
import Magician from "../magician";
import Undead from "../undead";
import Zombie from "../zombie";
import Daemon from "../daemon";

test("Количество символов в имени менее 2", () => {
  expect(() => {
    const result = new Character("x", "Daemon");
    return result;
  }).toThrow();
});

test("Количество символов в имени более 10", () => {
  expect(() => {
    const result = new Character("xxxxxxxxxxx", "Swordsman");
    return result;
  }).toThrow();
});

test("Имя не является строкой", () => {
  expect(() => {
    const result = new Character(11111, "Undead");
    return result;
  }).toThrow();
});

describe.each([
  ["Bowerman", Bowerman, 25, 25],
  ["Swordsman", Swordsman, 40, 10],
  ["Magician", Magician, 10, 40],
  ["Undead", Undead, 25, 25],
  ["Zombie", Zombie, 40, 10],
  ["Daemon", Daemon, 10, 40],
]);
test("Заданный персонаж не существует", () => {
  expect(() => {
    const result = new Character("xxx", "Fairy");
    return result;
  }).toThrow();
});
