import * as React from 'react';
import {View, Text} from 'react-native';
import {Style, TailwindFn} from 'twrnc/dist/esm/types';

export type BalloonData = {title: string; value: string | number}[];

type Props = {
  tw: TailwindFn;
  balloonData: {title: string; value: string | number}[];
  position: [number, number];
  style?: Style;
  fontStyle?: Style;
};

const Balloon = ({tw, balloonData, position, style, fontStyle}: Props) => {
  const defaultStyle = tw`p-2 bg-gray-600 rounded-md absolute`;
  const defaultFontStyle = tw`text-xs text-white`;

  if (balloonData.length) {
    return (
      <View
        style={{
          ...defaultStyle,
          ...style,
          left: position[0],
          top: position[1],
        }}>
        {balloonData.map((data, idx) => (
          <Text key={idx} style={{...defaultFontStyle, ...fontStyle}}>
            {`${data.title}: ${data.value}`}
          </Text>
        ))}
      </View>
    );
  }

  return null;
};

export default Balloon;
