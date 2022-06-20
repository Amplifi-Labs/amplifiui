import * as React from 'react';
import {View} from 'react-native';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  style?: Style;
  children: JSX.Element | JSX.Element[];
};

const Card = ({tw, style, children}: Props) => {
  const defaultStyle = tw`rounded-md bg-white p-4`;
  return <View style={{...defaultStyle, ...style}}>{children}</View>;
};

export default Card;
