// Configura Firebase
// Referencia al servicio de autenticación
//const auth = app.auth();

// Maneja el envío del formulario de login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("Usuario Registrado");
    })
    .catch((error) => {
      console.log("Usuario o Contraseña Erronea");
    });
});
