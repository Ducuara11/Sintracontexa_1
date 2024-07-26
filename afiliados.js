document.addEventListener("DOMContentLoaded", function () {
  // Obtener elementos del dim
  const modal = document.getElementById("myModal");
  const modalClose = document.querySelector(".close");
  const closeModalButton = document.getElementById("close-modal");
  const nameElements = document.querySelectorAll(".name");
  const modalBody = document.getElementById("modal-body");
  const printButton = document.querySelector(
    ".modal-footer .modal-btn:nth-of-type(2)"
  );
  const editButton = document.querySelector(
    ".modal-footer .modal-btn:nth-of-type(3)"
  );

  // Datos de ejemplo para el modal (esto puede venir de una base de datos)
  const data = {
    "ZEA PIEDRAHITA YULIANA": [
      { año: "2024", tipo: "CAMISA GRIS DAMA", talla: "12/L", cantidad: 3 },
      { año: "2024", tipo: "BLUE JEAN DAMA", talla: "8", cantidad: 3 },
      {
        año: "ABRIL 2024",
        tipo: "TENIS SERVICIO EN LONA - NEGRO",
        talla: "35",
        cantidad: 1,
      },
      {
        año: "AGOSTO 2024",
        tipo: "CAMISA GRIS DAMA",
        talla: "12/L",
        cantidad: 3,
      },
      {
        año: "DICIEMBRE 2024",
        tipo: "BLUE JEAN DAMA",
        talla: "8",
        cantidad: 3,
      },
    ],
    "MORENO MOSQUERA MARTHA LUCIA": [
      { año: "2024", tipo: "CAMISA GRIS DAMA", talla: "14/L", cantidad: 2 },
      { año: "2024", tipo: "BLUE JEAN DAMA", talla: "10", cantidad: 4 },
    ],
    // Añadir más datos según sea necesario...
  };

  // Función para abrir el modal y mostrar la información
  function openModal(event) {
    const name = event.target.innerText;

    // Limpiar contenido anterior del modal
    modalBody.innerHTML = "";

    if (data[name]) {
      // Insertar nueva información en el modal
      data[name].forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.año}</td>
          <td>${item.tipo}</td>
          <td>${item.talla}</td>
          <td>${item.cantidad}</td>
          <td></td> <!-- Aquí podrías agregar la firma recibida si la tienes -->
        `;
        modalBody.appendChild(row);
      });
    } else {
      modalBody.innerHTML =
        '<tr><td colspan="5">No hay datos disponibles</td></tr>';
    }

    modal.style.display = "block";
  }

  // Añadir eventos a los elementos de nombre
  nameElements.forEach((element) => {
    element.addEventListener("click", openModal);
  });

  // Función para cerrar el modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Eventos para cerrar el modal
  modalClose.addEventListener("click", closeModal);
  closeModalButton.addEventListener("click", closeModal);

  // Cerrar el modal al hacer clic fuera del contenido del modal
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Función para imprimir el archivo en PDF
  printButton.addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Entrega de Dotación Ropa Labor 2024", 10, 10);

    // Añadir la tabla de datos usando autoTable
    const table = document.getElementById("modal-table");
    doc.autoTable({ html: table });

    // Guardar el archivo PDF
    doc.save("archivo.pdf");
  });

  // Función para editar (actualmente solo muestra una alerta)
  editButton.addEventListener("click", function () {
    alert("Funcionalidad de editar no implementada aún.");
  });

  // Configurar el popup (ya estaba configurado)
  const openPopupBtn = document.getElementById("openPopupBtn");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const popup = document.getElementById("popup");

  openPopupBtn.addEventListener("click", function () {
    popup.style.display = "flex"; // Change from 'block' to 'flex' to enable centering
  });

  closePopupBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
