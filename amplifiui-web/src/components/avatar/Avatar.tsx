import React, { useState } from 'react';
import DropdownIcon from '../../icons/DropdownIcon';

type AvatarProps = {
  imageUrl: string;
  name: string;
  description?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'x-large';
  status?: 'online' | 'away' | 'busy';
  statusPosition?: 'top-right' | 'bottom-right';
  onClick?: () => void;
  showDropdownIcon?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  name,
  description,
  className = '',
  size = 'medium',
  status,
  statusPosition = 'bottom-right',
  onClick,
  showDropdownIcon = true,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const getStatusColor = () => {
    switch (status) {
    case 'online':
      return 'bg-green-500';
    case 'away':
      return 'bg-gray-400';
    case 'busy':
      return 'bg-red-500';
    default:
      return '';
    }
  };

  const getStatusPositionClass = () => {
    return statusPosition === 'top-right' ? 'top-0 right-0' : 'bottom-0 right-0';
  };

  const sizeClasses = {
    small: 'w-[40px] h-[40px]',
    medium: 'w-[60px] h-[60px]',
    large: 'w-[80px] h-[80px]',
    'x-large': 'w-[100px] h-[100px]',
  };

  const handleIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (onClick) onClick();
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className={`${sizeClasses[size]} rounded-full object-cover bg-gray-300`}
        />

        {status && (
          <div
            className={`absolute ${getStatusPositionClass()} w-[16px] h-[16px] ${getStatusColor()} rounded-full`}
            style={{
              border: '2px solid white',
              bottom: '-2px',
              right: '-2px',
            }}
          />
        )}
      </div>

      <div className="flex flex-col flex-grow min-w-0 max-w-[200px]">
        <span
          className="text-[18px] font-semibold leading-[16px]"
          style={{
            color: 'var(--colors-color-text, #374151)',
            fontFamily: 'Inter',
            fontWeight: 600,
            lineHeight: '16px',
          }}
        >
          {name}
        </span>

        {description && (
          <span
            className="text-[12px] font-medium leading-tight break-words pt-1"
            style={{
              color: 'var(--colors-color-text, #374151)',
              fontFamily: 'Inter',
              fontWeight: 500,
              lineHeight: '16px',
            }}
          >
            {description}
          </span>
        )}
      </div>

      {showDropdownIcon && (
        <div
          className={`flex-shrink-0 ml-2 transform transition-transform duration-200 ${
            isDropdownOpen ? 'rotate-180' : 'rotate-0'
          }`} 
          onClick={handleIconClick}
          style={{ cursor: 'pointer' }}
        >
          <DropdownIcon />
        </div>
      )}
    </div>
  );
};

export default Avatar;
