import React from 'react';

const RegionPin = ({ regionName, top, left, onClick }) => {
  return (
    <div
      onClick={onClick}
      title={regionName}
      style={{
        position: 'absolute',
        top,
        left,
        transform: 'translate(-50%, -100%)',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" fill="#FF0000" />
      </svg>
    </div>
  );
};

export default RegionPin;