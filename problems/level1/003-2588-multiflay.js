/**
 * 문제: 2588
 * 사이트: 백준
 * 제목: 곱셈
 * 링크: https://www.acmicpc.net/problem/2588
 */

const fs = require("fs");

// 로컬 테스트용
// const input = fs.readFileSync("../input.txt").toString().split("\n");

// 제출용
const input = fs.readFileSync(0).toString().split("\n");

// A:472, B,385
const [A, B] = input;

console.log(A * Number(B[2]));  // 2360
console.log(A * Number(B[1]));  // 3776
console.log(A * Number(B[0]));  // 1416
console.log(A * B);             // 181720