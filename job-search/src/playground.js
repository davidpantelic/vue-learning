const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => {
  return number ** 2;
});
// arrow func in one line podrazumeva return
const squares2 = numbers.map((number) => number ** 2);

console.log(squares);
console.log(squares2);
