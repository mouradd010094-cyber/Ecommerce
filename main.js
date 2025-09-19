
console.log("Welcome to Start Framework!");


window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#1a252f";
  } else {
    header.style.backgroundColor = "#2c3e50";
  }
});


document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector("textarea").value;

  console.log("Form submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Thank you " + name + "! Your message has been sent.");
  this.reset();
});
