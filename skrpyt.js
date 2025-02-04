const messages = [
    "Jesteś pewna??",
    "Na pewno??",
    "Ostatecznie?",
    "Ksieżniczko proszę...",
    "Przemyśl to!",
    "Jeśli nie to bede płakał...",
    "Bedę plakał tygodniami...",
    "Miesiącami...",
    "Dobra nie to nie...",
    "Żartuje, powiedz tak! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}