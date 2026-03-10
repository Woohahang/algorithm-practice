/**
 * 문제: 9498
 * 사이트: 백준
 * 제목: 시험 성적
 * 링크: https://www.acmicpc.net/problem/9498
 * 
 * 문제: 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
 */

const fs = require("fs");

// 로컬 테스트용
// const input = fs.readFileSync("../input.txt").toString().split(" ").map(Number);

// 출제용
const input = fs.readFileSync(0).toString();

function getGrade(score) {
    if (score >= 90)
        return "A";

    else if (score >= 80)
        return "B";

    else if (score >= 70)
        return "C";

    else if (score >= 60)
        return "D";

    else
        return "F";
}

// 로컬 테스트용
// input.forEach(score => {
//     const rating = calcRating(score)
//     console.log("score:", score)
//     console.log("rating:", rating)
// });

// 출제용
console.log(getGrade(input));

