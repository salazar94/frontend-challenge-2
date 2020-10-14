const show = document.querySelector('#showShare');
const hidden = document.querySelector('#hiddenShare');
const cardShare = document.querySelector('.block');
const cardFooter = document.querySelector('.card-body__footer');

function hiddeClass() {
    cardShare.classList.toggle('hidden');
    cardFooter.classList.toggle('hidden');
}

window.onload = () => {    
    show.addEventListener('click', () => hiddeClass());
    hidden.addEventListener('click', () => hiddeClass());
}

