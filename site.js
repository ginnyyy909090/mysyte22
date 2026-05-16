// ==========================================
// 1. ОБРАБОТКА ФОРМЫ ОБРАТНОЙ СВЯЗИ (contact.html)
// ==========================================

// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('callback-form');
    const statusDiv = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Отменяем перезагрузку страницы

            // Получаем значения полей
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const topic = document.getElementById('topic').value;
            const message = document.getElementById('message').value.trim();

            // Валидация: обязательны имя, телефон и сообщение
            if (name === '' || phone === '' || message === '') {
                showStatus('❌ Пожалуйста, заполните все обязательные поля!', '#ffaaaa');
                return;
            }

            // Если email заполнен, проверяем его формат
            if (email !== '') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    showStatus('❌ Введите корректный email (например, name@domain.ru)', '#ffaaaa');
                    return;
                }
            }

            // Имитация отправки данных на сервер (можно заменить на реальный fetch)
            console.log('Отправка данных:', { name, phone, email, topic, message });

            // Сообщение об успехе
            showStatus('✅ Спасибо! Мы свяжемся с вами в ближайшее время.', '#a5d6a5');
            form.reset(); // Очищаем форму
        });
    }

    
    function showStatus(text, color) {
        if (statusDiv) {
            statusDiv.textContent = text;
            statusDiv.style.color = color;
            setTimeout(() => {
                statusDiv.textContent = '';
            }, 5000);
        }
    }
});

const teamMembers = [
    {
        name: "Алексей Воронов",
        position: "Управляющий партнёр",
        bio: "Арбитражные споры, 18 лет практики",
        img: "imagers/avatar1.jpg"
    },
    {
        name: "Мария Соколова",
        position: "Руководитель семейной практики",
        bio: "Семейное право, защита детей",
        img: "imagers/avatar2.jpg"
    },
    {
        name: "Дмитрий Кравцов",
        position: "Адвокат по уголовным делам",
        bio: "Бывший следователь, 12 лет в адвокатуре",
        img: "imagers/avatar3.jpg"
    },
    {
        name: "Елена Петрова",
        position: "Корпоративный юрист",
        bio: "Слияния и поглощения, договорная работа",
        img: "imagers/avatar4.jpg"
    }
];

// Массив практик (строки)
const practices = [
    "Арбитражные споры",
    "Банкротство юридических лиц",
    "Семейные споры",
    "Наследственное право",
    "Уголовная защита бизнеса",
    "Трудовые конфликты"
];

// Функция для отображения команды
function renderTeam() {
    const container = document.getElementById('team-container');
    if (!container) return;

    container.innerHTML = ''; // Очищаем контейнер

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <h3>${member.name}</h3>
            <div class="position">${member.position}</div>
            <p>${member.bio}</p>
        `;
        container.appendChild(card);
    });
}

// Функция для отображения практик
function renderPractices() {
    const container = document.getElementById('practices-container');
    if (!container) return;

    container.innerHTML = '';
    practices.forEach(practice => {
        const li = document.createElement('li');
        li.textContent = practice;
        container.appendChild(li);
    });
}

// Если мы на странице aboutus.html – запускаем отрисовку
if (document.getElementById('team-container')) {
    renderTeam();
    renderPractices();
}