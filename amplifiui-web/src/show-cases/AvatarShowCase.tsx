import React from 'react';
import Avatar from '../components/avatar/Avatar';
import gandalfImage from '../components/images/gandalf.jpg';

const AvatarShowcase: React.FC = () => {

  return (
    <div className="space-y-8">
      <div className="pt-8">
        <Avatar
          imageUrl={gandalfImage}
          name="Gandalf"
          description="Gandalf is a protagonist in J. R. R. Tolkien's novels"
          status="online"
          statusPosition="bottom-right"
          showDropdownIcon
          onClick={() => console.log('Clicked!')}
        />
      </div>
    </div>
  );
};

export default AvatarShowcase;
