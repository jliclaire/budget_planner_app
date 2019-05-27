import { calculateBalanceTotal } from "/modules/calculate_balance_total.js";
import { expenseTransactions } from "/modules/save_expense.js";

function addIncomeAmount() {
  let incomeAmount = 0;
  incomeAmount = document.querySelector("#income-amount").value;
  document.querySelector("#income-amount").value = null;
  return Number(incomeAmount);
}

function getIncomeType() {
  let incomeType = "";
  incomeType = document.querySelector("#income-category").value;
  document.querySelector("#income-category").value = "Select";
  return incomeType;
}

function getIncomeAccount() {
  let incomeAccount = "";
  incomeAccount = document.querySelector("#income-account").value;
  document.querySelector("#income-account").value = "Select";
  return incomeAccount;
}

function getIncomeDate() {
  let incomeDate = document.querySelector("#income-date").value;
  document.querySelector("#income-date").value = "";
  return incomeDate;
}

const incomeTransactions = [];

function displayIncomeTransaction(arr) {
  let incomeDisplayRow = document.getElementById("income-display-row");
  incomeDisplayRow.innerHTML = "";
  arr.forEach(obj => {
    let newIncomeRow = document.createElement("div");
    newIncomeRow.className = "summary-row";

    let newIncomeType = document.createElement("div");
    newIncomeType.className = "income-sum-type";
    newIncomeType.innerHTML = obj.type;

    let newIncomeAmount = document.createElement("div");
    newIncomeAmount.className = "income-sum-amount";
    newIncomeAmount.innerHTML = obj.amount;

    newIncomeRow.appendChild(newIncomeType);
    newIncomeRow.appendChild(newIncomeAmount);

    incomeDisplayRow.appendChild(newIncomeRow);
  });
}

function displayIncomeTotal(arr) {
  const incomeTotal = arr.reduce(
    (acc, currentValue) => acc + currentValue.amount,
    0
  );
  document.getElementById("income-total").innerHTML = incomeTotal;
  return incomeTotal;
}

function saveIncome(e) {
  e.preventDefault();
  let amount = addIncomeAmount();
  let type = getIncomeType();
  let account = getIncomeAccount();
  let date = getIncomeDate();
  incomeTransactions.push({
    amount: amount,
    type: type,
    account: account,
    date: date
  });
  displayIncomeTransaction(incomeTransactions);
  displayIncomeTotal(incomeTransactions);

  calculateBalanceTotal(incomeTransactions, expenseTransactions);
}

// console.log(incomeTransactions);

export { saveIncome, displayIncomeTotal, incomeTransactions };
