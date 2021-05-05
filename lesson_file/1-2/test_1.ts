class Main {

    constructor() {

        let array: Array<number> = new Array<number>();
        this.whileMethod(array);
        this.forMethod(array);
    }
    /**
     * whileMethod
     */
    public whileMethod(array: Array<number>) {
        let num: number = 0;
        while (num <= 10) {
            array.push(num);
            num += 1;
        }
        console.log(array);
    }

    /**
     * forMethod
     */
    public forMethod(array: Array<number>) {
        for (let num = 0; num <= 20; num++) {
            array.push(num);
        }
        console.log(array);
    }

    /**
     * forOfMethod
     */
    public forOfMethod() {

    }

    /**
     * forEachMethod
     */
    public forEachMethod() {
        
    }

    /**
     * forInMethod
     */
    public forInMethod() {
        
    }
}



new Main();
