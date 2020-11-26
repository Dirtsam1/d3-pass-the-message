const input = document.querySelector("input");
const displayMessage = document.getElementById("displayAlert");
const paragraph = document.getElementById("demo");

function alertBtn() {
  if (input.value === "") {
    document.getElementById("displayAlert").style.display = "block";
    document.getElementById("displayAlert").innerHTML =
      "Please, write some messages ";
    setTimeout(function () {
      document.getElementById("displayAlert").style.display = "none";
    }, 2000);
  } else if (input.value !== "") {
    displayMessage.style.display = "block";
    displayMessage.innerHTML = input.value;
    setTimeout(function () {
      document.getElementById("displayAlert").style.display = "none";
    }, 10000);
    if (input.value !== "") {
      document.getElementById("demo").style.display = "block";
      document.getElementById("demo").innerHTML = "Thank you for message🙏";
      setTimeout(function () {
        document.getElementById("demo").style.display = "none";
      }, 10000);
    }
  }
}
