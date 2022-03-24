function lowerToUpper(str){
  var lower = "abcdefghijklmnopqsrtuvxwz";
  var upper = "ABCDEFGHIJKLMNOPQSRTUVXWZ";
  var uStr="";
  for(var i=0;i<str.length;i++){
    for(var j=0;j<lower.length;j++){
      if(str[i]==upper[j]){
        uStr += lower[j];
      }else if(str[i]==lower[j]){
        uStr+=str[i];
      }
    }
  }
  return uStr;
}

function arrIntoLower(arr){
  for(var i=0;i<arr.length;i++){
    arr[i]=lowerToUpper(arr[i]);
  }
  return arr;
}

console.log(arrIntoLower(["RANDHIR","NEHA", "REHA","Nandu"]));