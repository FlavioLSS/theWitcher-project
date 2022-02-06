function showGeralt(){
    let modal = document.querySelector('.modal')
    var test = document.querySelector('#cover')
    var hideCards = document.querySelector('#cards')

    hideCards.style.display = 'none';
    modal.style.display = 'flex';
    test.style.background = 'rgba(0, 0, 0, 0.6)';
    test.style.opacity = '.9';
    modal.style.opacity = '1';
}

function hideGeralt(){
    let hide = document.querySelector('.modal')
    var test = document.querySelector('#cover')
    var hideCards = document.querySelector('#cards')

    hide.style.display = 'none';
    test.style.opacity = '1';
    test.style.background = '#EAEAEA';
    hideCards.style.display = 'block';
}