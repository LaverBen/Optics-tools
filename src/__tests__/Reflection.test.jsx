import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Reflection from '../pages/Reflection/Reflection.jsx';

function renderReflection() {
  return render(
    <BrowserRouter>
      <Reflection />
    </BrowserRouter>
  );
}

describe('Reflection page', () => {
  it('shows key facts about reflection', () => {
    renderReflection();
    expect(screen.getByRole('heading', { name: /overview/i })).toBeInTheDocument();
    // check one or two known key facts
    expect(
      screen.getByText(/angle of reflection is equal to the angle of incidence/i)
    ).toBeInTheDocument();
  });
});
