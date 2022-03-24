var n=5;
var s="";
var c=1;
for(i=1;i<=n;i++){
  for(j=0;j<n-i;j++){
    s+=" ";
  }
  for(k=0;k<c;k++){
    s+="*";
  }
  c+=2;
  s+="\n"
}
  console.log(s);