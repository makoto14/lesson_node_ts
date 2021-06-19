interface Point {
    x: number;
    y: number;
    output(): void;
}

class MyPoint implements Point {
    x: number;
    y: number;
    z: number;

    constructor() {
        this.x = 0;
    }
    /**
     * name
     */
    public output() {
        console.log(this.x);
    }
}

let hoge: MyPoint = new MyPoint();
hoge.output();
