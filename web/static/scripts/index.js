const root = document.getElementById("root");
const pTag = document.createElement("p");


fetch('/message')
  .then(response => response.json())
  .then(data => {
      pTag.innerText= data;
      root.appendChild(pTag);
    });