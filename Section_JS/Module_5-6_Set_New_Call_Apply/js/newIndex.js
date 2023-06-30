const btnStart = document.getElementById("start");
console.log(btnStart);
const btnStop = document.getElementById("stop");
console.log(clear_split);
const btnSplit = document.getElementById("split");
const btnClearSplit = document.getElementById("clear_split");

function startCount() {
  id = setInterval(function () {
    timer.innerHTML = count();
  }, 1);
  btnStart.removeEventListener("click", startCount);
  btnStart.innerHTML = "Pause";
  btnStart.style.backgroundColor = "#f0ad4e";
  btnStart.style.borderColor = "#eea236";
  btnStart.addEventListener("click", pauseCount);
}

///
function pauseCount() {
  clearInterval(id);
  btnStart.innerHTML = "Resume";
  btnStart.style.backgroundColor = "#5cb85c";
  btnStart.style.borderColor = "#4cae4c";
  btnStart.addEventListener("click", startCount);
}

//вешаем события на кнопки
btnStart.addEventListener("click", startCount);

///

//объявляем переменные
var id;
var hs = (mts = ss = ms = msOutput = 0);
var date = new Date(0, 0);
//Главная функция
function count() {
  //ПОДСКАЗАЛИ ДОБРЫЕ ЛЮДИ, Я НЕ ЗНАЮ ПОЧЕМУ +4
  //И НЕ ЗНАЮ ПОЧЕМУ ДО 996ms, НО ЧТОБЫ УСКОРИТЬ
  //СЧЁТЧИК ЭТО СРАБОТАЛО
  //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  date.setMilliseconds(date.getMilliseconds() + 4);
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //НЕПОНЯТНАЯ МНЕ МАГИЧЕСКАЯ СТРОЧКА ЗАКОНЧИЛИСЬ
  var ms = date.getMilliseconds();
  //условия для миллисекунд
  if (ms == 996) {
    ms = 0;
    msOutput = "000";
    ++ss;
  }
  if (ms < 999) {
    ms++;
    msOutput = ms;
  }
  if (ms < 100) {
    ms++;
    msOutput = "0" + ms;
  }
  if (ms < 10) {
    ms++;
    msOutput = "00" + ms;
  }
  //условия для секунд и минут
  if (ss >= 60) {
    ss = 0;
    ++mts;
  }
  if (ss < 10) {
    ss = "0" + Number(ss);
  }
  if (mts < 10) {
    mts = "0" + Number(mts);
  }
  //условие для часов
  if (hs < 10) {
    hs = "0" + Number(hs);
  }
  return hs + ":" + mts + ":" + ss + "." + msOutput;
} //end count
