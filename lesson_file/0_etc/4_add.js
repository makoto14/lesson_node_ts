console.log(1 + 2 * 3);// => 7
console.log((1 + 2) * 3);// => 9

console.log("--------------");
console.log(1 + 2);   // => 3: 加算。
console.log("1" + "2");   // => "12": 連結。
console.log("1" + 2);   // => "12": 数値から文字列への変換の後、連結。
console.log(1 + {});   // => "1[object Object]": オブジェクトから文字列への変換の後、連結。
console.log(true + true);   // => 2: 論理値から数値への変換の後、加算。
console.log(2 + null);   // => 2: nullを0に変換した後、加算。
console.log(2 + undefined);   // => NaN: undefinedをNaNに変換した後、加算。


console.log("--------------");
console.log(1 + 2 + " blind mice"); // => "3 blind mice"
console.log(1 + (2 + " blind mice")); // => "12 blind mice"

console.log("--------------");
let i = 1;
console.log(i);
let j = ++i;// 式の値としてインクリメント後、つまりi+1の値を返します。
console.log(j);

let n = 1;
console.log(n);
let m = n++;// 式の値としてインクリメント前、つまりiの値を返します。
console.log(m);
console.log(n);

console.log("--------------");
let arr = new Array();
for (let i=0; i <= 10; ++i) {
    arr.push(i);
}
console.log("arr", arr);

let arr2 = new Array();
for (let i=0; i <= 10; i++) {
    arr2.push(i);
}
console.log("arr2", arr2);

