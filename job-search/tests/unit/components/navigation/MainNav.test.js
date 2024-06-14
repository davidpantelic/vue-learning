import { render, screen } from '@testing-library/vue';
import { userEvent } from '@testing-library/user-event';

import MainNav from '@/components/navigation/MainNav.vue';

describe('MainNav test', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  };

  it('displays company name', () => {
    renderMainNav();
    const companyName = screen.getByText('David Careers');
    expect(companyName).toBeInTheDocument();
  });
  it('displays menu items for nav', () => {
    renderMainNav();
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
      renderMainNav();
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
