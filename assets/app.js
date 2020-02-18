var flipV = function(square) {
  if (square.style.transform === "scaleX(1) scaleY(1)") {
    square.style.transform = "scaleX(1) scaleY(-1)";
  } else if (square.style.transform === "scaleX(-1) scaleY(1)") {
    square.style.transform = "scaleX(-1) scaleY(-1)";
  } else if (square.style.transform === "scaleX(-1) scaleY(-1)") {
    square.style.transform = "scaleX(-1) scaleY(1)";
  } else {
    square.style.transform = "scaleX(1) scaleY(1)";
  }
};
var flipH = function(square) {
  if (square.style.transform === "scaleX(1) scaleY(1)") {
    square.style.transform = "scaleX(-1) scaleY(1)";
  } else if (square.style.transform === "scaleX(-1) scaleY(1)") {
    square.style.transform = "scaleX(1) scaleY(1)";
  } else if (square.style.transform === "scaleX(-1) scaleY(-1)") {
    square.style.transform = "scaleX(1) scaleY(-1)";
  } else {
    square.style.transform = "scaleX(-1) scaleY(-1)";
  }
};

document.addEventListener(
  "click",
  function(event) {
    var tLeft = document.getElementById("tl");
    var tRight = document.getElementById("tr");
    var bLeft = document.getElementById("bl");
    var bRight = document.getElementById("br");
    if (!event.target.matches(".button")) return;
    if (event.target.matches("#tlDirV")) {
      flipV(tLeft);
      console.log(tLeft.style.transform);
    } else if (event.target.matches("#tlDirH")) {
      flipH(tLeft);
      console.log(tLeft.style.transform);
    } else if (event.target.matches("#blDirV")) {
      flipV(bLeft);
      console.log(bLeft.style.transform);
    } else if (event.target.matches("#blDirH")) {
      flipH(bLeft);
      console.log(bLeft.style.transform);
    } else if (event.target.matches("#trDirV")) {
      flipV(tRight);
      console.log(tRight.style.transform);
    } else if (event.target.matches("#trDirH")) {
      flipH(tRight);
      console.log(tRight.style.transform);
    } else if (event.target.matches("#brDirV")) {
      flipV(bRight);
      console.log(bRight.style.transform);
    } else if (event.target.matches("#brDirH")) {
      flipH(bRight);
      console.log(bRight.style.transform);
    }
  },
  false
);
