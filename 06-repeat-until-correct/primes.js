let i;
let j;
let needPrint;

for (i = 2; i <= 10; i++) { // eslint-disable-line no-plusplus
  needPrint = true;
  for (j = 2; j <= i - 1; j++) { // eslint-disable-line no-plusplus
    if (i % j === 0) { needPrint = false; }
  }
  if (needPrint) { alert(i); } // eslint-disable-line no-alert
}
