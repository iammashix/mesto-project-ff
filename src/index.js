import './pages/index.css';
import initialCards from './cards.js';
import avatar from './images/avatar.jpg';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { openPopup, closePopup, addOverlayCloseHandler } from './components/modal.js';

const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

// Константы DOM
const editProfilePopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupImage = imagePopup.querySelector('.popup__image');
const imagePopupCaption = imagePopup.querySelector('.popup__caption');
const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// фото профиля
document.querySelector('.profile__image').style.backgroundImage = `url(${avatar})`;

// открытие попапа с изображением
export function openImagePopup(imageSrc, imageAlt) {
    imagePopupImage.src = imageSrc;
    imagePopupImage.alt = imageAlt;
    imagePopupCaption.textContent = imageAlt;
    openPopup(imagePopup);
}

// вывод карточек 
function showCards(cards) {
    cards.forEach((cardData) => {
        const cardElement = createCard(cardTemplate, cardData, deleteCard, likeCard, openImagePopup);
        cardList.append(cardElement);
    });
}

showCards(initialCards);

// форма DOM
const editProfileForm = document.querySelector('.popup__form[name="edit-profile"]'); 
const nameInput = editProfileForm.querySelector('.popup__input_type_name'); 
const jobInput = editProfileForm.querySelector('.popup__input_type_description');

// обработчик формы
function handleEditProfileFormSubmit(evt) {
    evt.preventDefault(); 
  
    const newName = nameInput.value;
    const newJob = jobInput.value;

    profileTitle.textContent = newName;
    profileDescription.textContent = newJob;

    closePopup(editProfilePopup);
}

// submit формы
editProfileForm.addEventListener('submit', handleEditProfileFormSubmit);

// новая карточка
const newCardForm = document.querySelector('.popup__form[name="new-place"]');
const cardNameInput = newCardForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = newCardForm.querySelector('.popup__input_type_url');

// submit для новой карточки
function handleNewCardFormSubmit(evt) {
    evt.preventDefault(); 
    const cardName = cardNameInput.value;
    const cardLink = cardLinkInput.value;

    const newCard = createCard(cardTemplate, { name: cardName, link: cardLink }, deleteCard, likeCard, openImagePopup);
    cardList.prepend(newCard);

    newCardForm.reset();
    closePopup(newCardPopup);
}

// обработчик submit новой карточки
newCardForm.addEventListener('submit', handleNewCardFormSubmit);

// обработчики событий для открытия попапов
editProfileButton.addEventListener('click', () => {
    openPopup(editProfilePopup);
    nameInput.value = profileTitle.textContent; 
    jobInput.value = profileDescription.textContent; 
});
addCardButton.addEventListener('click', () => openPopup(newCardPopup));

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
    addOverlayCloseHandler(popup); // Добавляем обработчик клика на оверлей для каждого попапа
});
