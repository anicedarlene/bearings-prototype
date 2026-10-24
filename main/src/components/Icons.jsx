const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
export const WarningIcon = ({ size = 48 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);
export const CheckCircleIcon = ({ size = 56 }) => (
  <svg {...base} width={size} height={size}>
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12.5 2.8 2.8L16 9.5" />
  </svg>
);
