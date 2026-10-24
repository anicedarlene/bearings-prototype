import { forwardRef } from 'react';

// The phone frame. The ref points at the frame itself so it can be exported as a PNG.
const Phone = forwardRef(function Phone({ children, label }, ref) {
  return (
    <div className="phone" ref={ref} role="img" aria-label={label}>
      <div className="screen">{children}</div>
    </div>
  );
});
export default Phone;
