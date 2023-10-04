//adaptation  screen size
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

//effect header
setTimeout(function () {
  // Get all sections that have an ID defined
  const sections = document.querySelectorAll("section[id]");
  console.log(sections);
  // Add an event listener listening for scroll
  window.addEventListener("scroll", (event) => {
    function navHighlighter() {
      // Get current scroll position
      let scrollY = window.pageYOffset;

      Array.prototype.forEach.call(sections, function (current) {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute("id");
        // console.log(sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          const selectedID = document.querySelector(
            ".navigation a[class*=" + sectionId + "]"
          );
          console.log(selectedID);

          if (sectionId != "Me2") {
            selectedID.classList.add("active");
            selectedID.getAttribute("href");
            console.log(selectedID.getAttribute("href"));
          }

          // document
          //   .querySelector(".navigation a[class*=" + sectionId + "]")
          //   .classList.add("active");
        } else if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight
        ) {
          const removedID = document.querySelector(
            ".navigation a[class*=" + sectionId + "]"
          );
          removedID.classList.remove("active");
          // console.log(selectedID);
          // document
          //   .querySelector(".navigation a [class*=" + sectionId + "]")
          //   .classList.remove("active");
        }
      });
    }
    navHighlighter();
  });
}, 100);

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
