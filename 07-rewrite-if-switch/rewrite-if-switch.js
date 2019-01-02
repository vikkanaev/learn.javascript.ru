const a = +prompt('a?', ''); // eslint-disable-line no-alert

switch (a) {
  case 0:
    alert(0); // eslint-disable-line no-alert
    break;
  case 1:
    alert(1); // eslint-disable-line no-alert
    break;
  case 2:
  case 3:
    alert('2,3'); // eslint-disable-line no-alert
    break;
  default:
}
