function press(){
var add = function(side1,side2,side3) {
return side1+side2+side3;
};

{
var side1 = parseInt(prompt("enter side1:"));
var side2 = parseInt(prompt("enter side2:"));
var side3 = parseInt(prompt("enter side3:"));
var sum = add(side1, side2, side3);
alert(sum);

if(side1+side2<=side3 && side2+side3<=side1)
alert('Not a triangle!')

 else if(side1==side2&&side2==side3)
   alert('Equilateral:All sides are equal!');

  else if(side1===side2||side2===side3)
    alert('Isosceles:Two sides are equal!');

  else
    alert('Scalene:No sides are equal!'
    );
  }
}
