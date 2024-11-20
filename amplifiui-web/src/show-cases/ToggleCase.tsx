import React, { useState } from 'react';
import Toggle from '../components/toggle/Toggle';

const ToggleShowcase: React.FC = () => {
  const [isOnDefault, setIsOnDefault] = useState(false);
  const [isOnCompact, setIsOnCompact] = useState(false);

  return (
    <div className="space-y-8">
      {/* Default Toggles */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Default Toggles</h3>
        <Toggle
          isOn={isOnDefault}
          onChange={() => setIsOnDefault(!isOnDefault)}
          disabled={false}
          error={false}
          compact={false}
        />

        {/* Compact Toggle */}
        <h3 className="text-lg font-semibold">Compact Toggles</h3>
        <Toggle
          isOn={isOnCompact}
          onChange={() => setIsOnCompact(!isOnCompact)}
          disabled={false}
          error={false}
          compact={true}
        />

        {/* Error Toggle */}
        <h3 className="text-lg font-semibold">Error Toggles</h3>
        <Toggle
          isOn={isOnDefault}
          onChange={() => setIsOnDefault(!isOnDefault)}
          disabled={false}
          error={true}
          compact={false}
        />
        <Toggle
          isOn={isOnCompact}
          onChange={() => setIsOnCompact(!isOnCompact)}
          disabled={false}
          error={true}
          compact={true}
        />

        {/* Disabled Toggle */}
        <h3 className="text-lg font-semibold">Disabled Toggles</h3>
        <Toggle
          isOn={isOnDefault}
          onChange={() => setIsOnDefault(!isOnDefault)}
          disabled={true}
          error={false}
          compact={false}
        />
        <Toggle
          isOn={isOnCompact}
          onChange={() => setIsOnCompact(!isOnCompact)}
          disabled={true}
          error={false}
          compact={true}
        />
      </div>
    </div>
  );
};

export default ToggleShowcase;
