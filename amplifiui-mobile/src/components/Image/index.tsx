import * as React from 'react';
import {Image as Image_, ImageSourcePropType, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Style} from 'twrnc/dist/esm/types';

import {TailwindFn} from 'twrnc';

type Props = {
  tw: TailwindFn;
  svg?: string;
  src?: ImageSourcePropType;
  style?: Style;
  width?: number;
  height?: number;
  accessibilityLabel: string;
  accessibilityHint?: string;
};

const Image = ({
  tw,
  svg,
  src,
  style,
  width,
  height,
  accessibilityLabel,
  accessibilityHint,
}: Props): JSX.Element => {
  const defaultStyles = tw``;

  if (svg) {
    return (
      <SvgXml
        xml={svg}
        width={width || '100%'}
        height={height || '100%'}
        accessibilityRole="image"
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      />
    );
  }

  if (src) {
    return (
      <Image_
        style={{
          ...defaultStyles,
          ...style,
          ...tw`${width ? `w-[${width}px]` : ''} ${
            height ? `h-[${height}px]` : ''
          }`,
        }}
        source={src}
        accessibilityRole="image"
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      />
    );
  }

  return <View />;
};

export default Image;
