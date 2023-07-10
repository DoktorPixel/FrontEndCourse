console.log("task-000 is running...");

const API_KEY = "3324605-cd4276f44c6c24381ca9603e8";

const imgTag = "photo"; //our request
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
  imgTag
)}&orientation=horizontal`;

let globalData;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    /* Обработка результатов поиска */
    console.log(data);
    console.log(data.hits);
    globalData = data;
    return data;
  })
  .then((data) => someFunction(data.hits))
  .then(() => {
    const keys = Object.keys(globalData);
    for (const key of keys) {
      console.log(key);
    }
  })
  .catch((error) => {
    console.error("Ошибка при выполнении запроса к Pixabay API:", error);
  });

// // //

async function fetchData() {
  let promise = await fetch(URL);
  console.log(promise.headers.get("Content-Type")); // application/json

  // перебрать все заголовки
  for (let [key, value] of promise.headers) {
    console.log(`${key} = ${value}`);
  }

  let json = null;
  if (promise.ok) {
    json = await promise.json();
  } else {
    alert("Ошибка HTTP: " + promise.status);
  }
  console.log(json);
}
fetchData();
// // // that the code is wrapped in an immediately invoked function expression (IIFE) to ensure that it runs immediately

console.log("task-111 is running...");

function someFunction(arguments) {
  console.log(arguments);
  arrId = [];
  arguments.forEach((argument) => {
    arrId.push(argument.id);
  });
  console.log(arrId);

  let evenId = arrId.filter((num) => num % 2 === 0);

  console.log(evenId);
}
