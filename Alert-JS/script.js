const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // submitting normally
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  alert(`Name: ${name}\nEmail: ${email}`);
});
