//  var First = 20;
//  var Second = 30;
//  let markup = 
//    `<div class="clas">
//       <div>
//          <h3>how are you</h3>
//          <p>this is total ${First + Second}</p>
//       </div>
//     </div>`;

//     document.write(markup);
//     document.write(1e6);
//     console.log(Math.round(99.2));  // 99 بتقرب للاقل ف  هتبقى 
//     console.log(Math.round(99.5)); // بتقرب للاعلى ف  هتبقى 100
//     console.log(Math.ceil(99.1)); // 100 بتقرب للاعلى بغض النظر عن الرقم العشري
//     console.log(Math.floor(99.1)); // بتقرب للاقل بغض النظر عن الرقم العشري 99
//     console.log(Math.min(30 , 80 , -87 , 3));
//     console.log(Math.max(50 , 60 , 4 , 44));
//     console.log(Math.pow(2 , 2));
//     console.log(Math.floor(Math.random() * 10));
//     console.log(Math.trunc(69.5444));// بيرجع الرقم الصحيح فقط

//     var First = document.getElementById('F');
//     var second = document.getElementById('P');
//     if(First.length == '' && second.length === ''){
//         document.getElementById('test').innerHTML = 'empty';
//     }else{
//         document.getElementById('test').innerHTML = ''
//     }
//     let products = ["mouse","keyboard","printer","camera"];
//     let colors = ["red","green","blue"];
//     let showCount = 3;
     
//        for (let i = 0; i < showCount; i++) {
//         document.write('<div>');
//            document.write(`<h3> [${i+1}] ${products[i]} </h3>`);
//            for (let j = 0; j < colors.length; j++) {
//                    document.write(`<h3 style="color:red;">${colors[j]}</h3>`)
//            }
//            document.write('</div>');
//        }
//        function sayHello(){
//            console.log('sayHello');
//        }
//        sayHello();
//     var showCount = 3
//    function generateYear(userName , age = "invalid input"){
//        return `userName is : ${userName} and age is : ${age}`
//    }
//   console.log(generateYear("islam" )); 
    // function calculate(...numbers){
    //     if(numbers.length > 0){
    //         for(let i = 0 ; i < numbers.length ; i++){
    //            console.log(numbers[i]);
    //         }
    //     }else{
    //              console.log("the length is Zero");
    //     }
    // }
    //  calculate("islam" , "mahmoud");

    // let test = function(){
    //     console.log("hello islam");
    // }
  // document.write("<h1>Hello Js</h1>");
  // document.getElementById("demo").innerHTML = "Hey fuck";
  // var x = 1;
  // var x = 2;
  // console.log(x);
  // var a = [1 ,2 ];
  // console.log(typeof a);
     
  // document.getElementById("event").onmouseleave = function(){
  //    document.getElementById("demo").innerHTML = "hey js";
  // }


  // var inputEl = document.getElementById("input");
  // var btn = document.getElementById("add");
  // var ulEl = document.getElementById("ul");
  // var demo = document.getElementById("demo");
  //  btn.onclick = function(){
  //    var v = inputEl.value;
  //    if(inputEl.value != ''){
  //     ulEl.innerHTML += "<li>" + v +"</li>";
  //     demo.innerHTML = "";
  //    }else{
  //     demo.innerHTML = "enter any thing";
  //   }
  //   }

  // var input_chat = document.getElementById("input_chat");
  // var btn_send = document.getElementById("btn_send");
  // var ul_list = document.getElementById("ul_list");
  // var demo = document.getElementById("demo");
  // var demo2 = document.getElementById("demo2");
  // var chat_box = document.getElementById("chat_box");
  // var all = [];
  // btn_send.addEventListener('click' , addChat);
  // function addChat(){
  //   if(input_chat.value != ''){
  //      var user = {
  //        chat : input_chat.value
  //      }
  //      all.push(user);
  //      drawUI();
  //      emptyInput();
  //   }
  // }
  // addChat();

  // function drawUI(){
  //   ul_list.innerHTML = "";
  //   for(var i = 0 ; i < all.length ; i++){
  //     ul_list.innerHTML += "<li>"  + all[i].chat  +  "</li>";
  //     if(all[i].chat == "how are you"){
  //       demo.innerHTML = "hi sir";
  //     }else if(all[i].chat == "hi bot"){
  //       demo2.innerHTML = "hi sasir";
  //     }
  //   }
  // }
  // function emptyInput(){
  //   input_chat.value = "";
  // }
  
//   let image = document.getElementById('test');
//   let btn = document.getElementById('press');

//   image.onclick = function(){
//     image.classList.toggle('full');
//     btn.value = "small"

// }

let div = document.createElement('div');
let resultAll = document.createElement('div');
let divNumber1 = document.createElement('div');
let divNumber2 = document.createElement('div');
let divNumber3 = document.createElement('div');
let divOperation = document.createElement('div');
let numOne = document.createElement('h1');
let numTwo = document.createElement('h1');
let numThree = document.createElement('h1');
let numFour = document.createElement('h1');
let numFive = document.createElement('h1');
let numSex = document.createElement('h1');
let numSeven = document.createElement('h1')
let numEight = document.createElement('h1')
let numNine = document.createElement('h1')
let increase = document.createElement('button');
let decrease = document.createElement('button');
let Multiply = document.createElement('button');
let divide = document.createElement('button');
let input = document.createElement('input');
let submit = document.createElement('button');
let result = document.createElement('input');
let clear = document.createElement('button');
let clearOne = document.createElement('button');
numOne.innerText = 1;
numTwo.innerText = 2;
numThree.innerText = 3;
numFour.innerText = 4;
numFive.innerText = 5;
numSex.textContent = 6;
numSeven.innerText = 7;
numEight.innerText = 8;
numNine.innerText = 9;
increase.innerText = "+";
decrease.innerText = "-";
Multiply.innerText = "*";
divide.innerText = "/";
clear.innerHTML = "c";
clearOne.textContent = 'x'
submit.innerHTML = 'submit';
div.appendChild(resultAll);
div.appendChild(divNumber1);
div.appendChild(divNumber2);
div.appendChild(divNumber3);
div.appendChild(divOperation);
div.appendChild(numOne);
div.appendChild(numTwo);
div.appendChild(numThree);
divNumber1.appendChild(numOne);
divNumber1.appendChild(numTwo);
divNumber1.appendChild(numThree);
div.appendChild(numFour);
div.appendChild(numFive);
div.appendChild(numSex);
divNumber2.appendChild(numFour);
divNumber2.appendChild(numFive);
divNumber2.appendChild(numSex);
div.appendChild(numSeven);
div.appendChild(numEight);
div.appendChild(numNine);
divNumber3.appendChild(numSeven);
divNumber3.appendChild(numEight);
divNumber3.appendChild(numNine);
div.appendChild(increase);
div.appendChild(decrease);
div.appendChild(Multiply);
div.appendChild(divide);
div.appendChild(clear);
div.appendChild(clearOne);
divOperation.appendChild(increase);
divOperation.appendChild(decrease);
divOperation.appendChild(Multiply);
divOperation.appendChild(divide);
divOperation.appendChild(clear);
divOperation.appendChild(clearOne)
div.appendChild(result);
div.appendChild(input);
div.appendChild(submit);
resultAll.appendChild(input);
resultAll.appendChild(result);
input.setAttribute('type','text');
input.setAttribute('placeholder','enter your equation');
result.setAttribute('placeholder','result is :')
div.style.cssText = "width:300px;margin:auto";
divNumber1.style.cssText = "display:flex;justify-content:space-evenly";
divNumber2.style.cssText = "display:flex;justify-content:space-evenly";
divNumber3.style.cssText = "display:flex;justify-content:space-evenly";
divOperation.style.cssText = "display:flex;justify-content:space-evenly"
numOne.style.cssText = "width:50px;text-align:center;border-radius:8px;background:#7fffd4;color:red;cursor:pointer";
numTwo.style.cssText = "background:blue;width:50px;text-align:center;color:red;border-radius:8px;background:#7fffd4;cursor:pointer";
numThree.style.cssText = "background:blue;width:50px;text-align:center;color:red;border-radius:8px;background:#7fffd4;cursor:pointer";
numFour.style.cssText = "background:blue;width:50px;text-align:center;color:red;border-radius:8px;background:#7fffd4;cursor:pointer";
numFive.style.cssText = "background:blue;width:50px;text-align:center;color:red;border-radius:8px;background:#7fffd4;cursor:pointer";
numSex.style.cssText = "background:blue;width:50px;text-align:center;color:red;border-radius:8px;background:#7fffd4;cursor:pointer";
numSeven.style.cssText = "background:blue;width:50px;text-align:center;color:red;border-radius:8px;background:#7fffd4;cursor:pointer";
numEight.style.cssText = "background:blue;width:50px;text-align:center;color:red;border-radius:8px;background:#7fffd4;cursor:pointer";
numNine.style.cssText = "background:blue;width:50px;text-align:center;color:red;border-radius:8px;background:#7fffd4;cursor:pointer";
increase.style.cssText = "cursor:pointer;padding:8px;border:solid 2px azure;background:coral;width:30px;height:30px";
decrease.style.cssText = "cursor:pointer;padding:8px;border:solid 2px azure;background:coral;width:30px;height:30px";
Multiply.style.cssText = "cursor:pointer;padding:8px;border:solid 2px azure;background:coral;width:30px;height:30px";
divide.style.cssText = "cursor:pointer;padding:8px;border:solid 2px azure;background:coral;width:30px;height:30px";
input.style.cssText = "border:solid 1px #f6f6f6; padding:8px;width:94%;background:lightsteelblue";
result.style.cssText = "border:solid 1px #f6f6f6; padding:8px;width:94%;background:lightsteelblue";
clear.style.cssText = "width:30px;height:30px;cursor:pointer;padding:8px;border:solid 2px azure;background:coral;text-align:center"
submit.style.cssText = "width:88%;float:right;margin:20px;border:solid 1px green;background:#664"
clearOne.style.cssText = "width:30px;height:30px;cursor:pointer;padding:8px;border:solid 2px azure;background:coral;text-align:center"
document.body.appendChild(div);
console.log(div);
numOne.onclick = function(){
  input.value += numOne.innerText
}
numTwo.onclick = function(){
  input.value += numTwo.innerText
}
numThree.onclick = function(){
  input.value += numThree.innerText
}
numFour.onclick = function(){
  input.value += numFour.innerText
}
numFive.onclick = function(){
  input.value += numFive.innerText
}
numSex.onclick = function(){
  input.value += numSex.innerText
}
numSeven.onclick = function(){
  input.value += numSeven.innerText
}
numEight.onclick = function(){
  input.value += numEight.innerText
}
numNine.onclick = function(){
  input.value += numNine.innerText
}
increase.onclick = function(inc){
  inc.value = "+"
  input.value += inc.value
}
decrease.onclick = function(){
  input.value += decrease.textContent
}
Multiply.onclick = function(){
  input.value += Multiply.textContent
}
divide.onclick = function(){
  input.value += divide.textContent
}
clear.onclick = function(){
  input.value = "";
  result.value = "";
}
clearOne.onclick = function(){
  let test = input.value.substring(0 , input.value.length - 1);
   input.value = test;
   console.log(test);
}
submit.onclick = function(){
  if(!input.value){
     result.value = "the field is empty" 
  }else if(isNaN(input.value)){
     result.value = "please enter a number"
  }
  var sum = input.value;
  if(sum){
    result.value = eval(sum);
  }
}
