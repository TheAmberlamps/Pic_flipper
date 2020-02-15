document.addEventListener(
  "click",
  function(event) {
    var tLeft = document.getElementById("tl");
    var tRight = document.getElementById("tr");
    var bLeft = document.getElementById("bl");
    var bRight = document.getElementById("br");
    if (!event.target.matches(".button")) return;
    if (event.target.matches("#tlDirU")) {
      tLeft.style.transform = "scaleX(-1)";
      console.log("tLeft= " + tLeft);
      console.log(tLeft.style.transform.valueOf);
    }
    if (event.target.matches("#tr")) {
      console.log("tRight= " + tRight);
    }
    if (event.target.matches("#bl")) {
      bLeft.style.transform = "scaleY(-1) scaleX(-1)";
      console.log("bLeft= " + bLeft);
    }
    if (event.target.matches("#br")) {
      bRight.style.transform = "scaleY(-1)";
      console.log("bRight= " + bRight);
    }
  },
  false
);

/* document.addEventListener(
  "click",
  function(event) {
    var tLeft = document.getElementById("tl");
    if (!event.target.matches(".button")) return;
    event.preventDefault();
    if (event.target.matches("#tlDirU")) {
      console.log("bap");
      if (tLeft.style.transform === "scaleX(1) scaleY(1)") {
        tLeft.style.transform = "scaleY(-1)";
        console.log("tLeft= " + tLeft);
      } else {
        tLeft.style.transform = "scaleY(1)";
        console.log("tLeft= " + tLeft);
      }
    } else if (event.target.matches("#tlDirL")) {
      if (tLeft.style.transform === "scaleX(1)") {
        tLeft.style.transform = "scaleX(-1)";
      } else {
        tLeft.style.transform = "scaleX(1)";
        console.log("tLeft= " + tLeft);
      }
    } else if (event.target.matches("#tlDirR")) {
      if (tLeft.style.transform === "scaleX(1)") {
        tLeft.style.transform = "scaleX(-1)";
      } else {
        tLeft.style.transform = "scaleX(1)";
        console.log("tLeft= " + tLeft);
      }
    } else {
      if (tLeft.style.transform === "scaleY(1)") {
        tLeft.style.transform = "scaleY(-1)";
      } else {
        tLeft.style.transform = "scaleY(1)";
        console.log("tLeft= " + tLeft);
      }
    }
  },
  false
);
*/
