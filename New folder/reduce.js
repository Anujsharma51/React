//Enter code here
function runProgram(input) {
  var str = input;
  var stack = [];
  var temp = str[0];
  var sum = 1;
  for (var i = 1; i < str.length; i++) {
    if (temp == str[i]) {
      sum++;
    } else {
      if (sum % 2 == 0) {
        // stack.pop();
        sum = 1;
        temp = str[i];
      } else {
        stack.push(temp);
        temp = str[i];
        sum = 1;
      }
    } //i=d
    // sum=2
    //stack[a,b]
    //temp = c
  }
  if (sum % 2 != 0) {
    stack.push(temp);
  }
  if (stack.length == 0) {
    console.log("Empty String");
  }
  console.log(stack.join(""));
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
runProgram(`aaaa`);
