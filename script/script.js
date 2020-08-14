
  document.oninput = function () {
    var input = document.querySelector(".input__lenght");
    input.value = input.value.replace(/[^\+\d\.]/g, "");
  
    var input = document.querySelector(".input__height");
    input.value = input.value.replace(/[^\+\d\.]/g, "");

    var input = document.getElementById("tel");
    input.value = input.value.replace(/[^\+\d\+]/g, "");
  };
  
  
  function sumQuad() {
    let num1 = document.getElementById('lenght').value;
    let num2 = document.getElementById('height').value;
    let fond = document.getElementById("select").value;
    let fond2= Number(fond) + 200;
    if (document.getElementById("check").checked) {
      let sum = num1 * num2 * fond2;
      let el = document.getElementById('sum');
      el.innerHTML = sum; 
       }else{let sum = num1 * num2 * fond;
      let el = document.getElementById('sum');
      el.innerHTML = sum;}   
    function greenPLen(){
        let elem = document.getElementById('elem');
        let len = document.getElementById('lenght');
        if (len.value !=='')
            {
              elem.classList.add("box");
            }else{elem.classList.remove("box");}
        }
    greenPLen();
    function greenPHi(){
        let elem2 = document.getElementById('elem2');
        let hi = document.getElementById('height');
        if (hi.value !==''){
            elem2.classList.add("box");
        }else{elem2.classList.remove("box");}
       }
    greenPHi()

    function but(){
      if(document.getElementById('lenght').value ==''&& document.getElementById('height').value==''){
        document.getElementById("button").disabled=true;
        let bt = document.querySelector('#button');
        bt.classList.add("button");
        bt.classList.remove("button_2");
      }else if(document.getElementById('lenght').value ==''|| document.getElementById('height').value==''){
        document.getElementById("button").disabled=true;
        let bt = document.querySelector('#button');
        bt.classList.ad("button");
        bt.classList.remove("button_2");}else{
        document.getElementById("button").disabled=false;
        let bt = document.querySelector('#button');
        bt.classList.remove("button");
        bt.classList.add("button_2");
      }
    }
    but();
  }
  function checkOn(){
    let num1 = document.getElementById('lenght').value;
      let num2 = document.getElementById('lenght').value;
      let fond = document.getElementById("select").value;
      let fond2= Number(fond) + 200;
    if (document.getElementById("check").checked) {
      let sum = num1 * num2 * fond2;
      let el = document.getElementById('sum');
      el.innerHTML = sum; 
      }else{sumQuad()}
    }
 
  
var rect = document.getElementById("lenght");
var rect1 = document.getElementById("height");
var rect2 = document.getElementById("select");
var rect3 = document.getElementById("check");

 
rect.addEventListener("keyup", sumQuad);
rect1.addEventListener("keyup", sumQuad)
rect2.addEventListener("mouseout", checkOn);
rect3.addEventListener("click", sumQuad);



function nextForm(){
  let changeForm = document.getElementById("form_1");
  let changeForm2= document.getElementById("form_2");
  changeForm2.style="display: block";
  changeForm.style.display = "none";
  let lng = document.getElementById("lenght").value;
  let hgh = document.getElementById("height").value;
  let matr = document.getElementById("select").value;
  function getNoun(number, one='метр', two='метра', five='метров') {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };
  document.getElementById("lenght__fence").innerHTML= ('длиной ' + lng + getNoun(lng));
  document.getElementById("height__fence").innerHTML= ('высотой ' + hgh + getNoun(hgh));
  if(matr==400){document.getElementById("select__mt").innerHTML=('Профнастил');
  }else if(matr==500){document.getElementById("select__mt").innerHTML=('Модули');
  }else if(matr==700){document.getElementById("select__mt").innerHTML=('Бетон');
  }else{document.getElementById("select__mt").innerHTML=(' Сетка')};
  function insSum(value1,value2,value3){
    if (value1 && value2 && value3) {
      const num = value1 * value2;
      return document.getElementById("check").checked ? num * (Number(value3) + 200) : num * value3;
    } else {
      console.log(`something going wrong`);
    }
  };
  document.getElementById("cash").innerHTML = insSum(lng, hgh,matr);
  
};


function greenGeneral(){
  let elem3 = document.getElementById('elem3');
  let obj3 = document.getElementById("_name");
  let elem4 = document.getElementById('elem4');
  let obj4 = document.getElementById("_email");
  let elem5 = document.getElementById('elem5');
  let obj5 = document.getElementById("tel");

  function greenO(id1,val){
    if (val.value !== ''){id1.classList.add("box_2")}
    else if(val.value == '') {
    id1.classList.remove("box_2");
  	} 
	};

  greenO(elem3, obj3);
  greenO(elem4, obj4);
  greenO(elem5, obj5);

  let name1=document.getElementById("_name");
let email1=document.getElementById("_email");
let tele=document.getElementById("tel");
let valu=document.getElementById("send_button");
function but(){
      if(name1.value ==''&& email1.value==''&& tel.value ==''){
        valu.disabled=true;
        valu.classList.add("send_button");
       valu.classList.remove("send_button2");
      }else if(name1.value ==''|| email1.value==''|| tele.value ==''){
        valu.disabled=true;
        valu.classList.ad("send_button");
       valu.classList.remove("send_button2");}else{
        valu.disabled=false;
        valu.classList.remove("send_button");
       valu.classList.add("send_button2");
      }
    }
    but();

};

let rect4 = document.getElementById("_name");
let rect5 = document.getElementById("_email");
let rect6 = document.getElementById("tel");
rect4.addEventListener("keyup", greenGeneral);
rect5.addEventListener("keyup", greenGeneral);
rect6.addEventListener("keyup", greenGeneral);