import { evenOrOdd, multiply } from '@/playground';

describe('job search unit testing', () => {
  describe('even or odd', () => {
    describe('when number is even', () => {
      it('indicates even number', () => {
        expect(evenOrOdd(4)).toBe('Even');
      });
    });
    describe('when number is odd', () => {
      it('indicates odd number', () => {
        expect(evenOrOdd(3)).toBe('Odd');
      });
    });
  });
});

describe('multiplay test', () => {
  it('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
