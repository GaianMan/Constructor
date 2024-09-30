// Person
// Create a method in the Person class which returns how another person's age compares. Given the
// instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the
// following format:
// {other person name} is {older than / younger than / the same age as} me.

function Person(name,age){
    //console.log(Person.arguments[1]);
}
Person.prototype.compareAge=function(arg){
    const defAge=Person.arguments[1];

    if(defAge<arg) return `${Person.arguments[0]} is older than me`;
    //else if(defAge>arg){}
};

const p1 //= Person("Samuel", 24);
const p2 = Person("Joel", 36);
const p3 = Person("Lily", 24);

p1.compareAge(24);
// p2.compareAge(p1);
// p1.compareAge(p3);

