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
  let button = document.getElementById("keyboard");
  button.classList.remove("hidden");
}

function printNumber(event) {
  dollar.value += event.srcElement.innerText;
}

function clearInput() {
  dollar.value = "";
  rub.value = "";
}
