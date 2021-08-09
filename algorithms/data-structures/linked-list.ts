export interface Link<T> {
    current: T;
    next: T;
}

export class LinkedArrayList<T> {

    private array: Array<Link<T>>;

    constructor() {
        this.array = new Array<Link<T>>();
    }

    public get getLinkedArray(): Array<Link<T>> {
        return this.array;
    }

    public getLink = (param: T): Link<T> => {
        return this.array.find(value => value.current === param);
    }

    public getLinkedCurrent = (param: T): T => {
        return this.getLink(param).current;
    }

    public getLinkedNext = (param: T): T => {
        return this.getLink(param).next;
    }

    public add = (param: T): void => {
        const arrayLenght: number = this.array.length;
        const newList: Link<T> = {
            current: param,
            next: null
        };
        if (arrayLenght !== 0) {
            const maxIndex: number = arrayLenght - 1;
            this.array[maxIndex].next = param;
        }
        this.array.push(newList);
    }

    public insert = (param: T, targetIndex: number): void => {
        if (this.array[targetIndex] === undefined) {
            this.add(param);
            return;
        }
        const newList: Link<T> = {
            current: param,
            next: this.array[targetIndex].current
        };
        this.array.splice(targetIndex, 0, newList);
        this.consistencyArray(targetIndex);
    }

    public remove = (targetIndex: number): void => {
        if (this.array[targetIndex] === undefined) {
            console.error("Undefined");
            return;
        }
        this.array.splice(targetIndex, 1);
        this.consistencyArray(targetIndex);
    }

    private consistencyArray = (targetIndex: number): void => {
        const beforeIndex: number = targetIndex - 1;
        const afterIndex: number = targetIndex + 1;

        // 0の場合
        if (targetIndex === 0) {
            this.array[targetIndex].next = this.array[afterIndex].current;
        }

        // 0より大きく、最後より小さい
        if (0 < targetIndex && targetIndex < this.array.length - 1) {
            this.array[beforeIndex].next = this.array[targetIndex].current;
            this.array[targetIndex].next = this.array[afterIndex].current;
        }

        // 最後
        if (targetIndex === this.array.length - 1) {
            this.array[beforeIndex].next = this.array[targetIndex].current;
        }
        
        // 最後+1
        if (targetIndex - 1 === this.array.length - 1) {
            this.array[beforeIndex].next = null;
        }
    }

}


// const hoge = new LinkedArrayList<number>();
// for (let i=0; i<=10; i++) {
//     hoge.add(i);
// }
// hoge.insert(100, 5);
// hoge.insert(1000, 10);
// hoge.remove(2);
// console.log(hoge.getLinkedArray);


const hogeStr = new LinkedArrayList<string>();
const testStr = "aaa";
hogeStr.add(testStr);
hogeStr.add("bbb");
hogeStr.add("ccc");
hogeStr.add("ddd");
hogeStr.add("eee");
console.log(hogeStr.getLinkedArray);

hogeStr.insert("zzz", 4);
// hogeStr.remove(5);
console.log(hogeStr.getLinkedArray);
// console.log(hogeStr.getLink(testStr));
// console.log(hogeStr.getLinkedCurrent(testStr));
// console.log(hogeStr.getLinkedNext(testStr));
