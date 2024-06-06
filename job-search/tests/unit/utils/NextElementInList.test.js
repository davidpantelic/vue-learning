import nextElementInList from '@/utils/nextElementInLIst';
import { expect } from 'vitest';

describe('nextElementInList', () => {
  it('locates element in list and returns next element', () => {
    const list = ['A', 'B', 'C', 'D', 'E'];
    const value = 'C';
    const result = nextElementInList(list, value);
    expect(result).toBe('D');
  });

  describe('when element is at the end of list', () => {
    it('locates next element at start of list', () => {
      const list = ['A', 'B', 'C', 'D', 'E'];
      const value = 'E';
      const result = nextElementInList(list, value);
      expect(result).toBe('A');
    });
  });
});
