const validateForm = () => {
  // Variables
  const name = document.forms["myForm"]["name"];
  const address = document.forms["myForm"]["address"];
  const email = document.forms["myForm"]["email"];
  const telephone = document.forms["myForm"]["telephone"];
  const password = document.forms["myForm"]["password"];
  const option = document.forms["myForm"]["option"];

  // The if statements check that a value has been entered into each form field
  if (name.value == '') {
    alert('Please enter your name');
    name.focus();
    return false;
  }

  if (address.value == '') {
    alert('Please enter your address');
    address.focus();
    return false;
  }

  // The else if statement checks that the entered email address follows the format _@_._
  if (email.value == '') {
    alert('Please enter your email address');
    email.focus();
    return false;
  } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) == false) {
    alert('Please enter a valid email address')
    email.focus();
    return false;
  }

  if (telephone.value == '') {
    alert('Please enter your telephone number');
    telephone.focus();
    return false;
  }

  if (password.value == '') {
    alert('Please enter your password');
    password.focus();
    return false;
  }

  if (option.selectedIndex < 1) {
    alert('Please select an option');
    option.focus();
    return false;
  }

  return true;
}