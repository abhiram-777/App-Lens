document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('login-form');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var submitButton = document.getElementById('submit-button');
  var toggle = document.getElementById('password-toggle');

  function updateSubmitState() {
    submitButton.disabled = !email.value.trim() || !password.value;
  }

  email.addEventListener('input', updateSubmitState);
  password.addEventListener('input', updateSubmitState);

  toggle.addEventListener('click', function () {
    var isHidden = password.type === 'password';
    password.type = isHidden ? 'text' : 'password';
    toggle.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    toggle.setAttribute('aria-pressed', String(isHidden));
    toggle.querySelector('.eye-open').classList.toggle('d-none', isHidden);
    toggle.querySelector('.eye-closed').classList.toggle('d-none', !isHidden);
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (submitButton.disabled) return;
    submitButton.disabled = true;
    submitButton.innerHTML = '<svg class="spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity=".25"></circle><path fill="currentColor" opacity=".75" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Signing in…';
    window.setTimeout(function () { submitButton.textContent = 'Sign In'; updateSubmitState(); }, 1800);
  });
});
