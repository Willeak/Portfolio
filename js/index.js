//adaptation screen vetical size
console.log(window.innerHeight);
setTimeout(function () {
  const Screen = document.getElementById("Me2");
  let HeightScreen = window.innerHeight - 50;
  Screen.style.height = HeightScreen + "px";
}, 50);

addEventListener("resize", (event) => {
  console.log(window.innerHeight);

  setTimeout(function () {
    const Screen = document.getElementById("Me2");
    let HeightScreen = window.innerHeight - 50;
    Screen.style.height = HeightScreen + "px";
  }, 50);
});

//effect apparition au scroll
addEventListener("scroll", (event) => {
  var reveals = document.querySelectorAll(".reveal");
  function reveal() {
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = -150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active1");
      } else {
        reveals[i].classList.remove("active1");
      }
    }
  }
  reveal();
});

//cursor custom
const cursor = document.getElementById("cursor");
const cursorBorder = document.getElementById("cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  document.getElementById(
    "cursor"
  ).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  document.getElementById(
    "cursor-border"
  ).style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      document.getElementById("cursor-border").style.backgroundColor =
        "rgba(255, 255, 255, .6)";
      document
        .getElementById("cursor-border")
        .style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      document.getElementById("cursor-border").style.backgroundColor = "white";
      document.getElementById("cursor-border").style.mixBlendMode =
        "difference";
      document
        .getElementById("cursor-border")
        .style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    document.getElementById("cursor-border").style.backgroundColor = "unset";
    document.getElementById("cursor-border").style.mixBlendMode = "unset";
    document
      .getElementById("cursor-border")
      .style.setProperty("--size", "50px");
  });
});

function telechargerCv() {
  var cheminRelatif = "CV/CV_Calvin_DUCATEZ.pdf";
  fetch(cheminRelatif)
    .then((response) => response.blob())
    .then((blob) => {
      var blobUrl = URL.createObjectURL(blob);
      var lienTelechargement = document.createElement("a");
      lienTelechargement.href = blobUrl;
      lienTelechargement.download = "CV_Calvin_DUCATEZ.pdf";
      lienTelechargement.click();
      URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => {
      console.error("Erreur lors du téléchargement du CV:", error);
    });
}

// const Name = document.getElementById("Name");
// const firstName = document.getElementById("firstName");
// const email = document.getElementById("email");
// const Number = document.getElementById("Number");
// const Object = document.getElementById("Object");
// const Message = document.getElementById("Message");

// submit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let ebody = `
//     <h1>Nom: </h1>${Name.value}
//     <br>
//     <h1>Prénom: </h1>${firstName.value}
//     <br>
//     <h1>Email: </h1>${email.value}
//     <br>
//     <h1>Numéro de telephone: </h1>${Number.value}
//     <br>
//     <h1>Objet: </h1>${Object.value}
//     <br>
//     <h1>message: </h1>${Message.value}
//     <br>
//     `;

//   Email.send({
//     SecureToken: "8346e445-7189-4d3a-aa95-81a1b6fd1dee", //add your token here
//     To: "cducatez.pro@gmail.com",
//     From: "cducatez.pro@gmail.com",
//     Subject: "Formulaire venant de mon Portfolio !",
//     Body: ebody,
//   }).then((message) => alert(message));
// });

// image interaction cursor
const image = document.querySelector(".tilt");
const middleX = window.innerWidth / 2;
const middleY = window.innerHeight / 2;

document.addEventListener("mousemove", (event) => {
  const clientX = event.clientX;
  const clientY = event.clientY;

  const offsetX = (clientX - middleX) / middleX;
  const offsetY = (middleY - clientY) / middleY;

  image.style.transform = `perspective(1000px) rotateY(${
    offsetX * 4
  }deg) rotateX(${offsetY * 4}deg) scale3d(1, 1, 1)`;
});
