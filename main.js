let button = document.querySelector('button');

let li = document.getElementsByTagName('li');

button.addEventListener('click', () => {
    if (li[0].classList.contains('active')) {
        li[0].classList.remove('active');
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = 'blue';
        }
    } else {
        for (let i = 0; i < li.length; i++) {
            li[i].classList.add('active');
            li[i].style.color = 'red';
        }

    }
});
