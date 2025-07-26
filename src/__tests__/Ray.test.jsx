import { render } from '@testing-library/react';
import Ray from '../components/Ray.jsx';

function renderRay(props) {
  return render(
    <svg>
      <Ray {...props} />
    </svg>
  );
}

describe('Ray', () => {
  it('renders a line and arrow', () => {
    const { container } = renderRay({ x1: 0, y1: 0, x2: 100, y2: 0, stroke: 'red', strokeWidth: 2 });
    const line = container.querySelector('line');
    const polygon = container.querySelector('polygon');
    expect(line).toBeInTheDocument();
    expect(polygon).toBeInTheDocument();
    expect(polygon.getAttribute('fill')).toBe('red');
    const [mx] = polygon.getAttribute('points').split(' ')[0].split(',').map(Number);
    expect(mx).toBeCloseTo(50);
  });
});
