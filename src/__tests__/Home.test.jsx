import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home.jsx';
import { BrowserRouter } from 'react-router-dom';

function renderHome() {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

describe('Home page', () => {
  it('increments click counter when button clicked', async () => {
    renderHome();
    const clickBtn = screen.getAllByText(/click me/i)[0];
    await userEvent.click(clickBtn);
    expect(screen.getByText(/you clicked the button 1 times/i)).toBeInTheDocument();
  });

  it('increments hover counter when hovered', async () => {
    renderHome();
    const hoverBtn = screen.getAllByText(/hover over me/i)[0];
    await userEvent.hover(hoverBtn);
    expect(screen.getByText(/you hovered over the other button 1 times/i)).toBeInTheDocument();
  });
});
