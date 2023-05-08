import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import Card from '../components/Card';

describe('Card component', () => {
  const product = {
    id: 1,
    image: {
      src: '/test.png',
      width: 250,
      height: 250,
    },
    name: 'Sample Item',
    price: 1200,
  };

  it('renders the correct component', () => {
    const { container } = render(<Card product={product} />);

    expect(container).toMatchSnapshot();
  });
});
