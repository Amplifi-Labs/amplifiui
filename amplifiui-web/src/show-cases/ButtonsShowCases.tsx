import React from 'react';
import Button from '../components/button/Button';
import ButtonIcon from '../icons/ButtonIcon';

const ButtonShowcase: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Primary Buttons */}
      <Button type="primary" icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Primary Button</Button>
      <Button type="primary" icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Primary Button</Button>
      <Button type="primary" disabled icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Disabled Primary Button</Button>
      <Button type="primary" disabled icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Disabled Primary Button</Button>
      <Button type="primary" error icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Error Primary Button</Button>
      <Button type="primary" error icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Error Primary Button</Button>

      {/* Secondary Buttons */}
      <Button type="secondary" icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Secondary Button</Button>
      <Button type="secondary" icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Secondary Button</Button>
      <Button type="secondary" disabled icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Disabled Secondary Button</Button>
      <Button type="secondary" disabled icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Disabled Secondary Button</Button>
      <Button type="secondary" error icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Error Secondary Button</Button>
      <Button type="secondary" error icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Error Secondary Button</Button>

      {/* Tertiary Buttons */}
      <Button type="tertiary" icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Tertiary Button</Button>
      <Button type="tertiary" icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Tertiary Button</Button>
      <Button type="tertiary" disabled icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Disabled Tertiary Button</Button>
      <Button type="tertiary" disabled icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Disabled Tertiary Button</Button>
      <Button type="tertiary" error icon={<ButtonIcon />} iconPosition="left" className="w-[460px]">Error Tertiary Button</Button>
      <Button type="tertiary" error icon={<ButtonIcon />} iconPosition="right" className="w-[460px]">Error Tertiary Button</Button>
    </div>
  );
};

export default ButtonShowcase;
