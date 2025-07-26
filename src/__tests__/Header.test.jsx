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
    const navItems = [
      { path: '/', label: 'Home' },
      {
        path: '/long-page-name',
        label: 'Long page name to test if long page names wrap',
      },
    ];
    render(
      <BrowserRouter>
        <Header title="Test" navItems={navItems} />
      </BrowserRouter>
    );
    await userEvent.click(screen.getByText(/navigate/i));
    const link = screen.getByText('Long page name to test if long page names wrap');
    expect(window.getComputedStyle(link).whiteSpace).toBe('normal');
  });

  it('closes navigation when clicking outside', async () => {
    render(
      <BrowserRouter>
        <Header title="Test" />
      </BrowserRouter>
    );
    const summary = screen.getByText(/navigate/i);
    await userEvent.click(summary);
    const details = summary.closest('details');
    expect(details.open).toBe(true);
    await userEvent.click(document.body);
    expect(details.open).toBe(false);
  });
});
