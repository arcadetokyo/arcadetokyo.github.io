const button = document.getElementById('changeTextBtn');
const paragraph = document.getElementById('paragraph');

button.addEventListener('click', function() {
    paragraph.textContent = '☆ You clicked the button! ☆';
});