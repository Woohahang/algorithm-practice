/**
 * 문제: 11382
 * 사이트: 백준
 * 제목: 꼬마 정민
 * 링크: https://www.acmicpc.net/problem/11382
 */
const fs = require("fs");

// 로컬 테스트용
// const input = fs.readFileSync("../input.txt").toString().split(" ").map(Number);

// 출제용
const input = fs.readFileSync(0).toString().split(" ").map(Number);

// 77, 777, 7777
const [A, B, C] = input;

// 7931
console.log(A + B + C);