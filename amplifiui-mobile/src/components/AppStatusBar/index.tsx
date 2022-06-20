import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { TailwindFn } from 'twrnc';

type Props = {
  tw: TailwindFn;
  backgroundColor: string;
  barStyle: 'light-content' | 'dark-content';
  top: number;
};

const AppStatusBar = ({tw, backgroundColor, barStyle, top}: Props) => {
  return (
    <View style={{...tw`android:h-${top}`, ...{backgroundColor}}}>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
    </View>
  );
};

export default AppStatusBar;
