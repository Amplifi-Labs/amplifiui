import * as React from 'react';
import {Text} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';

import {TailwindFn} from 'twrnc';

type Props = {
  tw: TailwindFn;
  style?: Style;
  children: string;
};

const Info = ({tw, style, children}: Props): JSX.Element => {
  const defaultStyles = tw`font-medium text-base text-gray-500`;
  return <Text style={{...defaultStyles, ...style}}>{children}</Text>;
};

export default Info;
