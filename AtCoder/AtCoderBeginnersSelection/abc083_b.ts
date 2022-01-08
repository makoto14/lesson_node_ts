// https://atcoder.jp/contests/abs/tasks/abc083_b

import * as fs from 'fs';

const file: string = fs.readFileSync("/dev/stdin", "utf8");
const formatFile: string[] = file.split("\n");
const formatInput: number[] = formatFile[0].split(" ").map((input) => parseInt(input, 10)); // [ 20, 2, 5 ]

let totalNum: number = 0;
for (let i = 1; i <= formatInput[0]; i++) {
    let numStr: string = String(i);
    const numArray: string[] = numStr.split("");
    let sumNum: number = 0;
    for (const num of numArray) {
        sumNum += parseInt(num, 10);
    }
    
    
    if (sumNum >= formatInput[1] && sumNum <= formatInput[2]) {
        totalNum += i;
    }
}

console.log(totalNum);
