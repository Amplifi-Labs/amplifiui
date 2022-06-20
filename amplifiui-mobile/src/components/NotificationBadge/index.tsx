import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

import Image from '../Image';

import Icon from './icon';

type Props = {
  tw: TailwindFn;
  style?: Style;
  badgeStyle?: Style;
  badgeColor?: string;
  icon?: string;
  iconStyle?: Style;
  iconColor?: string;
  showBadge?: boolean;
  size?: number;
  onPress?: () => void;
};

const NotificationBadge = ({
  tw,
  style,
  badgeStyle,
  badgeColor = '#EF4444',
  icon,
  iconStyle,
  iconColor,
  showBadge = false,
  size = 40,
  onPress,
}: Props) => {
  icon = icon || Icon({color: iconColor});

  const defaultStyle = tw`rounded-full w-[${size}px] h-[${size}px] border border-gray-200 bg-gray-100`;

  const iconDefaultStyle = tw`items-center justify-center h-full`;

  const badgeDefaultStyle = tw`w-full h-full absolute`;

  return (
    <TouchableOpacity
      style={{
        ...defaultStyle,
        ...style,
      }}
      onPress={onPress}>
      <View style={{...iconDefaultStyle, ...iconStyle}}>
        <Image
          tw={tw}
          svg={icon}
          width={18 * (size / 40)}
          height={19 * (size / 40)}
        />
      </View>
      {showBadge && (
        <View style={{...badgeDefaultStyle, ...badgeStyle}}>
          <View
            style={{
              ...tw`bg-[${badgeColor}] w-[${size / 4}px] h-[${
                size / 4
              }px] absolute rounded-full top-[${2 * (size / 40)}] right-[${
                2 * (size / 40)
              }]`,
            }}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default NotificationBadge;
