let root = document.getElementById("root");

fetch("https://reqres.in/api/users?page=2")
  .then((response) => response.json())
  .then((data) => {
    // Utilisez les données récupérées de l'API
    console.log(data);

    // Affiche dans le HTML, la temperature récupéré sur l'API
    let name = document.createElement("h2");
    name.innerHTML = data.data[0].email;
    root.appendChild(name);
  })
  .catch((error) => {
    // Gérez les erreurs ici
    console.error("Erreur :", error);
  });
