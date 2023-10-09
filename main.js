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
    const cardTitle = document.createElement("p");
    cardTitle.classList.add("cardTitle");
    const cardImg = document.createElement("img");
    cardImg.classList.add("cardImg");

    let name = document.createElement("h2");
    name.innerHTML = data.data[0].first_name + " " + data.data[0].last_name;

    root.appendChild(name);
  })
  .catch((error) => {
    // Gérez les erreurs ici
    console.error("Erreur :", error);
  });
