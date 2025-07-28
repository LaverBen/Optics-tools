import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function Equation({ children, number }) {
  return (
    <div style={{ backgroundColor: 'rgba(236, 185, 75, 0.38)' }}>
      {number && (
        <p style={{ textAlign: 'right', margin: 0 }}>({number})</p>
      )}
      <div style={{ textAlign: 'center' }}>
        <BlockMath>{children}</BlockMath>
      </div>
    </div>
  );
}

export default Equation;
