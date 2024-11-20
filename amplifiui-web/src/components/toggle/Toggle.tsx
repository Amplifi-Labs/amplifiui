import React from 'react';

type ToggleProps = {
  isOn: boolean;
  disabled?: boolean;
  error?: boolean;
  compact?: boolean;
  onChange: () => void;
};

const Toggle: React.FC<ToggleProps> = ({ isOn, disabled = false, error = false, compact = false, onChange }) => {
  const getBackgroundColor = () => {
    if (disabled) return 'var(--colors-buttons-button-disabled-primary-fill, #D4D4D4)';
    if (error) return 'var(--colors-buttons-button-error-primary-fill, #B91C1C)';
    return isOn ? 'var(--colors-buttons-button-primary-fill, #0EA5E9)' : 'var(--gray-200, #E5E7EB)';
  };

  const toggleStyle = {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    width: compact ? '40px' : '44px',
    height: compact ? '16px' : '24px',
    padding: compact ? '2px 0px' : '2px',
    borderRadius: '12px',
    background: getBackgroundColor(),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'background 0.3s ease',
  };

  const circleStyle = {
    width: compact ? '12px' : '20px',
    height: compact ? '12px' : '20px',
    background: 'white',
    borderRadius: '50%',
    transform: isOn ? `translateX(${compact ? '24px' : '20px'})` : 'translateX(0)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div style={toggleStyle} onClick={!disabled ? onChange : undefined}>
      <div style={circleStyle}></div>
    </div>
  );
};

export default Toggle;
