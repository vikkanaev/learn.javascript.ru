let input = 0;

while (input <= 100) {
  input = prompt('Введите число больше 100'); // eslint-disable-line no-alert
  if (input === null) { break; }
}
