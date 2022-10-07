// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку". 

// Email должен быть кликабельным.
// Фото должно отображаться.

// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

// После отправки необходимо очистить инпуты.

const form = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards_container');
let cards_info = [];

// //1. при отправке формы данные записываются в массив cards_info в виде объектов + вызывается функция рендера
form.addEventListener('submit', event => {
  event.preventDefault();

  const { firstname,  lastname, email, photo } = event.target;

  cards_info.push({
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    photo: photo.value
  });

  firstname.value = '';
  lastname.value = '';
  email.value = '';
  photo.value = '';

  // render();
  render(cards_info[cards_info.length - 1]);
})



// 2. из массива cards_info достаем данные и рендерим из них карточки
const render = () => {
  cardsContainer.innerText = ''; // очищаем контейнер перед новым рендером
  cards_info.forEach(({ firstname, lastname, email, photo }) => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const emailContainer = document.createElement('div');
    const emailElem = document.createElement('a');
    const emailTextElem = document.createElement('span');
    const photoElem = document.createElement('img');

    nameElem.innerText = `Name: ${firstname} ${lastname}`;
    emailElem.innerText = email;
    emailTextElem.innerText = 'Email: ';

    emailElem.href = `mailto:${email}`;
    photoElem.src = photo;
    photoElem.alt = 'photo';

    cardElem.classList.add('card');
    photoElem.classList.add('photo');

    emailContainer.append(emailTextElem, emailElem);
    cardElem.append(nameElem, emailContainer, photoElem);
    cardsContainer.append(cardElem);
  })
} 

// 2. Вариант 2
/* const render = ({ firstname, lastname, email, photo }) => {
  const cardElem = document.createElement('div');
  const nameElem = document.createElement('p');
  const emailContainer = document.createElement('div');
  const emailElem = document.createElement('a');
  const emailTextElem = document.createElement('span');
  const photoElem = document.createElement('img');
  nameElem.innerText = `Name: ${firstname} ${lastname}`;
  emailElem.innerText = email;
  emailTextElem.innerText = 'Email: ';
  emailElem.href = `mailto:${email}`;
  photoElem.src = photo;
  photoElem.alt = 'photo';
  cardElem.classList.add('card');
  photoElem.classList.add('photo');
  emailContainer.append(emailTextElem, emailElem);
  cardElem.append(nameElem, emailContainer, photoElem);
  cardsContainer.append(cardElem);
} */



//Что мы делаем:
//1. при отправке формы данные записываются в массив cards_info в виде объектов
//2. из массива cards_info с {} достаем данные и рендерим из них карточки