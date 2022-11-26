//Object and Function exercise

// Object declaration
const bankAccount = {};

const userAccount = [{
   "bankAccount":{
         "bankAccountID": 1111,
         "accountNumber": 1111,
         "credentials": ["Ponciano","password1","1111"],
         "balance": 1000,
         "createdAt": 10/14/01,
      },
   "debitCard": 1111,
   "firstName": "Ponciano",
   "lastName": "Velasco",
   "birthDate": 10/14/01,
   "validID": 1234,
   "address": "address"
   
},{
   "bankAccount":{
      "bankAccountID": 2222,
      "accountNumber": 2222,
      "credentials": ["Corazon","password2","2222"],
      "balance": 1000,
      "createdAt": 10/14/01,
   },
   "debitCard": 2222,
   "firstName": "Corazon",
   "lastName": "Manalo",
   "birthDate": 10/14/01,
   "validID": 1234,
   "address": "address"

}];


function getBankAccountDetails (username,password) {
   for (accountDetails of userAccount){
      if (username == accountDetails.bankAccount.credentials[0] && password==accountDetails.bankAccount.credentials[1]){
         console.log("Account detail found!");
         console.log("Full name: " + accountDetails.firstName + " " + accountDetails.lastName);
         console.log("Bank Account ID: " + accountDetails.bankAccount.bankAccountID);
         console.log("Account Number: " + accountDetails.bankAccount.accountNumber);
         console.log("Account Balance: " + accountDetails.bankAccount.balance);
         break;
      } else {
         console.log("Username and Password Incorrect");
         break;
      }
   };
}

function withdrawMoney (username,password,accountNum,widrawAmount){
   for (accountDetails of userAccount){
      if (username == accountDetails.bankAccount.credentials[0] && password == accountDetails.bankAccount.credentials[1] && accountNum == accountDetails.bankAccount.accountNumber){
         console.log("Account detail found and Account Number Matched!");
         console.log("Account Balance: " + accountDetails.bankAccount.balance);
         console.log("Amount to Widraw: " + widrawAmount);
         break;
      } else {
         console.log("Username and Password Incorrect!");
         break;
      }
   };

}

function depositMoney (accountNum,depositAmount) {
   for (accountDetails of userAccount){
      if (accountNum == accountDetails.bankAccount.accountNumber){
         console.log("Account Number Matched!");
         console.log("Account Balance: " + accountDetails.bankAccount.balance);
         console.log("Amount to deposit: " + depositAmount);
         break;
      } else {
         console.log("Account Number Incorrect!");
         break;
      }
   };
}

getBankAccountDetails("Ponciano","password1");
console.log("___________________________");

withdrawMoney("Ponciano","password1",1111,100);
console.log("___________________________");

depositMoney(1111,200);
console.log("___________________________");

