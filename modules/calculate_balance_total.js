import {
  displayIncomeTotal,
  incomeTransactions
} from "/modules/save_income.js";
import {
  displayExpenseTotal,
  expenseTransactions
} from "/modules/save_expense.js";

function calculateBalanceTotal(incomeArr, expenseArr) {
  let balanceTotal =
    displayIncomeTotal(incomeTransactions) -
    displayExpenseTotal(expenseTransactions);
  document.getElementById("balance-sum-amount").innerHTML = balanceTotal;
}

export { calculateBalanceTotal };
