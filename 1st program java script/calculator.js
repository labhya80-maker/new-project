//Arithmetic Operators
//let a=5;
//let b=2;
/*console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);*/

//Unary Operator
//let a =5;
//let b =2;

//console.log("a=", a," & b =",b);
//console.log("a-- =",a--);
//console.log("a=",a);

//Assignment Operators

//let a =5;
//let b =2;

//a -= 4; //a= a+4
//console.log("a=",a);

//for our comparison operators
//let a = 5;
//let b = 2;

//console.log("a!=a",a!=a);

//Logical Operator
//let a = 5;
//let b = 2;

//let cond1 = a>b;
//let cond2 = a===6;
//console.log("cond1 && cond2",cond1 && cond2);

//conditional statements

/*let age =25;

if(age>18) {
    console.log("you can vote");

}*/
 /*let age=18;
let mode= "Light";
let color;

if(mode==="Dark"){
    color="Black";
}

if(mode==="Light"){
    color="White";
}

console.log(color);*/

// odd or even

/*let num=10;

if(num%2===0){
    console.log(num,"is even");
}
else{
    console.log(odd);
}*/

/*let marks = Number(prompt("Enter the students's marks"));
let totalMarks = Number(prompt("Enter total marks"));

console.log(marks);
console.log(totalMarks);

let percentage = (marks/totalMarks) * 100;


let grade="A";

if(percentage>100){
    grade="enter a valid number";
}
else if(percentage >= 80 && percentage <= 100){
    grade="A+";
}
else if(percentage >= 60 && percentage < 80){
    grade="A";
}
else if(percentage >= 40 && percentage < 60){
    grade="B";
}
else if (percentage >=20 && percentage < 40){
    grade="c"
}
else{
    grade="Fail";
}
console.log(grade);

alert("Percentage: " + percentage + "%");
console.log("Percentage=" + percentage + "%");

percentage >= 35 && percentage < 60

pecentage >= 60 && percentage < 80

pecentage >=80 && percentage < 90

percentage >= 90 && percentage <=100*/

// create a code wher u have u check wheather the num is multiple of 5 or not 

/*let num= prompt("Enter a number:");
if( num%5===0){
    console.log(num,"is multiple of 5");
}else{
    console.log(num,"is NOT a multiple of 5");*/

    // write a code which can give grade to students according to score

    /*let score= Number(prompt("Enter your score"));
    let grade;
    console.log(score);

    if (score>=90 && score<=100){
        grade="A";
    }
    else if
        (score>=70 && score<=89){
             grade="B";
        }
    else if
        (score>=60 && score<=69){
            grade="C";
        }
        else if
        (score>=50 && score<=59){
          grade="D";
        }
        else if
        (score>=0 && score<=49){
             grade="F";
        }
        console.log("according to your score,your score was:",grade);*/

        // for LOOP

        //for(let i=1; i<=5; i++){
          //  console.log("i=",i);
        //}
        //console.log("loop has ended");
        

        //calculate sum of first n numbers

       /* let sum=0
        for(let i=1;i<=100;i++){
            sum=sum+i;
        }
        console.log("sum=",sum);
        console.log("loop has ended");*/


// WHILE LOOP

/*let i=1;
while(i<=5){
    console.log("=",i);
    i++;
}*/

/*let str="javascript";
let size=0;

for(let i of str)
{ console.log("i=",i);
    size++;
}
console.log("string size=",size);*/

//for(let i=10;i>=1;i--){
  //  console.log("i=",i);
//}
//let i=10;
//while(i>=1){
  //  console.log("i=",i);
    //i--;
//}

/*let i =10;
do{
    console.log("i=",i);
    i--;
}
while(i>=1);*/

/*let student={
    name:"Rahul Kumar",
    age:27,
    cgpa:7.6,
    ispass:true,
};
for(let key in student){
console.log("key=",key,"value=",student[key]);
}*/

/*for(let i=0;i<=100;i++){
    if(i%2!==0){
    console.log("i=",i);}
    }*/

  /*  let gameNum = 30;
    let userNum =  prompt("Guess the gameNum:");

    while(userNum != gameNum){
        userNum = prompt("You entered wrong number, Guess again:");
    }
 console.log("Congratulations you entered the right number");*/

 //ARRAY

 //let marks=[22,23,56,14,45];
 //console.log("marks=",marks);

 //looping over an array

 /*let heroes=["ironman","antman","spiderman","hulk","thor","shaktiman"];

 for(let idx=0; idx<heroes.length; idx++){
    console.log(heroes[idx]);
 }*/

    //FUNCTIONS

    /*function myFunction() {
        console.log("Hi my name is java");
        console.log("how are you");
    }
myFunction();*/

/*function myFunction(msg){
    console.log(msg);
}
myFunction("I love JS");

//sum of 2 numbers

function sum( a,b){
    console.log(a+b);
}*/

//CREATE A CALCULATOR 

/* let num1= Number(prompt("Enter the First Number"));
 let num2= Number(prompt("Enter the Second Number"));

 console.log("First Number=",num1);
 console.log("Second Number=",num2);

 let choice= prompt("Choose an operation:\n+ for Addition\n- for Substract\n* for Multiply\n/ for Devide");

 console.log("operation",choice)

 let result;

 switch(choice){
    case "+":
        result=num1+num2;
        console.log("Result=",result);
        break;

        case"-":
        result=num1-num2;
        console.log("Result=",result);
        break;

        case"*":
        result=num1*num2;
        console.log("Result=",result);
        break;


        case"/":
        switch(check){
            case"1":
            num2!==0;
            result=num1/num2;
            console.log("Result=",result);
            break;

            default:
                result="Invalid Operation";
                console.log("Result=",result);
         }
        
        default:
            result="Invalid operation";
            console.log("Result=",result);

        }
        alert("Result=" +result);*/
 



//  write a program to reverse an array 

//const array = [1,2,3,4,5,6.7];

//for(let i=10;i<=1;i--){
//console.log("i=",i);
//}

//function myFunction(a,b){
   // console.log("Hello World");
//}

//myFunction(77);

// reacte a 5 table using loop

//print number 1 to 10

//for(let i=1;i<=10;i++){
  //  console.log("i=",i);
//}

// print from 10 to 1

//for(let i=10;i>=1;i--){
  //  console.log("i=",i);
//}

/*for(let i=2;i<=50;i++){
    if(i%2===0){
    console.log("i=",i);
}
}*/
 /*for(let i=1;i<=49;i++){
    if(i%2!==0){
        console.log("i=",i);
    }
 }*/

 /*let sum=0;

 for(let i=1;i<=100;i++){
    sum=sum+i;
    console.log("sum=",sum);
 }*/

/* let n=100;
 let sum=(n*(n+1))/2;
 console.log("sum=",sum);*/

/* let value= Number(prompt("Enter the Number!"))

 for(let i=1;i<=10;i++){
    console.log(value+"x"+i+"="+(value*i));
 }*/
    
 /*let count=0;
 for(let i=1;i<=50;i++){
count++;
 }
 console.log("Total Number=",count);*/


 




























































































































































































































































































































































































































 