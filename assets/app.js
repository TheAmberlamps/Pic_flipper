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
    } else if (event.target.matches("#tlDirH")) {
      flipH(tLeft);
    } else if (event.target.matches("#blDirV")) {
      flipV(bLeft);
    } else if (event.target.matches("#blDirH")) {
      flipH(bLeft);
    } else if (event.target.matches("#trDirV")) {
      flipV(tRight);
    } else if (event.target.matches("#trDirH")) {
      flipH(tRight);
    } else if (event.target.matches("#brDirV")) {
      flipV(bRight);
    } else {
      flipH(bRight);
    }
  },
  false
);
