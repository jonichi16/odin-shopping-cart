import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShopPage from '@/app/shop/page';

describe('Shop Page', () => {
  it('render a header', () => {
    render(<ShopPage />);

    const heading = screen.getByRole('heading', { name: /equipments/i });

    expect(heading).toBeInTheDocument();
  });

  it('render correct number of items', () => {
    render(<ShopPage />);

    const listElement = screen.getByRole('list');
    const listItem = screen.getAllByRole('listitem');

    expect(listElement).toBeInTheDocument();
    expect(listItem.length).toBe(10);
  });
});
