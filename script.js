const feedbackForm = document.getElementById("feedbackForm");
const thankYouMsg = document.getElementById("thankYouMsg");

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault(); 

  thankYouMsg.style.display = "block";

  feedbackForm.reset();

  setTimeout(() => {
    thankYouMsg.style.display = "none";
  }, 15000);
});
