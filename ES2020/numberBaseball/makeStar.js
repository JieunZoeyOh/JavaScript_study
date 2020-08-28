let n = 0;
while (n < 5) {
  n++;
  console.log(
    ' '.repeat(Math.abs(n - 3)) + '*'.repeat(5 - Math.abs(n - 3) * 2)
  );
}

n = 0;
while (n < 5) {
  n++;
  console.log(
    ' '.repeat(Math.abs(n - 3) * 2) + '*'.repeat(5 - Math.abs(n - 3) * 2)
  );
}
