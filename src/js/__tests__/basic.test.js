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
  expect(() => {
    const recieved = new Bowerman("Bowerman");
    const result = {
      name: "bowerman",
      type: "Bowerman",
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    };
    return recieved, result;
  }).toThrow();
});

test("creation Swordsman", () => {
  expect(() => {
    const recieved = new Swordsman("Swordsman");
    const result = {
      name: "Swordsman",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    };
    return recieved, result;
  }).toThrow();
});

test("creation Magician", () => {
  expect(() => {
    const recieved = new Magician("Magician");
    const result = {
      name: "Magician",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    };
    return recieved, result;
  }).toThrow();
});

test("creation Undead", () => {
  expect(() => {
    const recieved = new Undead("Undead");
    const result = {
      name: "Undead",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    };
    return recieved, result;
  }).toThrow();
});

test("creation Zombie", () => {
  expect(() => {
    const recieved = new Zombie("Zombie");
    const result = {
      name: "Zombie",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    };
    return recieved, result;
  }).toThrow();
});

test("creation Daemon", () => {
  expect(() => {
    const recieved = new Daemon("Daemon");
    const result = {
      name: "Daemon",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 25,
      defense: 25,
    };
    return recieved, result;
  }).toThrow();
});
