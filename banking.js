// event handler of Deposit 
document.getElementById('depositBtn').addEventListener('click', function () {

    // get the amount of deposit input field
    const depositInput = document.getElementById('depositAmountInput');
    const receiveValue = depositInput.value
    let changeFormula = Math.abs(receiveValue)
    const newDepositAmount = changeFormula;

    //get the amount of deposit total and set deposit total
    const previousDeposit = document.getElementById('depositTotal');
    const previousDepositAmount = previousDeposit.innerText;
    let newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    previousDeposit.innerText = newDepositTotal;
    depositInput.value = ''

    //get the total Amount and set new Total amount
    const previousAmount = document.getElementById('balanceTotal');
    const previousTotalAmount = previousAmount.innerText;
    let newTotalAmount = parseFloat(previousTotalAmount) + parseFloat(newDepositAmount);
    previousAmount.innerText = newTotalAmount;
})

//event handler of withdrawal
document.getElementById('withdrawalBtn').addEventListener('click', function(){
    // get the amount of withdrawal input field
    const withdrawalInput = document.getElementById('withdrawalAmountInput');
    const receiveValue = withdrawalInput.value;
    let changeFormula = Math.abs(receiveValue)
    const newWithdrawalAmount = changeFormula;

    //get the amount of withdrawal total and set withdrawal total
    const previousWithdrawal = document.getElementById('withdrawalTotal');
    const previousWithdrawalAmount = previousWithdrawal.innerText;
    let newWithdrawalTotal = parseFloat(previousWithdrawalAmount) + parseFloat(newWithdrawalAmount);
    previousWithdrawal.innerText = newWithdrawalTotal;
    withdrawalInput.value = ''

    //get the total Amount and set new Total amount
    const previousAmount = document.getElementById('balanceTotal');
    const previousTotalAmount = previousAmount.innerText;
    let newTotalAmount = parseFloat(previousTotalAmount) - parseFloat(newWithdrawalAmount);
    previousAmount.innerText = newTotalAmount;
})