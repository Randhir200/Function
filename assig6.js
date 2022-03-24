function checkSmallCase(char){
  var upper = "ABCDEFGHIJKLMNOPQSRTUVXWZ";
  var f=true;
  for(var i=0;i<upper.length;i++){
    if(char==upper[i])
    {
      return false;
    }
  }
  return f;
}

console.log(checkSmallCase("r"));