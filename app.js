import {
  showIncomeForm,
  showExpenseForm,
  showTransferForm
} from "/modules/form_toggle.js";

import { saveIncome } from "/modules/save_income.js";
import { saveExpense } from "/modules/save_expense.js";
import { saveTransfer } from "/modules/save_transfer.js";

//toggled form interaction
// add new income
document
  .getElementById("show-income-form-btn")
  .addEventListener("click", showIncomeForm);

document.getElementById("income-save").addEventListener("click", saveIncome);

// add new expense
document
  .getElementById("show-expense-form-btn")
  .addEventListener("click", showExpenseForm);

document.getElementById("exp-save").addEventListener("click", saveExpense);

// add new transfer
document
  .getElementById("show-transfer-form-btn")
  .addEventListener("click", showTransferForm);

document.getElementById("exp-save").addEventListener("click", saveTransfer);
