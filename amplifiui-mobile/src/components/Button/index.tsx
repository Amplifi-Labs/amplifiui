import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Style, TailwindFn } from 'twrnc/dist/esm/types';

import { SvgXml } from 'react-native-svg';
import Spinner from '../Spinner';

import DefaultLoadingIcon from './LoadingIcon';

type Props = {
  tw: TailwindFn;
  onPress: () => void;
  style?: Style;
  textStyle?: Style;
  children: string;
  type?: 'primary' | 'secondary';
  iconLeft?: string;
  iconRight?: string;
  loadingIcon?: string;
  loadingStyle?: Style;
  isLoading?: boolean;
};

const Button = ({
  tw,
  style,
  textStyle,
  onPress,
  children,
  type,
  iconLeft,
  iconRight,
  loadingIcon = DefaultLoadingIcon,
  loadingStyle,
  isLoading = false,
}: Props): JSX.Element => {
  const bgColor = `bg-${type || 'indigo'}-700`;

  const defaultStyles = tw.style(
    'items-center px-2 py-3 border border-transparent rounded shadow',
    bgColor,
  );

  const defaultTextStyles = tw.style('text-lg font-medium text-white');

  const loadingDefaultStyles = tw.style('ml-4');

  return (
    <TouchableOpacity style={{...defaultStyles, ...style}} onPress={onPress}>
      <View style={tw`flex-row items-center`}>
        {iconLeft && (
          <View style={tw`mr-4`}>
            <SvgXml xml={iconLeft} />
          </View>
        )}
        <Text style={{...defaultTextStyles, ...textStyle}}>
          {children}
        </Text>
        {iconRight && !isLoading && (
          <View style={tw`ml-4`}>
            <SvgXml xml={iconRight} />
          </View>
        )}
        {isLoading && loadingIcon && (
          <View style={{...loadingDefaultStyles, ...loadingStyle}}>
            <Spinner time={3000}><SvgXml xml={loadingIcon} /></Spinner>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
