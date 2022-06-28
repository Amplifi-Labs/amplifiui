import * as React from 'react';
import {TailwindFn} from 'twrnc';
import {ImageSourcePropType, TouchableOpacity} from 'react-native';
import Image from '../Image';
import {Style} from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  src: ImageSourcePropType;
  onPress?: () => void;
  style?: Style;
  size?: number;
  accessibilityLabel: string;
};

const RoundAvatar = ({
  tw,
  src,
  onPress,
  style,
  size = 40,
  accessibilityLabel,
}: Props) => {
  const defaultStyle = tw`rounded-full border border-gray-200`;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        tw={tw}
        src={src}
        width={size}
        height={size}
        style={{...defaultStyle, ...style}}
        accessibilityLabel={accessibilityLabel}
      />
    </TouchableOpacity>
  );
};

export default RoundAvatar;
