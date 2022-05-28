function runProgram(input) {
  var ni = input.split("\n");

  var tc = +ni[0];
  var stack = [];
  var s = 0;
  for (var i = 1; i <= tc; i++) {
    var arr = ni[i].split(" ").map(Number);

    if (arr[0] == 1) {
      stack.push(arr[1]);
    } else if (arr[0] == 2) {
      if (stack.length != 0) {
        var x = stack.shift();
        console.log("x:", x);
        s = s - x;
      } else {
        s = s + 1;
      }
    }
  }
  //   console.log(Math.abs(s));
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
runProgram(`3
1 2
2
2`);
