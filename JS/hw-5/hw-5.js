function check(a, b) {
  if(isNaN(Number(a)) || isNaN(Number(b))) {
    return('Одно или оба значения не являются числом');
  } else {
    return a * b;
  }
}

check(3, 4);
check(3, 'rrr');