import { describe, it, expect } from 'vitest';
import { evenOrOdd } from '@/playground';

describe('job search unit testing', () => {
  it('add two numbers', () => {
    expect(1 + 1).toBe(2);
  });
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
