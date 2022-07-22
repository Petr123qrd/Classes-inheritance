export default class Character {
  constructor(name) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.deffence = undefined;
    const typeCharacter = [
      "Bowman",
      "Daemon",
      "Magician",
      "Swordsman",
      "Undead",
      "Zombie",
    ];

    if (typeof name !== "string") {
      throw new Error("Ошибка! Имя должно быть строкой!");
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error("Ошибка! Количество символов в имени от 2 до 10!");
    }

    if (!typeCharacter.includes(type)) {
      throw new Error("Ошибка! Такой персонаж не существует!");
    }
  }
}
