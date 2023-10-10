let root = document.getElementById("root");

fetch("https://reqres.in/api/users?")
  .then((response) => response.json())
  .then((data) => {
    // Utilisez les données récupérées de l'API
    console.log(data);

    // Affiche dans le HTML, la temperature récupéré sur l'API
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("cardBody");
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("cardTitle");
    const cardImg = document.createElement("img");
    cardImg.src = "https://reqres.in/img/faces/1-image.jpg";
    cardImg.classList.add("cardImg");

    cardTitle.innerHTML =
      data.data[0].first_name + " " + data.data[0].last_name;

    cardImg.innerHTML = data.data[0].avatar;

    root.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
  })
  .catch((error) => {
    // Gérez les erreurs ici
    console.error("Erreur :", error);
  });
