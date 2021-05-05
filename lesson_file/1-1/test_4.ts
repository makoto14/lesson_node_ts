// set の使い方

class setTest {
    private hoge1: String = 'hoge';
    private hoge2: String = 'hoge2';
    private hoge3: String = 'hoge3';
    private hoge4: String = 'hoge';
    public set: Set<String>;
    public array: Array<String>;

    constructor() {
        this.array = new Array<String>();
        this.array.push(this.hoge1);
        this.array.push(this.hoge2);
        this.array.push(this.hoge3);
        this.array.push(this.hoge4);
        this.set = new Set<String>(this.array);
        // this.set = new Set<String>();
        // this.set.add(this.hoge1);
        // this.set.add(this.hoge2);
        // this.set.add(this.hoge3);
        // this.set.add(this.hoge4);
    }

}

let classTest: setTest = new setTest();
console.log(classTest.array);
console.log(classTest.set);
