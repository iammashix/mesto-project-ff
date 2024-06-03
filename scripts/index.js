
// Функция создания карточки
function createCard(cardData, deleteCallback) {
    const cardTemplate = document.querySelector('#card-template').content;
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

function outCards(cards) {
    const cardList = document.querySelector('.places__list');
    cards.forEach((cardData) => {
        const cardElement = createCard(cardData, deleteCard);
        cardList.append(cardElement);
    });
}

outCards(initialCards);