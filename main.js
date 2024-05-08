#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Random Number
console.log(chalk.cyan.bold.underline("\t\n Welcome Student Managment Sytem \t\n"));
const ranNum = Math.floor(1000 + Math.random() * 90000);
let myBlance = 0;
let answer = await inquirer.prompt([
    {
        name: "Student",
        type: "input",
        message: chalk.blue.bold("Enter Student Name"),
        validate: function (useful) {
            if (useful.trim() !== "") {
                return true;
            }
            return "Kindly input a non-zero value.";
        },
    },
    {
        name: "Courses",
        type: "list",
        message: chalk.blue.bold("Choose the Course to get enrolled in"),
        choices: [
            "Typescript & Javasript",
            "Phython",
            "HTML",
            "CSS",
            "Graphic designing",
        ],
    },
]);
const CourseFee = {
    "Typescript & Javasript": 10000,
    Phython: 20000,
    HTML: 5500,
    CSS: 5500,
    "Graphic designing": 4000,
};
console.log(chalk.yellow.bold.overline(`\t\n Course Fee: ${CourseFee[answer.Courses]}\t\n`));
console.log(chalk.redBright(`\t\n your Balance: ${myBlance} \t\n`));
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: chalk.blue.bold("Select payment method"),
        choices: ["Easypaisa", "jazzcash", "Bank Transfer"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.blue.bold("Transfer Money"),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter anon empty balance value";
        },
    },
]);
console.log(chalk.red.bold(`\t\n You Select payment method ${paymentType.payment}\t\n`));
const CourseFees = CourseFee[answer.Courses];
const paymentAmount = parseFloat(paymentType.amount);
if (CourseFees === paymentAmount) {
    console.log(chalk.green.bold.italic(`Congratilation you have Successfully enrolled in ${answer.Courses}`));
    let ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: "What would you Like to do next ?",
            choices: ["View Status", "Exit"],
        },
    ]);
    if (ans.Select === "View Status") {
        console.log(chalk.yellow.bold(`___status___`));
        console.log(chalk.magenta.bold.underline(`Student Name: ${answer.Student}`));
        console.log(chalk.magenta.bold.underline(`Student ID: ${ranNum}`));
        console.log(chalk.magenta.bold.underline(`Course: ${answer.Courses}`));
        console.log(chalk.magenta.bold.underline(`Course Fee Paid: ${paymentAmount}`));
        console.log(chalk.magenta.bold.underline(`Balance ${(myBlance += paymentAmount)}`));
    }
    else {
        console.log(`Exiting Student Management System`);
    }
}
else {
    console.log(chalk.redBright.bold("Invalid amount due to course"));
}
