import * as React from 'react';
import {Text} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';

import {TailwindFn} from 'twrnc';

type Props = {
  tw: TailwindFn;
  style?: Style;
  children: string;
};

const H1 = ({tw, style, children}: Props): JSX.Element => {
  const defaultStyles = tw`font-medium text-2xl text-gray-700`;
  return (
    <Text
      style={{...defaultStyles, ...style}}
      accessibilityRole="text"
    >
      {children}
    </Text>
  );
};

export default H1;
