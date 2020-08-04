import './styles.scss';

window.addEventListener('load', () => {
    const firstLecturerOpenButton = document.querySelector('[data-js="FirstLecturerOpenButton"]');
    const firstLecturerPopup = document.querySelector('[data-js="FirstLecturerPopup"]');
    const firstLecturerPopupCloseButton = document.querySelector('[data-js="FirstLecturerPopupCloseButton"]');
    const secondLecturerButton = document.querySelector('[data-js="SecondLecturerOpenButton"]');
    const secondLecturerPopup = document.querySelector('[data-js="SecondLecturerPopup"]');
    const secondLecturerPopupCloseButton = document.querySelector('[data-js="SecondLecturerPopupCloseButton"]');
    const form = document.querySelector('[data-js="Form"]');

    setHeaderActive();

    window.addEventListener("scroll", (ev) => {
        setHeaderActive();
    });

    firstLecturerOpenButton?.addEventListener('click', () => {
        firstLecturerPopup?.classList.add('hero-popup__active');
    });

    firstLecturerPopupCloseButton?.addEventListener('click', () => {
        firstLecturerPopup?.classList.remove('hero-popup__active');
    });

    secondLecturerButton?.addEventListener('click', () => {
        secondLecturerPopup?.classList.add('hero-popup__active');
    });

    secondLecturerPopupCloseButton?.addEventListener('click', () => {
        secondLecturerPopup?.classList.remove('hero-popup__active');
    });

    form?.addEventListener('submit', (ev) => {
        ev.preventDefault();

        fetch(`/mail.php`, {
            method: "POST",
            // @ts-ignore
            body: new FormData().append('email', form.email.value)
        }).then(() => {
            form.email.value = '';
            document.querySelector('[data-js="ThankYou"]')?.classList.add('contact__thank-you--active');
        });
    });
});

function setHeaderActive(): void {
    const header = document.querySelector('[data-js="Header"]');

    if (window.pageYOffset > 100) {
        header?.classList.add('header--active');
    } else if (window.pageYOffset) {
        header?.classList.remove('header--active');
    }
}