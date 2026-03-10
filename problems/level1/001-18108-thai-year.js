/**
 * 문제: 18108
 * 사이트: 백준
 * 제목: 1998년생인 내가 태국에서는 2541년생?!
 * 링크: https://www.acmicpc.net/problem/18108
 */

const fs = require("fs");

// 로컬 테스트용
// const input = fs.readFileSync("../input.txt").toString().trim();

// 제출용
const input = fs.readFileSync(0, "utf-8").trim();

const buddhistYear = Number(input);
const christianYear = buddhistYear - 543;

console.log(christianYear);