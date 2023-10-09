let root = document.getElementById("root");

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products/3", true);
xhr.onload = function () {
  console.log(xhr.responseText);
};
root.innerHTML = xhr.send();
