var wrap = document.body.querySelector(".wrap");
var num = 5;


var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for(var i=0; i<list.length; i++){
  var ele = document.createElement("div");
  var nameEle = document.createElement("div");
  var ageEle = document.createElement("div");
  ele.innerHTML=list[i].name;
  ageEle.innerHTML = "age: " + list[i].age;
  ele.appendChild(nameEle);
   ele.appendChild(ageEle);
  if (list[i].age >= 25) {
    ele.style.color = "green";
  }
  wrap.appendChild(ele);
}

function counter(){
    num = num + 1;
  document.body.querySelector(".num").innerHTML = num;
}


document.body.querySelector(".button").addEventListener("click", function(){
  counter();
})
document.body.querySelector(".num").innerHTML = num;