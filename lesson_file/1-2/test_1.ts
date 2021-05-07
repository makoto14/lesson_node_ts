class Main {

    constructor() {
        this.whileMethod();
        this.forMethod();
        this.forOfMethod();
        this.forEachMethod();
        this.forInMethod();
    }

    /**
     * whileMethod
     */
    public whileMethod(): void {
        let array: Array<number> = new Array<number>();
        let num: number = 0;
        while (num <= 10) {
            array.push(num);
            num += 1;
        }
        console.log("whileMethod");
        console.log(array);
    }

    /**
     * forMethod
     */
    public forMethod(): void {
        let array: Array<number> = new Array<number>();
        for (let num = 0; num <= 20; num++) {
            array.push(num);
        }
        console.log("forMethod");
        console.log(array);
    }

    /**
     * forOfMethod
     */
    public forOfMethod(): void {
        let array: Array<number> = new Array<number>();
        array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let map: Map<number, string> = new Map<number, string>();
        console.log("forOfMethod");
        for(let num of array) {
            map.set(num, String(num));
            console.log(num);
        }
        let mapEntry: IterableIterator<[number, string]> = map.entries();
        console.log(mapEntry);
    }

    /**
     * forEachMethod
     */
    public forEachMethod(): void {
        let map: Map<number, string> = this.createMap();
        console.log("forEachMethod");
        map.forEach(function(value: string, key: number, map: Map<number, string>) {
            console.log(`key = ${key} , value = ${value}, map = ${map.get(key)}`);
        })
    }

    /**
     * forInMethod
     */
    public forInMethod(): void {
        // let map: Map<number, string> = this.createMap();
        // console.log("forInMethod");
        // for (let hoge in map) {
        //     console.log(hoge);
        // }
    }

    private createArray(): Array<number> {
        let array: Array<number> = new Array<number>();
        array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        return array;
    }

    private createMap(): Map<number, string> {
        let array: Array<number> = this.createArray();
        let map: Map<number, string> = new Map<number, string>();
        for(let num of array) {
            map.set(num, `Number is ${num}`);
        }
        return map;
    }
}

let hoge: Main = new Main();
