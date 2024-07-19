// menu

export default function loadMenu() {
    const content = document.querySelector('#content');

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('toggled');
    });

    const btn = document.querySelector('#menubtn');
    btn.classList.add('toggled');

    content.innerHTML = '';

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = '/assets/menu.png';
    image.height = '1000';

    pageContent.appendChild(image);

    content.appendChild(pageContent);


    return content;
}