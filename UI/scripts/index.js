const signUpBtn = document.getElementById('signup');
const signInBtn = document.getElementById('login');

signUpBtn.onclick = function logBtnClicked() {
  document.getElementById('signin-display').style.display = 'none';
  document.getElementById('signup-display').style.display = 'block';
};
signInBtn.onclick = function signBtnClicked() {
  document.getElementById('signup-display').style.display = 'none';
  document.getElementById('signin-display').style.display = 'block';
};

const resetBtn = document.getElementById('reset-pass');
const logInBtn = document.getElementById('logged-in');

resetBtn.onclick = function forgBtnClicked() {
  document.getElementById('signin-display').style.display = 'none';
  document.getElementById('reset-display').style.display = 'block';
};
logInBtn.onclick = function logBtnClicked() {
  document.getElementById('reset-display').style.display = 'none';
  document.getElementById('signin-display').style.display = 'block';
};
