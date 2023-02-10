'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent('We use cookie for improved functionality and analytics');
message.innerHTML = 'We use cookie for improved functionality and analytics . <button class = "btn btn--close--cookie">Got it</button>';

// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);

//Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', function(){
  message.remove();
})
