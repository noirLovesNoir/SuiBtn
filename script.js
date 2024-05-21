document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('button');
    const audio = new Audio('res/sui.mp3');

    button.addEventListener('click', () =>{
        audio.play();
    });
});