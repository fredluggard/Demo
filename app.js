const ham = document.querySelector('.hamburger');
const active = document.querySelector('.overlay');
const work = document.querySelector('.work');
const work1 = document.querySelector('.work1');
const work2 = document.querySelector('.work2');
const work3 = document.querySelector('.work3');
const work4 = document.querySelector('.work4');
const work5 = document.querySelector('.work5');
const work6 = document.querySelector('.work6');

ham.addEventListener('click', () => {
    if (ham.classList.contains('hamburger')) {
        ham.classList.add('slick');
        ham.classList.remove('hamburger');
        active.classList.add('active');
        active.classList.remove('overlay');
    }
    else{
        ham.classList.add('hamburger');
        ham.classList.remove('slick');
        active.classList.add('overlay');
        active.classList.remove('active');
    }
});

work.addEventListener('click', () => {
    if (work.classList.contains('work')) {
        work.classList.remove('work');
        work.classList.add('pinch');
        work1.classList.remove('pinch');
        work2.classList.remove('pinch');
        work3.classList.remove('pinch');
        work4.classList.remove('pinch');
        work5.classList.remove('pinch');
        work6.classList.remove('pinch');
        work1.classList.add('work1');
        work2.classList.add('work2');
        work3.classList.add('work3');
        work4.classList.add('work4');
        work5.classList.add('work5');
        work6.classList.add('work6');
    }
    else{
        work.classList.add('work');
        work.classList.remove('pinch');
    }
});
work1.addEventListener('click', () => {
    if (work1.classList.contains('work1')) {
        work1.classList.remove('work1');
        work1.classList.add('pinch');
        work.classList.remove('pinch');
        work2.classList.remove('pinch');
        work3.classList.remove('pinch');
        work4.classList.remove('pinch');
        work5.classList.remove('pinch');
        work6.classList.remove('pinch');
        work.classList.add('work');
        work2.classList.add('work2');
        work3.classList.add('work3');
        work4.classList.add('work4');
        work5.classList.add('work5');
        work6.classList.add('work6');
    }
    else{
        work1.classList.add('work1');
        work1.classList.remove('pinch');
    }
});
work2.addEventListener('click', () => {
    if (work2.classList.contains('work2')) {
        work2.classList.remove('work2');
        work2.classList.add('pinch');
        work1.classList.remove('pinch');
        work.classList.remove('pinch');
        work3.classList.remove('pinch');
        work4.classList.remove('pinch');
        work5.classList.remove('pinch');
        work6.classList.remove('pinch');
        work1.classList.add('work1');
        work.classList.add('work');
        work3.classList.add('work3');
        work4.classList.add('work4');
        work5.classList.add('work5');
        work6.classList.add('work6');
    }
    else{
        work2.classList.add('work2');
        work2.classList.remove('pinch');
    }
});
work3.addEventListener('click', () => {
    if (work3.classList.contains('work3')) {
        work3.classList.remove('work3');
        work3.classList.add('pinch');
        work1.classList.remove('pinch');
        work2.classList.remove('pinch');
        work.classList.remove('pinch');
        work4.classList.remove('pinch');
        work5.classList.remove('pinch');
        work6.classList.remove('pinch');
        work1.classList.add('work1');
        work2.classList.add('work2');
        work.classList.add('work');
        work4.classList.add('work4');
        work5.classList.add('work5');
        work6.classList.add('work6');
    }
    else{
        work3.classList.add('work3');
        work3.classList.remove('pinch');
    }
});
work4.addEventListener('click', () => {
    if (work4.classList.contains('work4')) {
        work4.classList.remove('work4');
        work4.classList.add('pinch');
        work1.classList.remove('pinch');
        work2.classList.remove('pinch');
        work3.classList.remove('pinch');
        work.classList.remove('pinch');
        work5.classList.remove('pinch');
        work6.classList.remove('pinch');
        work1.classList.add('work1');
        work2.classList.add('work2');
        work3.classList.add('work3');
        work.classList.add('work');
        work5.classList.add('work5');
        work6.classList.add('work6');
    }
    else{
        work4.classList.add('work4');
        work4.classList.remove('pinch');
    }
});
work5.addEventListener('click', () => {
    if (work5.classList.contains('work5')) {
        work5.classList.remove('work5');
        work5.classList.add('pinch');
        work1.classList.remove('pinch');
        work2.classList.remove('pinch');
        work3.classList.remove('pinch');
        work4.classList.remove('pinch');
        work.classList.remove('pinch');
        work6.classList.remove('pinch');
        work1.classList.add('work1');
        work2.classList.add('work2');
        work3.classList.add('work3');
        work4.classList.add('work4');
        work.classList.add('work');
        work6.classList.add('work6');
    }
    else{
        work5.classList.add('work5');
        work5.classList.remove('pinch');
    }
});
work6.addEventListener('click', () => {
    if (work6.classList.contains('work6')) {
        work6.classList.remove('work6');
        work6.classList.add('pinch');
        work1.classList.remove('pinch');
        work2.classList.remove('pinch');
        work3.classList.remove('pinch');
        work4.classList.remove('pinch');
        work5.classList.remove('pinch');
        work.classList.remove('pinch');
        work1.classList.add('work1');
        work2.classList.add('work2');
        work3.classList.add('work3');
        work4.classList.add('work4');
        work5.classList.add('work5');
        work.classList.add('work');
    }
    else{
        work6.classList.add('work6');
        work6.classList.remove('pinch');
    }
});