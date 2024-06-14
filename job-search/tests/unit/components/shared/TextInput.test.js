import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import TextInput from '@/components/shared/TextInput.vue';
import { describe, it } from 'vitest';

describe('test input', () => {
  it('communicates that user has entered chars', async () => {
    const { emitted } = render(TextInput, {
      props: {
        modelValue: '',
      },
    });
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test');
    const messages = emitted()['update:modelValue'];
    expect(messages).toEqual([['t'], ['te'], ['tes'], ['test']]);
  });
});
