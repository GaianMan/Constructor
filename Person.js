function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.compareAge=function(newP){
    if(this.age<newP.age){
        return `${newP.name} is older than me`;
    }
    else if(this.age>newP.age){
        return `${newP.name} is Younger than me`;
    }
    else return `${newP.name} is same age as me`
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 =  new Person("Lily", 24);

console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
console.log(p1.compareAge(p2));
