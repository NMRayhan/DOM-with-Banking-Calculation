const withdrawalInput = document.getElementById('withdrawalAmountInput');
const depositInput = document.getElementById('depositAmountInput');

function deposit() {
    const receiveValue = depositInput.value
    let changeFormula = Math.abs(receiveValue)
    const newDepositAmount = parseFloatConversion(changeFormula);
    depositCalc(newDepositAmount);
    totalAmountCalc('deposit', newDepositAmount);
}

function withdrawal() {
    const receiveValue = withdrawalInput.value;
    let changeFormula = Math.abs(receiveValue)
    const newWithdrawalAmount = parseFloatConversion(changeFormula);
    withdrawalCalc(newWithdrawalAmount);
    totalAmountCalc('withdrawal', newWithdrawalAmount);
}

function parseFloatConversion(number) {
    return parseFloat(number);
}

function depositCalc(amount) {
    const previousDeposit = document.getElementById('depositTotal');
    const previousDepositText = previousDeposit.innerText;
    let newDepositTotal = parseFloatConversion(previousDepositText) + amount;
    previousDeposit.innerText = newDepositTotal;
    depositInput.value = ''
}

function withdrawalCalc(amount) {
    const previousWithdrawal = document.getElementById('withdrawalTotal');
    const previousWithdrawalText = previousWithdrawal.innerText;
    let newWithdrawalTotal = parseFloatConversion(previousWithdrawalText) + amount;
    previousWithdrawal.innerText = newWithdrawalTotal;
    withdrawalInput.value = ''
}

function totalAmountCalc(transType, amount) {
    const previousAmount = document.getElementById('balanceTotal');
    const previousTotalAmount = previousAmount.innerText;
    if (transType == 'withdrawal') {
        let newTotalAmount = parseFloatConversion(previousTotalAmount) - amount;
        previousAmount.innerText = newTotalAmount;
    } else {
        let newTotalAmount = parseFloatConversion(previousTotalAmount) + amount;
        previousAmount.innerText = newTotalAmount;
    }
}