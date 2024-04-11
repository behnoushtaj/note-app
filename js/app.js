let inputElem = document.querySelector("#input-field");
let cardColumns = document.querySelector(".card-columns");
let btnAdd = document.querySelector(".add");
let btnDelete = document.querySelector(".delete");
let colorBox = document.querySelectorAll(".color-box");

let selectedColor = "";

colorBox.forEach(function (elem) {
  elem.addEventListener("click", function (item) {
    selectedColor = item.target.style.backgroundColor;
    inputElem.style.backgroundColor = selectedColor;
  });
});

function createCard(inputData) {
  let newDiv = document.createElement("div");
  newDiv.className = "card shadow-sm rounded";
  newDiv.style.backgroundColor = selectedColor;

  newDiv.addEventListener("click", function () {
    newDiv.remove();
  });

  let newPtag = document.createElement("p");
  newPtag.className = "card-text p-3";
  newPtag.innerHTML = inputData;

  newDiv.appendChild(newPtag);
  cardColumns.appendChild(newDiv);
}

function addNote(event) {
  let inputData = inputElem.value;
  if (inputData && event.keyCode === 13) {
    createCard(inputData);
    inputElem.value = "";
  }
}

function addNote2() {
  let inputData = inputElem.value;
  if (inputData) {
    createCard(inputData);
    inputElem.value = "";
  }
}

function deleteCards() {
  cardColumns.innerHTML = "";
}

inputElem.addEventListener("keydown", addNote);
btnAdd.addEventListener("click", addNote2);
btnDelete.addEventListener("click", deleteCards);
