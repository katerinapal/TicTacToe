var newNum = 0;
for (var i = 0; i <= 13; i++) {
  newNum = newNum + i;
}

var zero = 0;

zero = newNum - 3;

var printIt = function (someShit) {
  return console.log(someShit);
};

printIt(newNum + ", " + zero);