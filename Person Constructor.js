function Person(name, age) {
    this.name = name
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function(food) {
    if (this.stomach.length < 10) {
        this.stomach.push(food);
    } else {
        console.log(`${this.name} is full.`);
    }
};

Person.prototype.poop = function() {
    this.stomach = []; 
    console.log(`Stomach is empty.`);
};

Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`;
};

const person1 = new Person("Mary", 50);
console.log(person1.toString());
person1.eat("apple");
person1.eat("sandwich");
console.log(person1.stomach); 
person1.poop();
console.log(person1.stomach);
