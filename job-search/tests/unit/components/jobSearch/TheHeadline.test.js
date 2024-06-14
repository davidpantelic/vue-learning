import { nextTick } from 'vue';
import { render, screen } from '@testing-library/vue';

import TheHeadline from '@/components/jobSearch/TheHeadline.vue';
import { beforeEach } from 'vitest';
// import nextElementInList from '@/utils/nextElementInLIst';

describe('The headline text', () => {
  // describe('vitest playground', () => {
  //   it('tracks whether it has been called', () => {
  //     const mockFunction = vi.fn();
  //     mockFunction(1, 2);
  //     expect(mockFunction).toHaveBeenCalledWith(1, 2);
  //   });
  // });

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('display intro action word', () => {
    render(TheHeadline);

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument;
  });

  it('changes action word at interval', () => {
    const mock = vi.fn();
    vi.stubGlobal('setInterval', mock);
    render(TheHeadline);
    expect(mock).toHaveBeenCalled();
  });

  it('swaps action word', async () => {
    render(TheHeadline);
    vi.advanceTimersToNextTimer();
    await nextTick();
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
  });

  it('removes interval when unmounted', () => {
    const clearIntervalMock = vi.fn();
    vi.stubGlobal('clearInterval', clearIntervalMock);
    const { unmount } = render(TheHeadline);
    unmount();

    expect(clearIntervalMock).toHaveBeenCalled();
  });
});
