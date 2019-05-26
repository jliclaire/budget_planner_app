//INCOME

document.getElementById('income-save').addEventListener('click', saveIncome);

function addIncomeAmount() {
  let incomeAmount = 0;
  incomeAmount = document.querySelector('#income-amount').value;
  document.querySelector('#income-amount').value = null;
  return Number(incomeAmount);
}

function getIncomeType() {
  let incomeType = '';
  incomeType = document.querySelector('#income-category').value;
  document.querySelector('#income-category').value = "Select";
  return incomeType;
}

const incomeTransactions = [];

function displayIncomeTransaction(arr) {
  let incomeDisplayRow = document.getElementById('income-display-row');
  incomeDisplayRow.innerHTML = '';
  arr.forEach(obj => {
    let newIncomeRow = document.createElement('div');
    newIncomeRow.className = 'summary-row';

    let newIncomeType = document.createElement('div');
    newIncomeType.className = 'income-sum-type';
    newIncomeType.innerHTML = obj.type;

    let newIncomeAmount = document.createElement('div');
    newIncomeAmount.className = 'income-sum-amount';
    newIncomeAmount.innerHTML = obj.amount;

    newIncomeRow.appendChild(newIncomeType);
    newIncomeRow.appendChild(newIncomeAmount);

    incomeDisplayRow.appendChild(newIncomeRow);
  })
}

function displayIncomeTotal(arr) {
  const incomeTotal = arr.reduce((acc, currentValue) => acc + currentValue.amount, 0)
  document.getElementById('income-total').innerHTML = incomeTotal;
  return incomeTotal;
}

function saveIncome(e) {
  e.preventDefault();
  let amount = addIncomeAmount();
  let type = getIncomeType()
  incomeTransactions.push({
    amount: amount,
    type: type
  });
  displayIncomeTransaction(incomeTransactions);
  displayIncomeTotal(incomeTransactions);

  calculateBalanceTotal(incomeTransactions, expenseTransactions);
}

//EXPENSE

document.getElementById('exp-save').addEventListener('click', saveExpense);

function addExpenseAmount() {
  let expenseAmount = 0;
  expenseAmount = document.querySelector('#exp-amount').value;
  document.querySelector('#exp-amount').value = null;
  return Number(expenseAmount);
}

function getExpenseType() {
  let expenseType = document.querySelector('#exp-category').value;
  document.querySelector('#exp-category').value = 'Select';
  return expenseType;
}

const expenseTransactions = [];

function displayExpenseTransaction(arr) {
  let expenseDisplayRow = document.getElementById('expense-display-row');
  expenseDisplayRow.innerHTML = '';

  arr.forEach(obj => {
    let newExpenseRow = document.createElement('div');
    newExpenseRow.className = 'summary-row';

    let newExpenseType = document.createElement('div');
    newExpenseType.className = 'expense-sum-type';
    newExpenseType.innerHTML = obj.type;

    let newExpenseAmount = document.createElement('div');
    newExpenseAmount.className = 'expense-sum-amount';
    newExpenseAmount.innerHTML = obj.amount;

    newExpenseRow.appendChild(newExpenseType);
    newExpenseRow.appendChild(newExpenseAmount);

    expenseDisplayRow.appendChild(newExpenseRow);
  })
}

function displayExpenseTotal(arr) {
  const expenseTotal = arr.reduce((acc, currentValue) => acc + currentValue.amount, 0);
  document.getElementById('expense-total').innerHTML = expenseTotal;
  return expenseTotal;
}

function saveExpense(e) {
  e.preventDefault();
  let amount = addExpenseAmount();
  let type = getExpenseType()
  expenseTransactions.push({
    amount: amount,
    type: type
  });

  displayExpenseTransaction(expenseTransactions);
  displayExpenseTotal(expenseTransactions);

  calculateBalanceTotal(incomeTransactions, expenseTransactions);
}

//calculate balance

function calculateBalanceTotal(incomeArr, expenseArr) {
  let balanceTotal = displayIncomeTotal(incomeTransactions) - displayExpenseTotal(expenseTransactions);
  document.getElementById('balance-sum-amount').innerHTML = balanceTotal;
}