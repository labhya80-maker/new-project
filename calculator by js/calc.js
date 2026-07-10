
let expression="";
let display=document.getElementById("inputBox");


function pressNumber(num){
        expression += num;
        display.value= expression; 
 
}

function pressOperator(op){

  if(op==="(" && expression!==""){
    let lastChar= expression[expression.length -1];

    if(!isNaN(lastChar)|| lastChar === ")"){
      expression += "*";
    }
  }
      
        expression += op;
        display.value=expression;
    }
function calculate(){

  // console.log(expression);

 if( expression ==""){
    return;
  }

  
  let answer= eval(expression);
  display.value=answer;
  expression=answer.toString();
  
  }
  


function deleteLast(){
   expression= expression.slice(0,-1);
   display.value=expression;
}

function clearDisplay(){
    expression="";
     display.value="";
}

