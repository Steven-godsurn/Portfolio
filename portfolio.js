const project = document.getElementById("first-project");
const project2 = document.getElementById("second-project");

const contactInfo = document.getElementById("contactInfo");
const contactBtn = document.getElementById("contactBtn");
const gitHub = document.getElementById("gitHub");
const linkedIn = document.getElementById("linkedIn");

const buttons = document.querySelectorAll(".tab-button");
const descriptions = document.querySelectorAll(".skill-description");

contactBtn.addEventListener("click", () => {
   contactInfo.classList.toggle("d-none");
})

project.addEventListener("click", () => {
      window.open("https://steven-godsurn.github.io/Handihand/", "_blank");
})

project2.addEventListener("click", () => {
      window.open("https://steven-godsurn.github.io/Chatbox/", "_blank");
})

gitHub.addEventListener("click", () => {
    window.location.href = "https://github.com/Steven-godsurn";
})

linkedIn.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/feed/";
})

buttons.forEach(button => {

    button.addEventListener("click", () => {

       const description = button.parentElement.querySelector(".skill-description");

      if(description.classList.contains("show")){
          description.classList.remove("show");
      }else {
        descriptions.forEach(item => {
          item.classList.remove("show");  
        })
        description.classList.add("show");

      }
    });

});