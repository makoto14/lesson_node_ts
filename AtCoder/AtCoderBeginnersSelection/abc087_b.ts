// https://atcoder.jp/contests/abs/tasks/abc087_b

import * as fs from 'fs';

const file: string = fs.readFileSync("/dev/stdin", "utf8");
const formatFile: string[] = file.split("\n");

const formatInput: number[] = formatFile.map((input) => parseInt(input, 10));

const coin500Amount: 500 = 500;
const coin500Count: number = formatInput[0];

const coin100Amount: 100 = 100;
const coin100Count: number = formatInput[1];

const coin50Amount: 50 = 50;
const coin50Count: number = formatInput[2];

const expectAmount: number = formatInput[3];

let equalsCount: number = 0;
for (let i500 = 0; i500 <= coin500Count; i500++) {

    for (let i100 = 0; i100 <= coin100Count; i100++) {

        for (let i50 = 0; i50 <= coin50Count; i50++) {

            const sum500Amount: number = coin500Amount * i500;
            const sum100Amount: number = coin100Amount * i100;
            const sum50Amount: number = coin50Amount * i50;
            const sumAmount: number = sum500Amount + sum100Amount + sum50Amount;
            if (sumAmount === expectAmount) {
                equalsCount++
            }
        }
    }
}


console.log(equalsCount);
