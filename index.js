let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.texColor = "#ffffff"
tg.MainButton.color = "#000000"

let item = ""

let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")
let btn3 = document.getElementById("3")
let btn4 = document.getElementById("4")
let btn5 = document.getElementById("5")
let btn6 = document.getElementById("6")

btn1.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide()
  } else {
    tg.MainButton.setText("Вы выбралди товар 1!")
    item = "1"
    tg.MainButton.show()
  }
})

btn2.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide()
  } else {
    tg.MainButton.setText("Вы выбралди товар 2!")
    item = "2"
    tg.MainButton.show()
  }
})

btn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide()
  } else {
    tg.MainButton.setText("Вы выбралди товар 3!")
    item = "3"
    tg.MainButton.show()
  }
})

btn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide()
  } else {
    tg.MainButton.setText("Вы выбралди товар 4!")
    item = "4"
    tg.MainButton.show()
  }
})

btn5.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide()
  } else {
    tg.MainButton.setText("Вы выбралди товар 5!")
    item = "5"
    tg.MainButton.show()
  }
})

btn6.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide()
  } else {
    tg.MainButton.setText("Вы выбралди товар 6!")
    item = "6"
    tg.MainButton.show()
  }
})

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(item)
})

let userCard = document.getElementById("user-card")
let p = document.createElement("p")
p.innerText = `${tg.initDataUnsave.first_name}`

userCard.appendChild(p)
