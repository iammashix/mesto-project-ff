// открытие попапа
export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.body.style.overflow = 'hidden'; // блокируем скролл body
    document.addEventListener('keydown', handleEscClose); // добавляем обработчик Esc
}

// закрытие попапа
export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.body.style.overflow = ''; // разблокируем скролл body
    document.removeEventListener('keydown', handleEscClose); // удаляем обработчик Esc
}

// Esc
function handleEscClose(event) {
    if (event.key === 'Escape') {
        const openedPopups = document.querySelectorAll('.popup.popup_is-opened');
        openedPopups.forEach((popup) => {
            closePopup(popup);
        });
    }
}
