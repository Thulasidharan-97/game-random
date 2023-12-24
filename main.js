 var input = document.getElementById("number")
 var result = document.getElementById("result");
 var random = Math.floor(Math.random()*10)+1
 var score = document.getElementById("mark")
 var value = 10
 function match(){
  var a = input.value
     if(random == a){
       result.textContent="won"
       alert("you Rock it...")
     }
     else{
         result.textContent="lose"
         value = value-1 
         score.textContent = "score:"+value;
     }

 }

// var a = document.getElementById("baby")
// console.log(a.textContent)

// function bye(){
//     a.textContent = "tata baby"
// }
