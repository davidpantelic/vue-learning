import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import JobSearchForm from '@/components/jobSearch/JobSearchForm.vue';
import { expect } from 'vitest';

describe('The Job search form test', () => {
  describe('when user submits form', () => {
    it('directs user to job results page with params', async () => {
      const push = vi.fn();
      const $router = { push };
      render(JobSearchForm, {
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = screen.getByRole('textbox', {
        name: /role/i,
      });
      await userEvent.type(roleInput, 'FE Dev');

      const locationInput = screen.getByRole('textbox', {
        name: /where?/i,
      });
      await userEvent.type(locationInput, 'Osecina');

      const submitButton = screen.getByRole('button', {
        name: /search/i,
      });
      await userEvent.click(submitButton);

      expect(push).toHaveBeenCalledWith({
        name: 'JobResults',
        query: {
          role: 'FE Dev',
          location: 'Osecina',
        },
      });
    });
  });
});
