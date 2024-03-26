// First Import Inquirer From Inquirer 
import inquirer from "inquirer";
let bankbalance = 12000;
let mypin = 2345;
console.log(`Your Current Bank Balance Is ${bankbalance}`);
let mypins = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter Your Pin"
    }]);
if (mypins.pin === mypin) {
    console.log("Correct Pin ");
    let opreationans = await inquirer.prompt([{
            name: "opreation",
            type: "list",
            choices: ["Withdraw", "Check-Balance"]
        }]);
    //    console.log(opreationans)
    if (opreationans.opreation === "Withdraw") {
        let amountanss = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter Your Witdrawl Amount",
            }]);
        // Fast Cash //
        // Using Assingment Substraction Opreator For Decreasing Amount Whenever We Withdrawl //
        // And Using If Else Statement For Checking If Amount Is Gretaer Than Bankbalnce Then Mes
        if (amountanss.amount > bankbalance) {
            console.log("Amount Is Sufficent");
        }
        else {
            bankbalance -= amountanss.amount;
            console.log(`Your Remaining Balanced After Withdrawl - ${bankbalance}`);
        }
    }
    else if (opreationans.opreation === "Check-Balance") {
        console.log(`Your Current BankBalance = ${bankbalance}`); // With Templet Literals )
    }
}
else {
    console.log("Incorrect Pin");
}
;
