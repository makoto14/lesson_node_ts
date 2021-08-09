export class Person {
    private name: string;
    private age: number;

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

export class PersonCreater extends absMain {

    public createPerson(name: string, age: number): Person {
        return new Person(name, age);;
    }

}

let hoge = new PersonCreater();
console.log(hoge.createPerson("takashi", 15));
