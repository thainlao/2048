import React, { useEffect, useState } from 'react';
import '../styles/plate.css';

interface Props {
  value: number;
  x: number;
  y: number;
}

const Plate: React.FC<Props> = ({ value, x, y }) => {
  const [showPlate, setShowPlate] = useState(false);

  useEffect(() => {
    setShowPlate(true);
  },[]);

  return (
    <div className={`plate plate-${value} ${showPlate && 'show'}`} style={{ gridRow: y + 1, gridColumn: x + 1 }}>
      <h4>{value !== 0 && value}</h4>
    </div>
  );
}

export default Plate;