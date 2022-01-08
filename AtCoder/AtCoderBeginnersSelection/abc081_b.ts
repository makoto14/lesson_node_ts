// https://atcoder.jp/contests/abs/tasks/abc081_b

import * as fs from 'fs';

const file: string = fs.readFileSync("/dev/stdin", "utf8");
const formatFile: string[] = file.split("\n");

const numCount: number = parseInt(formatFile[0], 10);
const inputs: string[] = formatFile[1].split(" ");
const formatInput: number[] = inputs.map((input) => parseInt(input, 10));

const calc = (inputs: number[], calcCount: number): number => {
    let newArray: number[] = new Array<number>();
    for (const input of inputs) {
        const isEven: boolean = input % 2 === 0;
        if (isEven) {
            newArray.push(input / 2);
        }
    }

    if (newArray.length === numCount) {
        calcCount = calc(newArray, ++calcCount);
    }
    return calcCount;
}

console.log(calc(formatInput, 0));
