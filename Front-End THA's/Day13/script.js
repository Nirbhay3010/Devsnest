const image = document.getElementById("image");

document.addEventListener("load", random());
function random() {
  fetch("https://meme-api.herokuapp.com/gimme").then((response) => {
    response.json().then((data) => {
      image.src = data["url"];
    });
  });
}