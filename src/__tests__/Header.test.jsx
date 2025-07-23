import { render, screen } from '@testing-library/react';
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
});
