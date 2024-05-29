import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';
import { expect } from 'vitest';

describe('MainNav test', () => {
  it('displays company name', () => {
    render(MainNav, {
      // data() {
      //   return {
      //     company: 'Super',
      //   };
      // },
    });
    const companyName = screen.getByText('David Careers');
    expect(companyName).toBeInTheDocument();
  });
});
