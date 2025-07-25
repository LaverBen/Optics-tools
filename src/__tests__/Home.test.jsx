import { render, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';

function renderHome() {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

describe('Home page', () => {
  it('renders a link for each page', () => {
    const { container } = renderHome();
    const grid = container.querySelector('.brick-grid');
    const utils = within(grid);
    expect(utils.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(utils.getByRole('link', { name: /^reflection$/i })).toBeInTheDocument();
    expect(utils.getByRole('link', { name: /^mirrors$/i })).toBeInTheDocument();
    expect(utils.getByRole('link', { name: /concave mirrors/i })).toBeInTheDocument();
    expect(utils.getByRole('link', { name: /convex mirrors/i })).toBeInTheDocument();
  });
});
