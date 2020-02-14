document.addEventListener(
  "click",
  function(event) {
    if (!event.target.matches(".pic")) return;
    if (event.target.matches("#tl")) {
      var getTleft = document.getElementById("tl");
      getTleft.style.transform = "scaleX(-1)";
      console.log("getTleft= " + getTleft);
    }
    if (event.target.matches("#tr")) {
      var getTright = document.getElementById("tr");
      console.log("getTright= " + getTright);
    }
    if (event.target.matches("#bl")) {
      var getBleft = document.getElementById("bl");
      getBleft.style.transform = "scaleY(-1) scaleX(-1)";
      console.log("getBleft= " + getBleft);
    }
    if (event.target.matches("#br")) {
      var getBright = document.getElementById("br");
      getBright.style.transform = "scaleY(-1)";
      console.log("getBright= " + getBright);
    }
  },
  false
);
