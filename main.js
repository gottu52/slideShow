'use strict'

{
    const images = [
        'img/pic00.png',
        'img/pic01.png',
        'img/pic02.png',
        'img/pic03.png',
        'img/pic04.png',
        'img/pic05.png',
        'img/pic06.png',
        'img/pic07.png',
    ]
    let currentIndex = 0;

    const mainImage = document.querySelector('#main');
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        const li = document.createElement('li');
        if(index === currentIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image 
            const thumb = document.querySelectorAll('.thumb > li');
            thumb[currentIndex].classList.remove('current');
            currentIndex = index;
            thumb[currentIndex].classList.add('current');
        });
        li.appendChild(img);
        document.querySelector('.thumb').appendChild(li);
    })

    const next = document.querySelector('#next');
    next.addEventListener('click', () => {
        let target =  currentIndex + 1;
        if(target === images.length) {
            target = 0;
        }
        document.querySelectorAll('.thumb > li')[target].click();
    })
    const prev = document.querySelector('#prev');
    prev.addEventListener('click', () => {
        let target =  currentIndex - 1;
        if(target === -1) {
            target = images.length - 1;
        }
        document.querySelectorAll('.thumb > li')[target].click();
    })

    let timeoutId;
    const playSlideShow = () => {
        timeoutId = setTimeout(() => {
            next.click();
            playSlideShow();
        }, 1000);
    }
    let isPlaying = false;
    const play = document.querySelector('#play');
    play.addEventListener('click', () => {
        if (isPlaying === false) {
            playSlideShow();  
            play.textContent = 'Pause';
        } else {
            clearTimeout(timeoutId);
            play.textContent = 'Play';
        }
        isPlaying = !isPlaying;
    })
}