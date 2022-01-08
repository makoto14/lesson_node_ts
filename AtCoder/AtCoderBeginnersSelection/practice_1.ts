// https://atcoder.jp/contests/abs/tasks/practice_1

import * as fs from 'fs';
const input = fs.readFileSync("/dev/stdin", "utf8");

// 1行目がinput[0], 2行目がinput[1], …に入る
const splitedInput: string[] = input.split("\n"); // [ '1', '2 3', 'test', '' ]
const lineTwos: string[] = splitedInput[1].split(" ");
//const lineTwo: string[] = splitedInput[2].split(" ");
console.log(lineTwos);
// //文字列から10進数に変換するときはparseIntを使います
const a = parseInt(splitedInput[0], 10);
const b = parseInt(lineTwos[0], 10);
const c = parseInt(lineTwos[1], 10);
const s = splitedInput[2];
// //出力
console.log('%d %s', a + b + c, s);
