function Person(name, age) {
    this.name = name;  // Store the person's name in the instance
    this.age = age;    // Store the person's age in the instance
}

Person.prototype.compareAge = function(otherPerson) {
    if (this.age < otherPerson.age) {
        return `${otherPerson.name} is older than me.`;
    } else if (this.age > otherPerson.age) {
        return `${otherPerson.name} is younger than me.`;
    } else {
        return `${otherPerson.name} is the same age as me.`;
};
}
// Example usage:
const p1 = new Person("John", 25);  // Create a new Person instance
const p2 = new Person("Jane", 30);  // Create another Person instance

console.log(p1.compareAge(p2));     // "Jane is older than me."
console.log(p2.compareAge(p1)); 