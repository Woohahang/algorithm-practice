/**
 * 문제: 10430
 * 사이트: 백준
 * 제목: 나머지
 * 링크: https://www.acmicpc.net/problem/10430
 */

const fs = require("fs");

// 로컬 테스트용
// const input = fs.readFileSync("../input.txt").toString().split(" ").map(Number);

// 출제용
const input = fs.readFileSync(0).toString().split(" ").map(Number);

const [A, B, C] = input;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);