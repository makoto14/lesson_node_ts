// https://atcoder.jp/contests/abs/tasks/abc086_a

import * as fs from 'fs';

const input = fs.readFileSync("/dev/stdin", "utf8");

const tmp: string[] = input.split("\n");
const splitedInput: string[] = tmp[0].split(" ");

const a: number = parseInt(splitedInput[0], 10);
const b: number = parseInt(splitedInput[1], 10);

const calculated: number = a * b;

const isEven: boolean = (calculated % 2) === 0

if (isEven) {
  console.log("Even");
} else {
  console.log("Odd");
}


