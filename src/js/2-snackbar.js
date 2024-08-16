import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
console.dir(form);

function promise(isDelay, isState) {
  return new Promise((resolve, reject) => {
    if (isDelay < 0) {
      iziToast.show({
        message: '❌ Enter a positive number',
        messageColor: '#ffffff',
        backgroundColor: '#ff4a4a',
        position: 'topRight',
      });
    } else {
      setTimeout(() => {
        if (isState === 'fulfilled') {
          resolve(isDelay);
        } else {
          reject(isDelay);
        }
      }, isDelay);
    }
  });
}

function execute(event) {
  event.preventDefault();

  const { delay, state } = event.currentTarget.elements;

  promise(delay.value, state.value)
    .then(delay => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay} ms`,
        messageColor: '#ffffff',
        backgroundColor: '#4fc04f',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms           `,
        messageColor: '#ffffff',
        backgroundColor: '#ff4a4a',
        position: 'topRight',
      });
    });

  form.reset();
}

form.addEventListener('submit', execute);
