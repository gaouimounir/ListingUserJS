let root = document.getElementById("root");

fetch("https://reqres.in/api/users?")
  .then((response) => response.json())
  .then((data) => {
    // Utilisez les données récupérées de l'API
    console.log(data);

    // Affiche dans le HTML, la données récupéré sur l'API
    for (let i = 0; i < data.data.length; i++) {
      const user = data.data[i];

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

      root.appendChild(card);
      card.appendChild(cardImg);
      card.appendChild(cardTitle);
    }
  })
  .catch((error) => {
    // Gérez les erreurs ici
    console.error("Erreur :", error);
  });
