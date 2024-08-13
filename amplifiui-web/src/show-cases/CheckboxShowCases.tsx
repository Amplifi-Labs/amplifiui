import React, { useState } from 'react';
import Checkbox from '../components/checkbox/Checkbox';

const CheckboxShowcase: React.FC = () => {
  const [checkedDefault, setCheckedDefault] = useState(false);
  const [checkedBordered, setCheckedBordered] = useState(false);
  const [checkedCustom, setCheckedCustom] = useState(true);

  const handleDefaultChange = () => setCheckedDefault(!checkedDefault);
  const handleBorderedChange = () => setCheckedBordered(!checkedBordered);
  const handleCustomChange = () => setCheckedCustom(!checkedCustom);

  return (
    <div className="space-y-4">
      <Checkbox
        label="Default Checkbox"
        description="This is a default checkbox."
        checked={checkedDefault}
        onChange={handleDefaultChange}
        className="w-[460px]"
      />
      <Checkbox
        label="Checked Default Checkbox"
        description="This checkbox is checked by default."
        checked={checkedDefault}
        onChange={handleDefaultChange}
        className="w-[460px]"
      />

      {/* Bordered Checkbox */}
      <Checkbox
        label="Bordered Checkbox"
        description="This is a bordered checkbox."
        variant="bordered"
        checked={checkedBordered}
        onChange={handleBorderedChange}
        className="w-[460px]"
      />
      <Checkbox
        label="Checked Bordered Checkbox"
        description="This bordered checkbox is checked by default."
        variant="bordered"
        checked={checkedBordered}
        onChange={handleBorderedChange}
        className="w-[460px]"
      />

      {/* Disabled Checkbox */}
      <Checkbox
        label="Disabled Checkbox"
        description="This checkbox is disabled."
        disabled
        checked={false}
        className="w-[460px]"
      />
      <Checkbox
        label="Disabled Checked Checkbox"
        description="This checked checkbox is disabled."
        disabled
        checked={true}
        className="w-[460px]"
      />

      {/* Custom Checkbox */}
      <Checkbox
        label="Custom Checkbox"
        description="This checkbox has a custom style."
        variant="bordered"
        checked={checkedCustom}
        onChange={handleCustomChange}
        checkboxStyle="bg-gray-700"
        labelStyle="text-gray-700 font-bold"
        descriptionStyle="text-gray-500"
        className="w-[460px]"
      />
    </div>
  );
};

export default CheckboxShowcase;
