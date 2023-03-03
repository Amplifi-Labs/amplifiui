import * as React from 'react';
import { View } from 'react-native';
import { Style } from 'twrnc/dist/esm/types';
import Spinner from '../Spinner';

import { TailwindFn } from 'twrnc';

type Props = {
  tw: TailwindFn;
  children: JSX.Element | JSX.Element[] | string;
  style?: Style;
  time?: number;
};

const LoadingRound = ({ tw, children, style, time = 3000 }: Props): JSX.Element => {
  const defaultStyles = tw`items-center justify-center rounded-full w-16 h-16 bg-gray-100`;
  return (
    <View style={{ ...defaultStyles, ...style }}>
      <Spinner time={time}>{children}</Spinner>
    </View>
  );
};

export default LoadingRound;
