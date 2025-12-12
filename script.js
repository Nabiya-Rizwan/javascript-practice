// document.write("Hello World");
// console.log("Hello World");
// alert("Nabiya Rizwan");



// var user = "nabiya";
// console.log(user);


// var num = 3;
// var num1 =++num;
// console.log(num);


//  var message = "Thanks, ";
//  var userName = "Susan";
//  var banger = "!";
//  var customMess
//  = message + userName + banger;
//   alert(customMess
//  );





//  var message =prompt("what is your species");
//  var message =prompt("what is your planet ");
//  console.log ("welcome")



//  var mess = +prompt("enter your numbers");
//  if (mess <=80){
//     console.log("pass")
//  }else{
//     console.log("not allowd")
//  }
   // var mess = prompt( "Enter your name ");
   // console.log(correct);
   
console.log("Hello World");
let isOn = false;
let img = document.getElementById("img");
let btn = document.getElementById("btn");
function change(){
   if(isOn === false){
      isOn = true;
      btn.innerText = "back";
      img.src = "./bike 2.jpg";
   }else{
      isOn = false;
      btn.innerText ="click"
      img.src = "./bike 1.jpg"
   }

}


  
  
  


   