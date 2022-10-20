const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (document.querySelector("#name").value.length > 22){
    document.getElementById("erroroutput").innerHTML = "Sorry, your business name is too long"
  } else {
  GenerateTagLine();
  RemoveError();
  displayName();
  displayEmail();
  GenerateImage();
  showImage();
  }
})

function GenerateTagLine(){
fetch ('https://corporatebs-generator.sameerkumar.website/')
.then ((response) => response.json())
.then((response) => document.getElementById("x2").innerHTML = response.phrase)
}

function displayName(){
const name = document.querySelector("#name").value;
console.log(name);
  document.getElementById("x").innerHTML = name;
}

function displayEmail(){
const email = document.querySelector("#email").value;
console.log(email);
  document.getElementById("x3").innerHTML = email;
}

function GenerateImage(){
fetch(`https://picsum.photos/350/200`)
.then((response) => response.url)
    .then((response) => document.getElementById("x4").src= response)
}

function showImage() {
 document.getElementById('x4').style.display = "block";
}
function RemoveError() {
 document.getElementById('erroroutput').style.display = "none";
}



