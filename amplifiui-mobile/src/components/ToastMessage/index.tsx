import * as React from 'react';
import {Animated, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Style, TailwindFn} from 'twrnc/dist/esm/types';
import SuccessIcon from './icons/success';
import {default as ErrorIcon, default as WarningIcon} from './icons/warning';

type Props = {
  tw: TailwindFn;
  style?: Style;
  iconStyle?: Style;
  textStyle?: Style;
  children: string;
  show: boolean;
  duration?: number;
  showCallback?: (value: boolean) => void;
  timeout?: number;
  icon?: string;
  type?: 'success' | 'warning' | 'error';
  iconSize?: number;
};

const ToastMessage = ({
  tw,
  style,
  iconStyle,
  textStyle,
  children,
  show,
  duration = 1000,
  showCallback,
  timeout = 4000,
  icon,
  type,
  iconSize,
}: Props) => {
  const opacity = React.useState(new Animated.Value(0))[0];

  React.useEffect(() => {
    if (show) {
      fadeIn();

      if (showCallback) {
        setTimeout(() => {
          showCallback(false);
        }, timeout);
      }
    } else {
      fadeOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        ...tw`absolute top-6 py-4 px-6 bg-gray-600 flex-row z-10 rounded-md w-full`,
        ...{opacity},
        ...style,
      }}>
      <View
        style={{
          ...tw`${
            type === 'error'
              ? 'bg-red-500'
              : type === 'warning'
              ? 'bg-blue-400'
              : 'bg-green-400'
          } h-10 w-10 rounded-full justify-center items-center`,
          ...iconStyle,
        }}>
        <SvgXml
          xml={
            icon || type === 'error'
              ? ErrorIcon
              : type === 'warning'
              ? WarningIcon
              : SuccessIcon
          }
          width={
            iconSize || type === 'error' ? 17 : type === 'warning' ? 17 : 14
          }
          height={
            iconSize || type === 'error' ? 17 : type === 'warning' ? 17 : 14
          }
        />
      </View>
      <View style={tw`justify-center ml-2 flex-1`}>
        <Text
          style={{
            ...tw`text-white text-base font-medium`,
            ...textStyle,
          }}>
          {children}
        </Text>
      </View>
    </Animated.View>
  );
};

export default ToastMessage;
