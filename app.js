const receiveData = (input) => {
  const inputField = document.getElementById(input);
  const inputValue = inputField.value;
  setLocalValue(inputValue);
  // console.log(inputValue)
  inputField.value = "";
};


const getLocalValue = () => {
  let user = [];
  const getValue = localStorage.getItem("user");
  if (getValue) {
    user = JSON.parse(getValue);
  }
  return user;
};

const setLocalValue = (value) => {
  let user = getLocalValue();
  user = value;
  console.log(user)
  let userValue = JSON.stringify(user);
  const setValue = localStorage.setItem('user', userValue);
};
