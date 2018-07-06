function loadJson(file,callback){
  var a=new XMLHttpRequest();
a.overridemimetype("application/json");
a.open("GET",file,true);
a.onreadystatechange=function(){
  if(a.readystate==4&&a.status=="200"){
    callback(a.responsetext);
  }
}
a.send(null);
}
loadJson("data.json",function(text)){
jet data=JSON.parse(text);
console.log(data);
career(data.co);
})
var right=document.getElementByte('right')
var career=document.getElement('h4');
career.textcontent="career object:";
career.appendchild(document.createElement("HR"));
function career(clss){
  var cop=document.createElement("p");
  cop.textcontent=co;
  career.appendchild(cop);
}
right.appendchild(career);
  //JSON.parse(text);
}
var a=10;
for(x in y){
  var a=20;
  console.log(a);
}
console.log(a);
}
