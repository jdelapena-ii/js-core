function repeatStringNumTimes(str, num) {
  var compiledStr = "";

  while(num>0){
    compiledStr += str;
  num--;
  }
  return compiledStr;
}  