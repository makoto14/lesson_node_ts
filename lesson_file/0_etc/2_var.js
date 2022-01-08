// var maekawa = "maekawa";
// maekawa = "kurokawa";

// let maekawa1 = "maekawa";
// maekawa1 = 1;

// const maekawa2 = "maekawa";
// maekawa2 = "kurokawa"; // Assignment to constant variable.

if (true) {
    var hoge0 = 0;
    const hoge1 = 1;
}

console.log(hoge0); // 0
console.log(hoge1); // hoge1 is not defined

console.log(`var-----------------`)
{
    console.log(a); // undefined
    var a = 0;
    console.log(a); // 0
}

console.log(`let / const-----------------`)
{
    console.log(b); // Cannot access 'b' before initialization 
    const b = 0;
    console.log(b); // 0
}
