﻿// Логирование сессии (объявлено через expression)

let session = new Map();
let sessionLog = function logSession() {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}
function checkAge() {
    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
        a = true + 20 + "name"
    }
}

function handleSession() {
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)

    session.set("startDate", new Date().toLocaleString())
    

    return session;
}
function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    30000);


