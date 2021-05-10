class MainAccess {
    public x: number;
    private y: number;
    protected z: number;

    constructor() {
        this.x = 1;
        this.y = 2;
        this.z = 3;
    }
}

let main = new MainAccess();
// OK
console.log(main.x);

// error
// main.y;

// error
// main.z;

class MainAccessChild extends MainAccess {
    constructor(){
        super();

        // OK
        console.log(this.x);

        // error
        // this.y;

        // OK
        console.log(this.z);
    }
}

new MainAccessChild();
