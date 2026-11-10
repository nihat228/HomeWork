let balance = 1000;
let operations = 0;
let attempts = 0;
let pinCorrect = false;

while (attempts < 3) {
  let pin = prompt("Введите PIN-код:");

  if (pin === "0000") {
    pinCorrect = true;
    break;
  } 
  else {
    attempts++;
    alert("Неверный PIN-код. Осталось попыток: " + (3 - attempts));
  }
}

if (pinCorrect === false) {
  alert("Карта заблокирована");
} 
else {
  let choice;

  while (choice !== "0") {
    choice = prompt(
      "1 — баланс\n2 — снять\n3 — пополнить\n0 — выход"
    );

    switch (choice) {
      case "1":
        alert("Ваш баланс: " + balance + " AZN");
        break;

      case "2": {
        let amount = Number(prompt("Введите сумму для снятия:"));

        if (amount > 0 && amount % 5 === 0) {
          if (amount <= balance) {
            balance = balance - amount;
            operations++;
            alert("Снято: " + amount + " AZN");
          } 
          else {
            alert("Недостаточно денег на счёте");
          }
        } 
        else {
          alert("Введите сумму больше 0, кратную 5");
        }
        break;
      }

      case "3": {
        let amount = Number(prompt("Введите сумму для пополнения:"));

        if (amount > 0 && amount % 5 === 0) {
          balance = balance + amount;
          operations++;
          alert("Счёт пополнен на " + amount + " AZN");
        } 
        else {
          alert("Введите сумму больше 0, кратную 5");
        }
        break;
      }

      case "0":
        alert(
          "Снято и пополнено операций: " + operations +
          "\nОстаток: " + balance + " AZN"
        );
        break;

      default:
        alert("Такого пункта нет");
    }
  }
}