class MainStatic {
    static staticNum: number = 0;
    num: number = 0;

    constructor() {
        MainStatic.staticNum++;
        this.num++;
    }
}

let main1 = new MainStatic();

console.log(MainStatic.staticNum);//1
console.log(main1.num);//1

let main2 = new MainStatic();

console.log(MainStatic.staticNum);//2
console.log(main2.num);//1
