import { render, screen } from '@testing-library/vue';

import ActionButton from '@/components/ActionButton.vue';

describe('testing action button', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary',
      },
    });
    const button = screen.getByRole('button', {
      name: /click me/i,
    });
    expect(button).toBeInTheDocument();
  });
  it('applies class', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary',
      },
    });
    const button = screen.getByRole('button', {
      name: /click me/i,
    });
    expect(button).toHaveClass('primary');
  });
});
