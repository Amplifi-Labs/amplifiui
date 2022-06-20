import * as React from 'react';
import {Text} from 'react-native';
import {Style, TailwindFn} from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  style: Style;
  children: string;
};

const Label = ({tw, children, style}: Props) => {
  const defaultStyle = tw.style('text-sm font-medium text-gray-700 pb-1x');
  return <Text style={{...defaultStyle, ...style}}>{children}</Text>;
};

export default Label;
