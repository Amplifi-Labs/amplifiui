import * as React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  View,
} from 'react-native';

import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  image: ImageSourcePropType;
  style?: Style;
  children?: JSX.Element | JSX.Element[];
  bottomColor?: string;
  mask?: string;
};

const BackgroundImage = ({
  tw,
  image,
  children,
  bottomColor,
  mask = 'bg-white/90',
  style,
}: Props): JSX.Element => {
  const defaultStyle = tw`flex-1`;

  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{...defaultStyle, ...style}}>
        <SafeAreaView style={tw`flex-1 justify-between ${mask}`}>
          {children}
        </SafeAreaView>
        {bottomColor && (
          <SafeAreaView style={{flex: 0, backgroundColor: bottomColor}} />
        )}
      </ImageBackground>
    </View>
  );
};

export default BackgroundImage;
