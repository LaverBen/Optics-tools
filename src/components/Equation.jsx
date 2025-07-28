import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function Equation({ children, number, id }) {
  return (
    <div
      id={id}
      style={{
        backgroundColor: 'rgba(236, 185, 75, 0.38)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BlockMath>{children}</BlockMath>
      {number && <span style={{ marginLeft: '0.5rem' }}>({number})</span>}
    </div>
  );
}

export default Equation;
