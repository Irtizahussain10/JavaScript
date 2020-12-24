let classes = document.getElementById("classes");

class Person {
    constructor(name) {
        this.name = name
    }
    Hello() {
        return "Hello"
    }
}

class Irtiza extends Person {
    Hello() {
        return "Hello from " + super.Hello() + " " + this.name
    }
}

const Programmer = new Irtiza("Irtiza");

classes.innerHTML = Programmer.Hello();