let BankAccount = function(acc_no,name,type,bal){
    this.account_no = acc_no;
    this.name = name;
    this.type = type;
    this.balance = bal || 0;
  }
  
  
  let deposite = function(amount){
    this.balance += amount || 0;
  }
  
  
  let withdrawmoney=function(amount){
    if(this.balance>amount){
      this.balance-=amount;
    }
    else{
      console.log("Insufficient Balance");
    }
  }
  
  
  let checkBalance=function(){
    console.log(this.balance);
  }
  
  
  let isActive = function(){
    if(this.balance>0){
      return true;
    }
    else{
      return false;
    }
  }
  
  
  let acc1 = new BankAccount(12345,"raj","saving",1000);
  deposite.call(acc1,500);
  withdrawmoney.call(acc1,200);
  checkBalance.call(acc1);
  console.log(isActive.call(acc1))
  
  
  let acc2 = new BankAccount(54321, "Sandeep", "current", 20000);
  deposite.call(acc2,500);
  withdrawmoney.call(acc2,100);
  checkBalance.call(acc2);
  console.log(isActive.call(acc2))
  
  
  let acc3 = new BankAccount(98765, "Roshan", "current", 1000);
  deposite.call(acc3,500);
  withdrawmoney.call(acc3,200);
  checkBalance.call(acc3);
  console.log(isActive.call(acc3))
  
  
  let acc4 = new BankAccount(12765, "Viraj", "saving", 0);
  deposite.call(acc4,0);
  withdrawmoney.call(acc4,200);
  checkBalance.call(acc4);
  console.log(isActive.call(acc4));
  
  
  
  
  let activeAccountsTotal = [acc1, acc2, acc4, acc3].reduce((total, acc) => {
    if (isActive.call(acc)) {
      return total + acc.balance;
    } else {
      return total;
    }
  }, 0);
  
  console.log(activeAccountsTotal);
  