//вкл строгий режим
"use strict";

// Получаем ссылки на элементы DOM
const form = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const noteList = document.getElementById("note-list");

// Обработчик события отправки формы
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Отменяем обычное поведение формы

  const noteText = noteInput.value; // Получаем текст заметки

  if (noteText.trim() === "") {
    return; // Не сохраняем пустую заметку
  }

  const note = { text: noteText }; // Создаем объект заметки

  console.log("noteText", noteText);
  console.log("note", note);

  // Получаем текущий список заметок из localStorage
  let notes = localStorage.getItem("notes");
  if (notes) {
    notes = JSON.parse(notes); // Парсим JSON в массив
  } else {
    notes = []; // Если список пуст, создаем новый массив
  }

  notes.push(note); // Добавляем новую заметку в список

  localStorage.setItem("notes", JSON.stringify(notes)); // Сохраняем обновленный список заметок в localStorage

  // Очищаем поле ввода
  noteInput.value = "";

  // Обновляем отображение списка заметок
  renderNoteList(notes);

  console.log("notes", notes);
  console.log("localStorage", localStorage);
});

// Функция для отображения списка заметок на странице
function renderNoteList(notes) {
  noteList.innerHTML = ""; // Очищаем список перед обновлением

  // Создаем элементы списка для каждой заметки
  notes.forEach(function (note, index) {
    const li = document.createElement("li");
    li.textContent = note.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.addEventListener("click", function () {
      deleteNote(index); // Обрабатываем событие удаления заметки
    });

    li.appendChild(deleteButton);
    noteList.appendChild(li);
  });
}

// Функция для удаления заметки
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes) {
    notes = JSON.parse(notes); // Парсим JSON в массив

    notes.splice(index, 1); // Удаляем заметку из массива

    localStorage.setItem("notes", JSON.stringify(notes)); // Сохраняем обновленный список заметок в localStorage

    // Обновляем отображение списка заметок
    renderNoteList(notes);
  }
}

// Загружаем сохраненные заметки при загрузке страницы
window.addEventListener("load", function () {
  let notes = localStorage.getItem("notes");
  if (notes) {
    notes = JSON.parse(notes); // Парсим JSON в массив
    renderNoteList(notes); // Отображаем список заметок
  }
});
