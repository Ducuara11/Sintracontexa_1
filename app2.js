const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const container = document.getElementById("container");

document
  .getElementById("sign-in-container")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;

    console.log(email);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("Sesion correcta");
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

document
  .getElementById("sign-up-container")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("cuenta creada");
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

signUpBtn.addEventListener("click", () => {
  console.log("Registarse");
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
  console.log("Entrar");
  container.classList.remove("right-panel-active");
});
