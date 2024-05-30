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
  it('displays menu items for nav', () => {
    render(MainNav);
    const navMenuItems = screen.getAllByRole('listitem');
    const navMenuItemsTexts = navMenuItems.map((item) => item.textContent);
    expect(navMenuItemsTexts).toEqual([
      'Teams',
      'Locations',
      'Life at',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
});
