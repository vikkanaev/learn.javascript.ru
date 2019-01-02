const userName = prompt('Кто пришел?', ''); // eslint-disable-line no-alert

if (userName === 'Админ') {
  const pass = prompt('Пароль?'); // eslint-disable-line no-alert

  if (pass === 'Чёрный Властелин') {
    alert('Добро пожаловать!'); // eslint-disable-line no-alert
  } else if (pass === null) {
    alert('Вход отменён'); // eslint-disable-line no-alert
  } else {
    alert('Пароль неверен'); // eslint-disable-line no-alert
  }
} else if (userName === null || userName === '') {
  alert('Вход отменён'); // eslint-disable-line no-alert
} else {
  alert('Я вас не знаю'); // eslint-disable-line no-alert
}
