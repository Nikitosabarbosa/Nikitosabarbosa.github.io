let dollar = document.getElementById("DollarInput");
let rub = document.getElementById("RubInput");

async function calc() {
  let price = await main();
  rub.value = dollar.value * price;
}
async function main() {
  try {
    let price = await getUsdToRubRate(); // Дожидаемся выполнения промиса
    console.log("Курс USD → RUB:", price); // Теперь это значение, а не Promise
    console.log(price);
    return price;
  } catch (error) {
    console.error("Ошибка при получении курса:", error); // Обрабатываем возможные ошибки
  }
}

async function getUsdToRubRate() {
  const apiKey = "6fe96b552f77475590c60642a7cd2375";
  const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.rates.RUB);
    return data.rates.RUB;
  } catch (error) {
    console.error("Ошибка при получении курса USD → RUB:", error);
    throw error;
  }
}

function buttons() {
  let button1 = document.getElementById("1");
  let button2 = document.getElementById("2");
  let button3 = document.getElementById("3");
  let button4 = document.getElementById("4");
  let button5 = document.getElementById("5");
  let button6 = document.getElementById("6");
  let button7 = document.getElementById("7");
  let button8 = document.getElementById("8");
  let button9 = document.getElementById("9");
  button1.classList.remove("hidden");
  button2.classList.remove("hidden");
  button3.classList.remove("hidden");
  button4.classList.remove("hidden");
  button5.classList.remove("hidden");
  button6.classList.remove("hidden");
  button7.classList.remove("hidden");
  button8.classList.remove("hidden");
  button9.classList.remove("hidden");
  console.dir(button1);
}

function printOne() {
  dollar.value += "1";
}

function printTwo() {
  dollar.value += "2";
}

function printThree() {
  dollar.value += "3";
}

function printFour() {
  dollar.value += "4";
}

function printFive() {
  dollar.value += "5";
}

function printSix() {
  dollar.value += "6";
}

function printSeven() {
  dollar.value += "7";
}

function printEight() {
  dollar.value += "8";
}

function printNine() {
  dollar.value += "9";
}
