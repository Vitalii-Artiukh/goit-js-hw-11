import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeForTimer = selectedDates[0].getTime() - Date.now();

    if (timeForTimer < 0) {
      btnStartTimer.disabled = true;

      iziToast.error({
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        backgroundColor: 'red',
        close: false,
        position: 'topRight',
      });
      return;
    }

    btnStartTimer.disabled = false;
    userSelectedDate = selectedDates[0];
  },
};

const dateInputEl = document.querySelector('#datetime-picker');
const btnStartTimer = document.querySelector('.input-button > button');
const textValue = document.querySelectorAll('.timer .value');

btnStartTimer.addEventListener('click', startTimer);

btnStartTimer.disabled = true;

let userSelectedDate = 0;
let timeForTimer = 0;
let time;
let diffTime;
let dataTime;

flatpickr(dateInputEl, flatpickrOptions);

const addLeadingZero = value => {
  textValue[0].textContent = String(value.days).padStart(2, '0');
  textValue[1].textContent = String(value.hours).padStart(2, '0');
  textValue[2].textContent = String(value.minutes).padStart(2, '0');
  textValue[3].textContent = String(value.seconds).padStart(2, '0');
};

function startTimer(event) {
  time = Date.now();
  diffTime = userSelectedDate - time;
  dataTime = convertMs(diffTime);

  addLeadingZero(dataTime);

  dateInputEl.disabled = true;
  btnStartTimer.disabled = true;

  const timerId = setInterval(() => {
    time = Date.now();
    diffTime = userSelectedDate - time;

    if (Math.floor(diffTime / 1000) === 0) {
      clearInterval(timerId);
      dateInputEl.disabled = false;

      iziToast.show({
        title: 'Success',
        message: 'Timer is FINISH',
        messageColor: '#f7f7f7',
        titleColor: '#f6f6f6',
        backgroundColor: 'green',
        close: false,
        position: 'topRight',
      });
    }

    dataTime = convertMs(diffTime);

    addLeadingZero(dataTime);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
