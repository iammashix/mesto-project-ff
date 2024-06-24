// открытие попапа
export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.body.style.overflow = 'hidden'; 
    document.addEventListener('keydown', handleEscClose); 
}

// закрытие попапа
export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.body.style.overflow = ''; 
    document.removeEventListener('keydown', handleEscClose); 
}

// Esc
function handleEscClose(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup.popup_is-opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
}

// Закрытие при клике на оверлей
function handleOverlayClick(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(event.target);
    }
}

export function addOverlayCloseHandler(popup) {
    popup.addEventListener('click', handleOverlayClick);
}
