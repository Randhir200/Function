function replace(str) {
  var newStr="";
  for(var i=0;i<str.length;i++){
    if(str[i]==" "){
      newStr+="-";
    }else{
      newStr+=str[i];      
    }
  }
  return newStr;
}
console.log(replace("My Name is Randhir"));