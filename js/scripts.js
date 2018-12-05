function theTriangle() {
  var sideA = parseInt(document.getElementById("sideA").value);
  var sideB = parseInt(document.getElementById("sideB").value);
  var sideC = parseInt(document.getElementById("sideC").value);

  if (sideA === sideB && sideB === sideC && sideA === sideC) {
    alert("equilateral Triangle.");
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    alert("isosceles Triangle");
  } else if (sideA + sideB > sideC || sideB + sideC >= sideA || sideA + sideC <= sideB) {
    alert("scalene Triangle");
  } else {
    alert("Not a Triangle");
  }
}
alert(theTriangle());
