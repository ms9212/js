// html의 body 태그를 js에서 사용핧 수 있도록 선언 //
const body = document.body;

// 자주 사용할 문자열을 변수로 선언 //
const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  // browser크기를 width로 //
  const width = window.innerWidth;

  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.remove(MEDIUM_SCREEN);
    body.classList.add(SMALL_SCREEN);
  }
}

window.addEventListener("resize", handleResize);

//내가 했던것

// js작성한것

// import "./styles.css";

// const bc = document.body;

// function handleresize() {
//  const IW = "iw";
//  const DW = "dw";
//  const BW = window.innerWidth;

//  if (BW > 1100) {
//    bc.classList.add(IW);
//  } else if (BW < 700) {
//    bc.classList.add(DW);
//  } else {
//    bc.classList.remove(IW);
//    bc.classList.remove(DW);
//  }
//}

//window.addEventListener("resize", handleresize);

//css작성한것

//body {
//  font-family: sans-serif;
//  background-color: blueviolet;
//  transition: background-color 0.5s ease-in-out;
//}
//h1 {
//  color: white;
//}

//.iw {
//  background-color: yellowgreen;
//}

//.dw {
//  background-color: turquoise;
//}
