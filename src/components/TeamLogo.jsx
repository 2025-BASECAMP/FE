const TeamLogo = ({ logo, name, top, left, size = 60, onClick }) => {
  return (
    <img
      src={logo}
      alt={name}
      onClick={onClick}
      style={{
        position: 'absolute',
        top,
        left,
        width: `${size}px`,
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
        zIndex: 9999,
        pointerEvents: 'auto',
      }}
    />
  );
};

export default TeamLogo;