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
};

const Image = ({tw, svg, src, style, width, height}: Props): JSX.Element => {
  const defaultStyles = tw``;

  if (svg) {
    return (
      <SvgXml xml={svg} width={width || '100%'} height={height || '100%'} />
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
      />
    );
  }

  return <View />;
};

export default Image;
