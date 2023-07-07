// Получение элементов формы и списка результатов
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Обработчик отправки формы
searchForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  imgSearch(searchInput.value);
});

/* Функция поиска изображений */
function imgSearch(imgTag) {
  /* Удаление предыдущих результатов поиска */
  while (searchResults.firstChild) {
    searchResults.firstChild.remove();
  }

  const API_KEY = '3324605-cd4276f44c6c24381ca9603e8';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(imgTag)}&orientation=horizontal`;

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      /* Обработка результатов поиска */
      displaySearchResults(data.hits);
    })
    .catch(error => {
      console.error("Ошибка при выполнении запроса к Pixabay API:", error);
    });
}

/* Функция отображения результатов поиска */
function displaySearchResults(results) {
  results.forEach(result => {
    const imgLink = document.createElement('a');
    imgLink.href = result.pageURL;
    imgLink.classList.add('img_link');

    const img = document.createElement('img');
    img.src = result.webformatURL;

    imgLink.appendChild(img);
    searchResults.appendChild(imgLink);
  });

  if (results.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'Нет результатов для отображения.';
    searchResults.appendChild(noResultsMessage);
  }
}
