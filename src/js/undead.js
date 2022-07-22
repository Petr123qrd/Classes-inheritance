import Character from "./basic";

export default class Undead extends Character {
  constructor(name, type = "Undead") {
    super(name, type);
    this.attack = 25;
    this.deffence = 25;
  }
}
