'use strict';

const btnDown = document.querySelector('.btn-down');
const btnUp = document.querySelector('.btn-up');
const countEl = document.querySelector('.count');

let count = 0;

function decrease() {
  // count -= 1;
  count--;

  countEl.innerText = count;
}

btnDown.addEventListener('click', decrease);

btnUp.addEventListener('click',function(){
  count++;
  countEl.innerText = count ;
})