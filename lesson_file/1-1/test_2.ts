class Main {
    constructor(input:string) {
        // this.input = input;
        this.resolver(input);
    }

    private resolver(input: string): void {
        let tmp1: string[] = input.split("\n");
        let tmp2: string[] = tmp1[1].split(" ");
        //文字列から10進数に変換するときはparseIntを使います
        let a:number = parseInt(tmp1[0], 10);
        let b:number = parseInt(tmp2[0], 10);
        let c:number = parseInt(tmp2[1], 10);
        let s:string = tmp1[2];
        let sum:number = a + b + c;
        console.log(`${sum} ${s}`);
    }
}

let hoge = "1\n2 3\ntest"

new Main(hoge);