import inquirer from 'inquirer';

let answer :{
    num1 :number;
    num2 :number;
    operator :string;
}
= await inquirer.prompt([
    {
        name :"num1",
        type :"number",
        message:"select your first number",
    },

    {
        name :"num2",
        type :"number",
        message:"select your second number",
    },

    {
        name :"operator",
        type :"list",
        choices:["addition(+)","subtraction(-)","multiplication(*)","division(/)"],
        message:"select your operator",
    }
])

const {num1, num2, operator,} = answer;

if (num1 !== undefined && num2 !== undefined && operator !== undefined){
    let result :number = 0;

    if(operator === "addition(+)"){
        result = num1 + num2
    }

    else if (operator === "subtraction(-)"){
        result = num1 - num2
    }
    else if (operator === "multiplication(*)"){
        result = num1 * num2
    }
    else if (operator === "division(/)"){
        result = num1 / num2
    }

    console.log("great your result is :", result);
}else{
    console.log("oops enter valid number and select operator")
}

