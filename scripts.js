document.getElementById('randomBtn').addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    alert(`Número elegido al azar: ${randomNumber}`);
});
