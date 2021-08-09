import { Person, PersonCreater } from '../4_abs';

test('basic', () => {
    expect(new Person('takashi', 15).getAge).toBe(15);
})

test('basic1', () => {
    const testPerson: Person = new Person('takashi', 15);
    expect(new PersonCreater().createPerson("takashi", 15)).toEqual(testPerson);
})
