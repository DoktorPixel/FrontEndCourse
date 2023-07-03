// Функция для генерации случайного цвета в формате HEX
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const input = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");

input.addEventListener("keypress", onKeypress);
btnAdd.addEventListener("click", onClick);

function chechInputLenght() {
  return input.value.length;
}

function onKeypress() {
  if (chechInputLenght() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
function onClick() {
  if (chechInputLenght() > 0) {
    createListElement();
  }
}

function createListElement() {
  const li = document.createElement("li");
  li.textContent = input.value;
  li.style.backgroundColor = getRandomColor();

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Del";
  btnDelete.addEventListener("click", delElement);
  btnDelete.className = "btn btn-success";

  li.appendChild(btnDelete);
  taskList.appendChild(li);
  input.value = "";
}

function delElement() {
  this.parentNode.remove();
}

// Создание кнопки
const wrapper = document.querySelector(".wrapper");

function createDiv() {
  const wrapperForBtn = document.createElement("div");
  wrapperForBtn.classList.add("wrapperBtn");
  wrapper.appendChild(wrapperForBtn);
  const buttonNew = document.createElement("button");
  buttonNew.textContent = "Нажми меня";
  wrapperForBtn.appendChild(buttonNew);
  buttonNew.classList.add("btn-danger");
  buttonNew.classList.add("btn");
  buttonNew.addEventListener("click", function () {
    const image = document.createElement("img");
    image.src =
      "https://www.doubledtrailers.com/assets/images/random%20horse%20facts%20shareable.png";
    wrapperForBtn.appendChild(image);

    setTimeout(function () {
      image.remove();
    }, 1000);
  });
}
createDiv();

console.log(wrapper);
