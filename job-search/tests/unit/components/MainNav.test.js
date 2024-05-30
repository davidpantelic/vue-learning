import { render, screen } from '@testing-library/vue';
import { userEvent } from '@testing-library/user-event';

import MainNav from '@/components/MainNav.vue';
import { describe, expect } from 'vitest';

describe('MainNav test', () => {
  it('displays company name', () => {
    render(MainNav, {
      // use below to overrite data just in testing
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

  describe('when user log in', () => {
    it('displays profile picture', async () => {
      render(MainNav);
      let profileImage = screen.queryByRole('img', {
        name: /david profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', {
        name: /sign in/i,
      });
      expect(loginButton).toBeInTheDocument();
      await userEvent.click(loginButton);
      profileImage = screen.getByRole('img', {
        name: /david profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
