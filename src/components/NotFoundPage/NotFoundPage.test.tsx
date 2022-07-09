import { NotFoundPage } from '@components/NotFoundPage';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderComponent = () => render(<NotFoundPage />);

describe('NotFoundPage component', () => {
  describe('Component exist', () => {
    it('notFoundPage check that the component has been rendered #smoke', () => {
      const { queryByTestId } = renderComponent();

      expect(queryByTestId('notFoundPage')).toBeInTheDocument();
    });
  });
});
