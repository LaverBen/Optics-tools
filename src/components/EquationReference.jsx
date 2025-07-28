import { useCallback } from 'react';

function EquationReference({ id, number }) {
  const handleClick = useCallback(
    (event) => {
      event.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [id]
  );

  return (
    <a href={`#${id}`} onClick={handleClick}>
      ({number})
    </a>
  );
}

export default EquationReference;
