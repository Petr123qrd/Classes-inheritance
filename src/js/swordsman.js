import Character from "./basic";

export default function Swordsman(name, type) {
  Character.call(this, name, type);
  this.attack = 40;
  this.deffence = 10;
}
