//  Create a User account

const signUp = evt => {
  evt.preventDefault();
  //  get all user inpute value
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;
  const feedbackContainer = document.querySelector('.feedback-container');

  if (password !== password2) {
    feedbackContainer.innerHTML = 'confirm password does not match';
    feedbackContainer.style.color = 'red';
    feedbackContainer.style.border = '0.7px solid #dc3545';

    setInterval(() => {
      feedbackContainer.innerHTML = '';
      feedbackContainer.style.border = 'none';
    }, 6000);
    return;
  }

  //  sign up API endpoint URL
  const url = 'http://localhost:9000/users';

  //  User input data object
  const formData = {
    firstname,
    lastname,
    email,
    password
  };

  //  make POST request to signup endpoint
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(res => res.json())
    .then(body => {
      // Store user data in browser session storage
      const userData = JSON.stringify({
        id: body.id,
        email: body.email
      });

      sessionStorage.setItem('user', userData);

      // redirect user to dashboard
      window.location.href = './pages/dashboard.html';
    })
    .catch(err => err);
};

// Get Sign up button
const userSignUpBtn = document.getElementById('user-signup');

// Bind click event to Sign Uo Button
userSignUpBtn.addEventListener('click', signUp);
