
// объявление констант 
const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// Функция создания карточки
function createCard(cardData, deleteCallback) {

    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardElement.querySelector('.card__image').src = cardData.link;
    cardElement.querySelector('.card__image').alt = cardData.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCallback);

    return cardElement;
}
// Функция удаления карточки
function deleteCard(event) {
    const card = event.target.closest('.card');
    card.remove();
}

// Вывод карточки на страницу

function showCards(cards) {
    cards.forEach((cardData) => {
        const cardElement = createCard(cardData, deleteCard);
        cardList.append(cardElement);
    });
}

showCards(initialCards);

