class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    set setName(name: string) {
        this.name = name;
    }

    set setAge(age: number) {
        this.age = age;
    }

    get getName(): string {
        return this.name
    }

    get getAge(): number {
        return this.age;
    }
}

abstract class absMain {

    protected abstract createPerson(name: string, age: number): Person;

}

class PersonCreater extends absMain {

    public createPerson(name: string, age: number): Person {
        let person: Person = new Person(name, age);
        return person;
    }

}

let hoge = new PersonCreater();
console.log(hoge.createPerson("takashi", 15));
