const scaleFactor = 1 / 20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    // Display loading overlay
    loading.classList.add("modal__overlay--visible");

    // EmailJS form submission
    emailjs
        .sendForm(
            'service_y37rl6q', // Your EmailJS Service ID
            'template_yn792b1', // Your EmailJS Template ID
            event.target, // Form event target
            'zG1sRaxRw-J7T7Qr1' // Your EmailJS public key
        ).then(() => {
            // Hide loading overlay and display success overlay
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
        }).catch(() => {
            // Hide loading overlay and show alert on failure
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at mckriskoo21@gmail.com."
            );
        });
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open');
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
