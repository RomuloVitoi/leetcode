/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [];

  for (let i = 1, fizz = 0, buzz = 0; i <= n; i++) {
    fizz++;
    buzz++;

    if (fizz === 3 && buzz === 5) {
      answer.push('FizzBuzz');
      fizz = 0;
      buzz = 0;
    } else if (fizz === 3) {
      answer.push('Fizz');
      fizz = 0;
    } else if (buzz === 5) {
      answer.push('Buzz');
      buzz = 0;
    } else {
      answer.push(String(i));
    }
  }

  return answer;
};
