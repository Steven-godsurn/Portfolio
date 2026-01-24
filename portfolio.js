const project = document.getElementById("first-project");
const contactInfo = document.getElementById("contactInfo");
const contactBtn = document.getElementById("contactBtn");
const gitHub = document.getElementById("gitHub");
const linkedIn = document.getElementById("linkedIn");

contactBtn.addEventListener("click", () => {
   contactInfo.classList.toggle("d-none");
})

project.addEventListener("click", () => {
      window.open("https://steven-godsurn.github.io/Handihand/", "_blank");
})

gitHub.addEventListener("click", () => {
    window.location.href = "https://github.com/Steven-godsurn";
})

linkedIn.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/feed/";
})
