const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (document.querySelector("#name").value.length > 22) {
    document.getElementById("erroroutput").innerHTML = "Sorry, your business name is too long"
    document.getElementById('erroroutput').style.display = "block";
  } else {
    GenerateTagLine();
    RemoveError();
    displayName();
    displayEmail();
    GenerateImage();
    showImage();
  }
})

function GenerateTagLine() {
  fetch('https://corporatebs-generator.sameerkumar.website/')
    .then((response) => response.json())
    .then((response) => document.getElementById("x2").innerHTML = response.phrase)
}

function displayName() {
  const name = document.querySelector("#name").value;
  console.log(name);
  document.getElementById("x").innerHTML = name;
}

function displayEmail() {
  const email = document.querySelector("#email").value;
  console.log(email);
  document.getElementById("x3").innerHTML = email;
}

function GenerateImage() {
  const sector=document.querySelector("#sector").value;
  fetch(`https://api.unsplash.com/search/photos/?client_id=eCUradu6ywokhcTMKRRYnlodH7c-gkmaUCJ8LvCCYag&query=${sector}`)
    .then((response) => response.json())
    .then((data) => document.getElementById("x4").src = data.results[2].urls.small)
}

function showImage() {
  document.getElementById('x4').style.display = "block";
}
function RemoveError() {
  document.getElementById('erroroutput').style.display = "none";
}



