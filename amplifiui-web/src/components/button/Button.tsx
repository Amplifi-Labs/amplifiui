import React from 'react';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  iconCustomStyles?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  disabled = false,
  error = false,
  icon,
  iconPosition = 'left',
  iconCustomStyles = '',
  children,
  onClick,
  className = '',
}) => {
  const defaultStyle = 'w-full h-[34px] p-2 px-4';

  const baseStyles = `flex justify-center items-center gap-2 flex-shrink-0 rounded-[var(--spacing-2,8px)]`;

  const typeStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-gray-700',
    tertiary: 'border border-tertiary-stroke bg-tertiary text-tertiary-stroke',
  };

  const focusStyles = {
    primary: 'focus:border-2 focus:border-focus-stroke',
    secondary: 'focus:border-2 focus:border-focus-stroke',
    tertiary: 'focus:border-2 focus:border-tertiary-stroke',
  };

  const pressedStyles = {
    primary: 'active:border-4 active:border-focus-stroke',
    secondary: 'active:border-4 active:border-focus-stroke',
    tertiary: 'active:border-4 active:border-tertiary-stroke',
  };

  const disabledStyles = {
    primary: 'bg-neutral-300 cursor-not-allowed',
    secondary: 'bg-neutral-200 cursor-not-allowed',
    tertiary: 'border border-neutral-300 bg-neutral-10 text-neutral-300 cursor-not-allowed',
  };

  const errorStyles = {
    primary: 'bg-error-primary text-white',
    secondary: 'bg-error-secondary text-gray-700',
    tertiary: 'border border-error-primary bg-error-tertiary text-error-primary',
  };

  const iconStyles = {
    primary: 'w-6 h-6 flex justify-center items-center flex-shrink-0 text-white',
    secondary: 'w-6 h-6 flex justify-center items-center flex-shrink-0 text-icon-secondary',
    tertiary: 'w-6 h-6 flex justify-center items-center flex-shrink-0 text-primary',
  };

  const styles = `${baseStyles} ${defaultStyle} ${
    disabled
      ? disabledStyles[type]
      : error
      ? errorStyles[type]
      : `${typeStyles[type]} ${!error && !disabled && `${focusStyles[type]} ${pressedStyles[type]}`}`
  } ${className}`;

  return (
    <button className={styles} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {icon && iconPosition === 'left' && <span className={`${iconStyles[type]} ${iconCustomStyles}`}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={`${iconStyles[type]} ${iconCustomStyles}`}>{icon}</span>}
    </button>
  );
};

export default Button;
