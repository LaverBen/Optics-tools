import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function Equation({ children, number, id }) {
  return (
    <div
      id={id}
      style={{
        backgroundColor: 'rgba(236, 185, 75, 0.38)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <BlockMath style={{ justifySelf: 'center' }}>{children}</BlockMath>
      {number && (
        <span style={{ marginLeft: '0.5rem', justifySelf: 'end' }}>({number})</span>
      )}
    </div>
  );
}

export default Equation;
