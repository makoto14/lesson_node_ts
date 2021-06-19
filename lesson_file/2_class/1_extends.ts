class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public add(point: Point): Point {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

let p1: Point = new Point(0, 10);
let p2: Point = new Point(10, 20);
let p3: Point = p1.add(p2);
console.log(p1);
console.log(p2);
console.log(p3);

class Point3D extends Point {
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }

    public add(point: Point3D): Point3D {
        let point2D: Point = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

let p3d1: Point3D = new Point3D(0, 10, 20);
let p3d2: Point3D = new Point3D(10, 20, 30);
let p3d3: Point3D = p3d1.add(p3d2);

console.log(p3d1);
console.log(p3d2);
console.log(p3d3);
