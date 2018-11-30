function theTriangle(){
var a = parseInt(document.getElementById('a').value);
var b = parseInt(document.getElementById('b').value);
var c = parseint(document.getElementById('c').value);
var ans = document.getElementById('answerResult');
if(a+b>c && b+c>a && a+b>c){
  if(a==b&&c=a){
    answerResult.textContent='Equilateral:All sides are equal!';
  }
  else if(a===b||b===c||c===a){
    answerResult.textContent='Isosceles:Two sides are equal!';
  }
  else {
    answerResult.textContent='Scalene:No sides are equal!';
  }
  else {
    answerResult.textContent='Not a triangle!';
  }
  }
