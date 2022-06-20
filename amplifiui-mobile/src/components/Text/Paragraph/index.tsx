import * as React from 'react';
import {Text} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';

import {TailwindFn} from 'twrnc';

type Props = {
  tw: TailwindFn;
  style?: Style;
  children: string;
};

const Paragraph = ({tw, style, children}: Props): JSX.Element => {
  const defaultStyles = tw`font-medium text-sm text-gray-700`;
  return <Text style={{...defaultStyles, ...style}}>{children}</Text>;
};

export default Paragraph;
