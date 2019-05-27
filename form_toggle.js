// toggle tabs
// add new income

function showIncomeForm() {
  document.getElementById('exp-form').style.display = 'none';
  document.getElementById('income-form').style.display = 'block';

  let showIncomeFormBtn = document.getElementById('show-income-form-btn');
  showIncomeFormBtn.style.backgroundColor = '#fecc06';
  showIncomeFormBtn.style.color = '#ffffff';

  let showExpenseFormBtn = document.getElementById('show-expense-form-btn');
  showExpenseFormBtn.style.backgroundColor = '#ffffff';
  showExpenseFormBtn.style.color = '#0A136A';

  let formNav = document.getElementById('form-nav');
  formNav.classList.remove('form-nav-expense-border');
  formNav.classList.add('form-nav-income-border');
}

// add new expense

function showExpenseForm() {
  document.getElementById('income-form').style.display = 'none';
  document.getElementById('exp-form').style.display = 'block';

  let showExpenseFormBtn = document.getElementById('show-expense-form-btn');
  showExpenseFormBtn.style.backgroundColor = '#0A136A';
  showExpenseFormBtn.style.color = '#ffffff';

  let showIncomeFormBtn = document.getElementById('show-income-form-btn');
  showIncomeFormBtn.style.backgroundColor = '#ffffff';
  showIncomeFormBtn.style.color = '#fecc06';

  let formNav = document.getElementById('form-nav');
  formNav.classList.remove('form-nav-income-border');
  formNav.classList.add('form-nav-expense-border');
}

export {
  showIncomeForm,
  showExpenseForm
};