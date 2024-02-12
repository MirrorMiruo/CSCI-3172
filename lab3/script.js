const btn = document.getElementById("btn");
const displayArea = document.getElementById("displayArea");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  //The use of preventDefault():
  /*event.preventDefault(); is used to prevent the form from being submitted 
  in the default way, thus avoiding page refresh or jump, allowing users to 
  process form data through JavaScript and display results on the current page*/

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const selectedGender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  console.log("Selected gender:", selectedGender);

  const country = document.getElementById("country").value;

  //Line 23 needs to be modified if we want to keep previous data
  const displayArea = document.getElementById("displayArea"); // Create a <div> or other container
  displayArea.innerHTML = `
        <p>First Name: <strong>${firstName}</strong></p>
        <p>Last Name: <strong>${lastName}</strong></p>
        <p>Gender: <strong>${selectedGender}</strong></p>
        <p>Country: <strong>${country}</strong></p>
    `;
});
