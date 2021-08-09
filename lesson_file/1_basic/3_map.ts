// Classの使い方

export class Test3 {
    private readonly hoge : String = "hoge";
    private readonly hogeNum : Number;
    public readonly fuga : String = "fuga";

    constructor() {
        this.hoge = "111";
        this.hogeNum = 12;
    }

    public hoge2() {
        let map: Map<String, String> = new Map<String, String>();
        map.set("taro", this.hoge);
        map.set("makoto", String(this.hogeNum));
        return map;
    }
}

let classTest3: Test3 = new Test3();
let hoge : Map<String, String> = classTest3.hoge2();
console.log(hoge);
console.log(classTest3.fuga);
