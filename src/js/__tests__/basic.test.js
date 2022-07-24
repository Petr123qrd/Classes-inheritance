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

test("Заданный персонаж не существует", () => {
  expect(() => {
    const result = new Character("xxx", "Fairy");
    return result;
  }).toThrow();
});

test("creation Bowerman", () => {
  const recieved = new Bowerman("Bowerman", "Bowerman");
  expect(recieved).toEqual({
    name: "Bowerman",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test("creation Daemon", () => {
  const recieved = new Daemon("Daemon", "Daemon");
  expect(recieved).toEqual({
    name: "Daemon",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});

test("creation Magician", () => {
  const recieved = new Magician("Magician", "Magician");
  expect(recieved).toEqual({
    name: "Magician",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});

test("creation Swordsman", () => {
  const recieved = new Swordsman("Swordsman", "Swordsman");
  expect(recieved).toEqual({
    name: "Swordsman",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});

test("creation Undead", () => {
  const recieved = new Undead("Undead", "Undead");
  expect(recieved).toEqual({
    name: "Undead",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test("creation Zombie", () => {
  const recieved = new Zombie("Zombie", "Zombie");
  expect(recieved).toEqual({
    name: "Zombie",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
