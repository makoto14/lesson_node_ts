// https://atcoder.jp/contests/abs/tasks/abc081_a

import * as fs from 'fs';

const file: string = fs.readFileSync("/dev/stdin", "utf8");
const formatFile: string[] = file.split("\n");
const input: string = formatFile[0];

let countOne = 0;
for (let i = 0; i <= input.length; i++) {
    if (parseInt(input[i], 10) === 1) {
        countOne++;
    }
}

console.log(countOne);
