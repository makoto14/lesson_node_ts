// https://atcoder.jp/contests/abs/tasks/abc087_b

import * as fs from 'fs';
const file: string = fs.readFileSync("/dev/stdin", "utf8");

const isEven = (int: number): boolean => int % 2 === 0;

const abc088_b = (args) => {
  const formatFile: Array<string> = args.split("\n");

  const cardCount: number = parseInt(formatFile[0], 10);
  const cards: Array<number> = formatFile[1].split(" ").map(str => parseInt(str, 10));
  const descSortedCards: Array<number> = cards.sort((a, b) => b - a);

  let aliceSum: number = 0;
  let bobSum: number = 0;
  for (let i = 0; i < cardCount; i++) {
    const addCard = descSortedCards[i];
    if (isEven(i)) {
      aliceSum += addCard;
    } else {
      bobSum += addCard;
    }
  }

  return aliceSum - bobSum;
}


console.log(abc088_b(file));
