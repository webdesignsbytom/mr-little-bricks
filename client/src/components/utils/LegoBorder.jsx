import React, { useState } from 'react';

function LegoBorder({ children, borderColour, backgroundColour }) {
  const [border, setBorder] = useState(borderColour || 'border-green-500')
  const [background, setBackground] = useState(backgroundColour || 'bg-green-600')

  return (
    <div
      className={`grid ${background} p-0.5 rounded-xl`}
      style={{ boxShadow: '0 0 2px black' }}
    >
      <div className={`grid border-8 ${border} border-dotted p-1`}>
        <div className="grid">{children}</div>
      </div>
    </div>
  );
}

export default LegoBorder;

