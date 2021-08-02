// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.
// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다.
// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1111 (IMG_E1111)

// 경로를 사용하기 위해서 path 모듈 사용
const path = require("path");
const os = require("os");
const fs = require("fs");

// 1.
const folder = process.argv[1];
// folder가 존재하지 않거나 || fs에 존재하지 않는 경로라면
if (!folder) {
  console.error("Please enter folder name in 'Pictures' folder");
  return;
}

const workingDir = path.join(os.homedir(), "Pictures", folder);

console.log(workingDir);
