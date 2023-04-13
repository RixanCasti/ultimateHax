const injectHack = () => {
    const body = document.getElementsByClassName('gameframe')[0].contentDocument.body;
    let script = document.createElement('script');
    script.src = 'https://rixcasti.000webhostapp.com/ultimateHax.js';
    body.appendChild(script);
}

const addStyle = () => {
    document.getElementsByClassName('rightbar')[0].remove():

    const body = document.getElementsByClassName('gameframe')[0].contentDocument.body;
    const header = document.getElementsByClassName('header')[0];
    const input = document.createElement('input');

    input.type = 'text';
    input.style.backgroundColor = '#111111';
    input.style.border = 'none';
    input.style.color = '#888888';
    input.style.padding = '1px';

    input.addEventListener('keyup', e => {
        if (e.key === 'Enter' && input.value.startsWith('https://www.haxball.com/play?c='))
            window.location.href = input.value;
    });

    window.setInterval(() => {
        try {
            body.getElementsByClassName('show-hide-link')[0].addEventListener('click', () => {
                input.style.display === 'none' ? input.style.display = '' : input.style.display = 'none';
            })
        } catch(e) {}
    }, 1000);

    header.parentNode.replaceChild(input, header);
}

window.addEventListener('DOMContentLoaded', () => {
    injectHack();
    addStyle();
});
