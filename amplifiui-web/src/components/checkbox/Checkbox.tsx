import React from 'react';

type CheckboxProps = {
  label?: string;
  description?: string;
  checked?: boolean;
  onChange?: () => void;
  variant?: 'default' | 'bordered';
  disabled?: boolean;
  className?: string;
  checkboxStyle?: string;
  labelStyle?: string;
  descriptionStyle?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  checked = false,
  onChange,
  variant = 'default',
  disabled = false,
  className = '',
  checkboxStyle = '',
  labelStyle = '',
  descriptionStyle = '',
}) => {
  const baseStyles = 'w-[16px] h-[16px] flex-shrink-0 rounded-[4px] cursor-pointer';
  const checkedStyles = `bg-primary fill-white stroke-primary ${checkboxStyle}`;
  const uncheckedStyles = `border border-neutral-300 bg-white ${checkboxStyle}`;

  const extractBorderColor = () => {
    const bgColorMatch = checkboxStyle.match(/bg-\w+-\d+/);
    return bgColorMatch ? bgColorMatch[0].replace('bg-', 'border-') : 'border-primary';
  };

  const borderContainerStyles = `p-[3px] rounded-[8px] border-2 ${
    variant === 'bordered' ? extractBorderColor() : ''
  } flex items-center`;

  const disabledStyles = 'bg-neutral-300 fill-white cursor-not-allowed opacity-50';

  const defaultLabelStyles = 'text-gray-700 font-inter text-[14px] font-medium leading-[20px]';
  const defaultDescriptionStyles = 'text-gray-700 font-inter text-[14px] font-normal leading-[20px] mt-1';

  const getCheckboxStyles = () => {
    if (disabled) {
      return `${baseStyles} ${disabledStyles}`;
    }
    return checked ? `${baseStyles} ${checkedStyles}` : `${baseStyles} ${uncheckedStyles}`;
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-start gap-2" onClick={!disabled ? onChange : undefined}>
        <div className={`${variant === 'bordered' ? borderContainerStyles : ''} mt-[2px]`}>
          <div className={`${getCheckboxStyles()}`}>
            {checked && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8L7 11L12 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="leading-[20px]">
          {label && <span className={`${defaultLabelStyles} ${labelStyle}`}>{label}</span>}
          {description && <p className={`${defaultDescriptionStyles} ${descriptionStyle}`}>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
