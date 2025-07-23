import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';

describe('Header', () => {
  it('renders provided title', () => {
    render(
      <BrowserRouter>
        <Header title="Test Title" />
      </BrowserRouter>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('wraps long page names when navigation is open', async () => {
    render(
      <BrowserRouter>
        <Header title="Test" />
      </BrowserRouter>
    );
    await userEvent.click(screen.getByText(/navigate/i));
    const link = screen.getByText('Long page name to test if long page names wrap');
    expect(window.getComputedStyle(link).whiteSpace).toBe('normal');
  });
});
