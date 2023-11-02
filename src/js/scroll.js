document.querySelector('.scroll-button').addEventListener('click', function (event) {
    event.preventDefault();
    const targetElement = document.getElementById('box2');
    const yOffset = targetElement.getBoundingClientRect().top;
    window.scrollBy({ top: yOffset, behavior: 'smooth' });
})