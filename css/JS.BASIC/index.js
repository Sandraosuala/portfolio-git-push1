/* /*  */// alert('from exte

/* let username; 
 let pass  = 0;
 let passTry = 3;
 let currentBalance = 40000;

//  validate account
function validateAccount () {
    let banks = [" Opay","Citybank","fcmb","fidelity"];
    // prompt the user to enter their account number
    let accountNumber = prompt("Enter your account number:");
   // prompt the user to select their bank
     let bankIndex = prompt(" select your bank; \n 0. Opay \n 1. citybank \n 2. fcmb \n 3. fidelity");
     let bankName =banks[bankIndex];
   // validate the account number and bank selection
     if (accountNumber ==="1234567890"){
        alert("account valid!");
    } else {
        alert("invalid account number or bank selection!");
    }
}

//Input a username
function atmMachineUsername() {
    username = prompt ("Enter your name");
    if (username !== "" && username !== null) {
        atmMachinePassword();
    } else {
        atmMachineUsername();
    }
}
//Input a vaild password
function atmMachinePassword(){
    let pswEntry = parseInt(prompt("Dear " + username + ", enter your 4 digit PIN"));
    checkPassword(pswEntry);
}

//VerifyPasssword meet requirements
function checkPassword(userInput) {
    if (correct_pass.test(userInput)){
        selectAccountType();
    }else{
        while (!(correct_pass.test(userInput))) {
            if (passTry === 1) {
               alert("Incorrect PIN.");
                alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support.");
            exit();
            break;
          } else {
            passTry -= 1;
            alert("Incorrect PIN.Please try again.");
            alert("You have" + passTry + " chance/s to try");
            atmMachinePassword();
          }
        }
    }
}

// Select Which account type to use
function selectAccountType() {
    let accountType = parseInt(prompt("Which type of account do you have? \n 1.Savings \n 2. Current \n 3. Credit"));
    if (accountType !== "" && accountType !== null && !isNaN(accountType)) {
        selectFunction();
    } else {
        alert("Please make a valid selection");
        selectAccountType();
    }
}


// Select What user wishes to do
function selectFunction() {
    let atmFunctions = parseInt(prompt("Hello" + username + " , what can we do for you today? \n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Transfer \n 5. Exit"));
     if (atmFunction !== "" && atmFunctions !== null && !isNaN(atmFunctions)) {
        switch (atmFunctions) {
            case 1:
                inquiry();
                break;
            case 2:
                withdrawal();
                break;
            case 3:
                deposit();
                break;
            case 4:
                exit() ;
                break;
            case 5:
                transfer();
                break;  
            default:
                alert("Please make a valid selection") ;
                selectFunction(); 
            }
     } else {
             alert("Please make a valid selection");
              selectFunction();
    }
}
 // Inquiry
 function Inquiry(){
    alert("Your current balance is $" + currentBalance);
    toContinue();
}
// Deposit 
function deposit() {
    let depositAmount = parseInt(prompt("How much do you want to deposit?"));
    if(depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
        currentBalance += depositAmount;
        alert("You have sucessfully deposited $" + depositAmount + "/n" + " You now have $" + currentBalance);
        toContinue();
    } else {
        alert("Error: please enter a number!");
        deposit();
    }
}
// transfer
function transfer(){
    let transferAmount = parseInt(prompt("Enter the amount to transfer"));
    let recipentAccount = prompt("Enter the recipent's account number");
    if (transferAmount !== "" && transferAmount !== null && !isNaN(transferAmount)) {
        if(transferAmount >0 && transferAmount) {
        currentBalance -= transferAmount;
        alert("Transfer successful! $" + transferAmount + "has been transferred to account" + recipentAccount);
        toContinue();
    } else {
        alert("Insufficient funds or invalid transfer amount!");
        transfer();
    }
 }  else {
        alert("Please enter a valid amount!");
        transfer();
    }
}
    // Withdrawal
function withdrawal() {
    let withdrawalAmount = parseInt(prompt("How much do you want to withdrawa? \n" + "The minimum amount you can withdraw is $1000"));
    if(withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
        if (withdrawalAmount >= 1000) {
            if(withdrawalAmount <= currentBalance) {
            currentBalance -= withdrawalAmount;
            alert("Transaction successful!");
            alert("Your remaining balance is $"  + currentBalance);
            toContinue();
        } else {
            alert("You do not have sufficient funds!");
            withdrawal();
        }
    } else {
        alert("You must withdrawa at least $1000");
        withdrawal();
    }
    } else {  
       alert("Error: please enter a number!");    
       withdrawal();
}
}
// Does the user wishes to continue using the ATM
function toContinue(){
    let yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
    if ( yesOrNo !== "" && yesOrNo !== null) {
        if (yesOrNo === 2){
            exit();
        }
        else{
            selectAccountType();
        }
    } else {
        alert("Please make a valid selection");
        toContinue();
    }
}
// Exit the ATM
function exit() {
    alert("Thanks for patronising my ATM machine");

}
setInterval(function() {
validateAccount();
 Inquiry();
 deposit();
 transfer();
 withdrawal();
 toContinue();
},1000);

 */



/* }

function displayMenu(){
    console.log("select an option:");
    console.log("(1) transfer");
    console.log("(2) exit");
,let option = prompt("enter your option (1/2):");
  switch (option) {
            case "1":
                transfer();
                break;
            case "2":
                exit() ;
                break; 
            default:
                console.log("invalid option.Try again.");
                displayMenu(); 
}
}
function transfer() {
    let transferAccountNumber = prompt("enter transfer account number:");
    let amount = parseFloat(prompt("enter amount to transfer:"));
    if (amount > 0 && amount <= balance) {
        balance -= amount ;
        console.log(`Transfer successful. New balance: $$ {balance}`);
        console.log(`Transfer to account number: $ {transferAccountNumber}`);
        toContinue();
    } else {
        console.log("invalid amount.Try again.");
        transfer();
    }
}
function toContinue(){
    let response = prompt("Do you want to continue? /n 1. yes /n 2.no");
    if (response ==="yes" ) {
        displayMenu();
} else {
    exit();
}
}
function exit(){
console.log("Thanks for using my atm machine!");
}

  insertCard();
  displayMenu();ansfer(); */


/* let accounts = [
     { accountccountNumber: "1234567890", accountHolder: " sandra", balance: 4000},
    { accountNumber: "9876543210", accountHolder: "sandra philip", balance: 2000}
];
let currentAccount;

function insertCard(){
    let cardNumber = prompt("Insert you card number:");
    currentAccount = accounts.find(account => account.accountNumber === cardNumber);
    if(currentAccount) {
        alert(`welcome, $ {currentAccount.accountHolder}!`)
    mainMenu();
} else {
    alert(" invalid card number .please try again.");
    insertCard();
}
}
function mainMenu(){
    let option = prompt("select an option: (1) transferMoney (2) Withdrawal (3) Exit");
    switch (option) {
        case "1":
            transferMoney();
            break;
            case "2":
            withdrawal();
            break;
            case "3":
            alert("Exiting appllication.");
            break;
            default:
            alert("invalid option.please try again.");
             mainMenu();
    }
}
function transferMoney() {
    let toAccountNumber = prompt("enter the recipient account number:");
    let toAcount = accounts.find(account => account.accountNumber === toAccountNumber);
    if(toAcount){
        let amount = parseFloat(prompt("enter the transfer amount:"));
        if(amount > 0 && amount <= currentAccount.balance){
            let confirmTransfer = confirm(`confirm transfer of $${amount} from ${currentAccount.accountHolder} to ${toAcount.accountHolder}?`);
            if (confirmTransfer){
                currentAccount.balance -= amount;
                toAcount.balance += amount;
                alert(`transfer successful! New balance: $${currentAccount.balance} (your account) and $${toAcount.balance} (recipient account)`);
                mainMenu();
            } else {
                alert("transfer cancelled.");
            }
        } else{
            alert("invaild transfer amount.please try again")
            transferMoney();
        }
    } else {
        alert("recipent account not found.")
        transferMoney();
    }
    }
     function checkBalance(){
        alert(` your current balance is: $${currentAccount.balance} `);
     }
     insertCard();
     
 */
let cardInserted = false;
let insertedCard = prompt("Insert your card?(yes/no)");
let cardInfo = "sandra";
if(insertedCard){
    cardInserted = true;
    alert("card inserted successfully!");
    alert("Welcome"  +  " "  + cardInfo);
    // enterPIN();
} else {
    alert("card not inserted.exiting.")
}
let cardUser = {
    name:"sandra",
    bank:"access",
    balance:"500000",
    pin:7777,
    type:"savings",
}
function enterPIN(){
    if (cardInserted) {
        cardInserted = true;
        let pin = prompt("Enter your pin:");
        if (pin) {
            alert("Pin entered successfully!");
            mainMenu();
        } else {
            alert("Please enter your pin.");
        }
        }
    }
function mainMenu(){
    let option = prompt("Select an option: (1) Transfer (2) Withdraw (3) Exit");
    switch (option) {
        case "1":
            break;
        case"2":
            break;
        case"3":
            alert("Exiting application.");
            break;
        default:
            alert("Invalid option.Please try again.");
            mainMenu();
   }
 }
 let recipentInfo =  {
    recipientName:"micheal",
    bank:"uba",
    balance:"20000",
    pin:7777,
    type:"savings",
    recipientAcccounNumber:"121212121212",
 }
 
 function transfer(){
    let recipentName = prompt("Enter recipient's account name:");
    let recipentAccount = prompt("Enter recipient's account number:");
    let transferAmount = prompt("Enter transfer amount:");
    let confirmTransfer = prompt(`Confirm transfer of $${transferAmount} to ${recipentName} (${recipentAccount})? (yes/no)`);

    if (confirmTransfer === "yes"){
        alert("Transfer successful!");
        mainMenu();
    } else if (confirmTransfer === "no"){
        alert("Transfer cancelled.");
        mainMenu();
   } else {
    alert("Invalid input.Please enter yes or no.");
   }
    }



enterPIN();
mainMenu();
transfer();