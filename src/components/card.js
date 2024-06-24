// создание карточки
export function createCard(cardTemplate, cardData, deleteCallback, likeCallback, openImageCallback) {
    const cardElement = cardTemplate.cloneNode(true).querySelector('.card');
    const cardImage = cardElement.querySelector('.card__image');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;

    cardImage.addEventListener('click', () => openImageCallback(cardData.link, cardData.name));
    cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCallback);
    likeButton.addEventListener('click', likeCallback);

    return cardElement;
}

// удаление карточки
export function deleteCard(event) {
    const card = event.target.closest('.card');
    card.remove();
}

// лайк карточки
export function likeCard(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('card__like-button_is-active');
    console.log(`Like button clicked: ${likeButton.classList}`);
}
