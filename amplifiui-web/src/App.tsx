import React from 'react';

import ButtonShowcase from './show-cases/ButtonsShowCases';
import CheckboxShowcase from './show-cases/CheckboxShowCases';
import AvatarShowcase from './show-cases/AvatarShowCase';
import ToggleShowcase from './show-cases/ToggleCase';

const App: React.FC = () => (
  <div>
    {/* <ButtonShowcase /> */}
    {/* <CheckboxShowcase /> */}
    {/* <AvatarShowcase /> */}
    <ToggleShowcase />
  </div>
);

export default App;
