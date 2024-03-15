const button = document.querySelector('#enter');

const login = document.querySelector('#login');

const password = document.querySelector('#pass');

const rightLogin = "KortoKript"
const rightPass = "20090728"

function checkLogin() {
  if (login.value == rightLogin && pass.value == rightPass) {
  alert ("Ого, ты не идиот!")
  }
else {
  alert ("MOVE. OR. DIE")
  }
}

button.addEventListener('click', checkLogin);

function checkPassword() {
  alert(" Your password: " + password.value + " Yes, I'm a your morher... OH, I MEAN TURONBEK! NO NO NO NOooooooo! ")
}


button.addEventListener('click', checkPassword);
