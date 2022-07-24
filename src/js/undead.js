import Character from "./basic";

export default function Undead(name, type) {
  Character.call(this, name, type);
  this.attack = 25;
  this.deffence = 25;
}
