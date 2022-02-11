const withdrawalInput = document.getElementById('withdrawalAmountInput');
const depositInput = document.getElementById('depositAmountInput');
const previousAmount = document.getElementById('balanceTotal');
const previousWithdrawal = document.getElementById('withdrawalTotal');
const previousDeposit = document.getElementById('depositTotal');

function deposit() {
    const receiveValue = depositInput.value
    let changeFormula = Math.abs(receiveValue)
    const newDepositAmount = parseFloatConversion(changeFormula);
    depositCalc(newDepositAmount);
    totalAmountCalc('deposit', newDepositAmount);
}

function withdrawal() {
    const previousAmountText = previousAmount.innerText
    const previousTotal = parseFloatConversion(previousAmountText);
    const receiveValue = withdrawalInput.value;
    let changeFormula = Math.abs(receiveValue)
    const newWithdrawalAmount = parseFloatConversion(changeFormula);
    if(previousTotal >= newWithdrawalAmount){   
        withdrawalCalc(newWithdrawalAmount);
        totalAmountCalc('withdrawal', newWithdrawalAmount);
    }else{
        withdrawalInput.value = ''
        alert("Your Balance is Zero!!!");
    }
}

function parseFloatConversion(number) {
    return parseFloat(number);
}

function depositCalc(amount) {
    const previousDepositText = previousDeposit.innerText;
    let newDepositTotal = parseFloatConversion(previousDepositText) + amount;
    previousDeposit.innerText = newDepositTotal;
    depositInput.value = ''
}

function withdrawalCalc(amount) {
    const previousWithdrawalText = previousWithdrawal.innerText;
    let newWithdrawalTotal = parseFloatConversion(previousWithdrawalText) + amount;
    previousWithdrawal.innerText = newWithdrawalTotal;
    withdrawalInput.value = ''
}

function totalAmountCalc(transType, amount) {
    const previousTotalAmount = previousAmount.innerText;
    if (transType == 'withdrawal') {
        let newTotalAmount = parseFloatConversion(previousTotalAmount) - amount;
        previousAmount.innerText = newTotalAmount;
    } else {
        let newTotalAmount = parseFloatConversion(previousTotalAmount) + amount;
        previousAmount.innerText = newTotalAmount;
    }
}