import { render, screen } from '@testing-library/react';
import Overview from '../components/Overview.jsx';

describe('Overview', () => {
  it('renders a heading and list items', () => {
    const list = ['First', 'Second'];
    render(<Overview list={list} />);
    expect(screen.getByRole('heading', { name: /overview/i })).toBeInTheDocument();
    list.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
