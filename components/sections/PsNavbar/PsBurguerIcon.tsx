import React from 'react';

interface PsBurguerIconProps {
  topRef: React.LegacyRef<SVGPathElement>;
  bottomRef: React.LegacyRef<SVGPathElement>;
}

const PsBurguerIcon = ({ topRef, bottomRef }: PsBurguerIconProps) => {
  return (
    <svg
      width='22'
      height='12'
      viewBox='0 0 22 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        ref={topRef}
        d='M1.66665 0.666748C0.930267 0.666748 0.333313 1.2637 0.333313 2.00008C0.333313 2.73646 0.930267 3.33341 1.66665 3.33341H20.3333C21.0697 3.33341 21.6666 2.73646 21.6666 2.00008C21.6666 1.2637 21.0697 0.666748 20.3333 0.666748H1.66665Z'
        fill='#777E91'
      />
      <path
        ref={bottomRef}
        d='M1.66665 8.66675C0.930267 8.66675 0.333313 9.2637 0.333313 10.0001C0.333313 10.7365 0.930267 11.3334 1.66665 11.3334H20.3333C21.0697 11.3334 21.6666 10.7365 21.6666 10.0001C21.6666 9.2637 21.0697 8.66675 20.3333 8.66675H1.66665Z'
        fill='#777E91'
      />
    </svg>
  );
};

export default PsBurguerIcon;
