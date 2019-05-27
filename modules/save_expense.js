import { calculateBalanceTotal } from "/modules/calculate_balance_total.js";
import { incomeTransactions } from "/modules/save_income.js";

function addExpenseAmount() {
  let expenseAmount = 0;
  expenseAmount = document.querySelector("#exp-amount").value;
  document.querySelector("#exp-amount").value = null;
  return Number(expenseAmount);
}

function getExpenseType() {
  let expenseType = document.querySelector("#exp-category").value;
  document.querySelector("#exp-category").value = "Select";
  return expenseType;
}

const expenseTransactions = [];

function displayExpenseTransaction(arr) {
  let expenseDisplayRow = document.getElementById("expense-display-row");
  expenseDisplayRow.innerHTML = "";

  arr.forEach(obj => {
    let newExpenseRow = document.createElement("div");
    newExpenseRow.className = "summary-row";

    let newExpenseType = document.createElement("div");
    newExpenseType.className = "expense-sum-type";
    newExpenseType.innerHTML = obj.type;

    let newExpenseAmount = document.createElement("div");
    newExpenseAmount.className = "expense-sum-amount";
    newExpenseAmount.innerHTML = obj.amount;

    newExpenseRow.appendChild(newExpenseType);
    newExpenseRow.appendChild(newExpenseAmount);

    expenseDisplayRow.appendChild(newExpenseRow);
  });
}

function displayExpenseTotal(arr) {
  const expenseTotal = arr.reduce(
    (acc, currentValue) => acc + currentValue.amount,
    0
  );
  document.getElementById("expense-total").innerHTML = expenseTotal;
  return expenseTotal;
}

function saveExpense(e) {
  e.preventDefault();
  let amount = addExpenseAmount();
  let type = getExpenseType();
  expenseTransactions.push({
    amount: amount,
    type: type
  });

  displayExpenseTransaction(expenseTransactions);
  displayExpenseTotal(expenseTransactions);

  calculateBalanceTotal(incomeTransactions, expenseTransactions);
}

export { saveExpense, displayExpenseTotal, expenseTransactions };
