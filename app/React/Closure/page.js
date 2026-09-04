const Closure = function(){
    const closerFunction=function(){
    let balance=1000;

    function checkBalance(){
        console.log(`Your Current Balance is ${balance}` )
    }

    function depositeBalance(depositedAmount){
       let newAmount=balance+depositedAmount;
       balance=newAmount;
       console.log(`Your Previous Balance was ${balance} and After Depositing ${depositedAmount} new balance is ${newAmount} `)
    }

    return {
        checkBalance,depositeBalance
    }
} 

let account=new closerFunction();

account.checkBalance();
account.depositeBalance(580);
// account.checkBalance();
}

export default Closure;