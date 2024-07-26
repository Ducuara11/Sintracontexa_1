document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("sesion iniciada");
    })
    .catch((error) => {
      var mensajeError = error.message;
      console.log(mensajeError);
    });
});
