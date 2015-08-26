app.filter("capitalize", function() {
  return function(input, scope) {
    var finalOutput= "";
    if(input !== null) {
      var inputArray = input.split(" ");
      for (var i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].substring(0,1).toUpperCase()+inputArray[i].substring(1);
      }
      finalOutput = inputArray.join(" ");
    return finalOutput;
    }
  };
});