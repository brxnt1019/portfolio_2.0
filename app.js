/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hideLinks() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Project Gallery */
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

/* Projects Gallery */
var modalInfo = {
  1: {
    title: "Project 1",
    info: "...",
    link: "#",
    github: "#",
  },
  2: {
    title: "Project 2",
    info: "...",
    link: "#",
    github: "#",
  },
  3: {
    title: "Project 3",
    info: "...",
    link: "#",
    github: "#",
  },
  4: {
    title: "Project 4",
    info: "....",
    link: "#",
    github: "#",
  },
};

// Get the modal
var modal = document.getElementById("preview");

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var project = btn[i].parentElement;
    openModal(project);
  });
}

function openModal(project) {
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img) {
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function () {
    window.open(modalInfo[id].link, "_blank");
  };
  document.getElementById("github").onclick = function () {
    window.open(modalInfo[id].github, "_blank");
  };
}

// close the modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
