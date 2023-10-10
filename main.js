let root = document.getElementById("root");

const pageTitle = document.createElement("h1");
pageTitle.classList.add("title");
pageTitle.textContent = "All Users TechCorp Inc.";

document.body.insertBefore(pageTitle, document.body.firstChild);

fetch("https://reqres.in/api/users?per_page=12")
  .then((response) => response.json())
  .then((data) => {
    // Utilisez les données récupérées de l'API
    console.log(data);

    for (let i = 0; i < data.data.length; i++) {
      const user = data.data[i];

      // Créez une nouvelle carte pour chaque utilisateur
      const card = document.createElement("div");
      card.classList.add("card");
      const cardBody = document.createElement("div");
      cardBody.classList.add("cardBody");
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("cardTitle");
      const cardImg = document.createElement("img");
      cardImg.classList.add("cardImg");

      cardImg.src = user.avatar;
      cardTitle.innerHTML = user.first_name + " " + user.last_name;

      // Gestionnaire d'événement pour le clic sur une carte
      card.addEventListener("click", function () {
        // Créez une modal et affichez les informations de l'utilisateur
        const modal = createModal(user);
        modal.style.display = "block";
      });

      // Ajoutez la carte à la racine (root) de la page
      root.appendChild(card);
      card.appendChild(cardImg);
      card.appendChild(cardTitle);
    }

    function createModal(user) {
      const modal = document.createElement("div");
      modal.classList.add("modal");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      const closeBtn = document.createElement("span");
      closeBtn.classList.add("close");
      closeBtn.innerHTML = "&times;";

      const modalTitle = document.createElement("h2");
      modalTitle.textContent = "Information Profil";

      const modalImg = document.createElement("img");
      modalImg.src = user.avatar;
      const modalFirstname = document.createElement("p");
      modalFirstname.textContent = "First Name: " + user.first_name;
      const modalLastname = document.createElement("p");
      modalLastname.textContent = " Last Name: " + user.last_name;
      const modalEmail = document.createElement("p");
      modalEmail.textContent = " E mail: " + user.email;

      modalContent.appendChild(closeBtn);
      modalContent.appendChild(modalTitle);
      modalContent.appendChild(modalImg);
      modalContent.appendChild(modalFirstname);
      modalContent.appendChild(modalLastname);
      modalContent.appendChild(modalEmail);

      modal.appendChild(modalContent);

      document.body.appendChild(modal);

      closeBtn.addEventListener("click", function () {
        document.body.removeChild(modal);
      });
      return modal;
    }
  })
  .catch((error) => {
    console.error("Erreur :", error);
  });
