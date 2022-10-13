const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phonenumber");
const country = document.getElementById("country");
const city = document.getElementById("city");
const password = document.getElementById("password");

const form = document.getElementById("form");

const errorElement = document.getElementById("error");

messeges = [];
if (fname.value === null || fname.value === "")
  messeges.push("name should be more than 3 characters");
 if (lname.value === null || lname.value === "")
  messeges.push("last name should be more than 3 characters");
 if(email.value === null || email.value === "")
    messeges.push("enter you email plz");
if(phone.value!=1-9 && phone.length<9)
    messeges.push("enter a valid number")

form.addEventListener("submit", (e) => {
  if (messeges.length > 0) {
    e.preventDefault();
    errorElement.innerText = messeges.join(", ");
  }
});
