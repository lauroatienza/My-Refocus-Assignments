let balance = 0;

function createBankAccount(name,transact,amount, callback){
    console.log(name + " account has a current balance of " + balance + " and will "+ transact +".");

    callback(name,transact,amount)
}

function transactFunction(name,transact,amount){
    if (transact == "deposit") {    
        balance = balance + amount;
        console.log("Your new balance after deposit is " + balance);

    }else if (transact == "widraw" && balance >= amount) {
        balance = balance - amount;
        console.log("Your new balance after widraw is " + balance);
    }else {
        console.log("Transaction failed");
    }
}

createBankAccount("Ruth","widraw",10000,transactFunction);