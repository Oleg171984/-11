
    const textBlock = document.getElementById('text-block');
    const button = document.getElementById('toggle-color-button');

    button.addEventListener('click', () => {
    textBlock.style.color = textBlock.style.color === 'black' ? 'red' : 'black';
});

