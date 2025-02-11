"use strict";
class Cat {
    constructor(name, sex, age, weight, color, texture) {
        this._name = name;
        this._sex = sex;
        this._age = age;
        this._weight = weight;
        this._color = color;
        this._texture = texture;
    }
    ;
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get sex() {
        return this._sex;
    }
    set sex(sex) {
        this._name = sex;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get weight() {
        return this._weight;
    }
    set weight(weight) {
        this._weight = weight;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    get texture() {
        return this._color;
    }
    set texture(texture) {
        this._texture = texture;
    }
    breathe() {
        return true;
    }
    eat(food) {
        return food;
    }
    run(destination) {
        return destination;
    }
    sleep(hours) {
        return `este gato duerme ${hours} horas`;
    }
    meow() {
        return "miau";
    }
}
var oscar = new Cat("Oscar", "macho", 3, 7, "Marron", "rayada");
var luna = new Cat("Luna", "hembra", 2, 5, "gris", "lisa");
console.log(oscar.age);
console.log(oscar);
console.log(luna);
