import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import Card from '../components/Card';

describe('Card component', () => {
  const product = jest.fn({
    id: 1,
    name: 'Sample Item',
    image: 'sample image',
    price: 1200,
  });

  it('render a name of the item', () => {
    render(<Card product={product} />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });
});
