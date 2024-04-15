document.getElementById('password').addEventListener('input', () => {
  const password = document.getElementById('password').value;
  let strength = 'weak';

  if (password.length > 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    strength = 'strong';
  } else if (password.length > 4) {
    strength = 'medium';
  }

  document.getElementById('output').innerText = `Password Strength: ${strength}`;
});
