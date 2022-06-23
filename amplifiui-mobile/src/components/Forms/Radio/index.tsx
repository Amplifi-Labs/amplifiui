import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

import RadioIcon from './radio-icon';

type Props = {
  tw: TailwindFn;
  style?: Style;
  label?: string;
  labelStyle?: Style;
  radioStyle?: Style;
  value: boolean;
  onPress: () => void;
};

const Radio = ({
  tw,
  label,
  style,
  labelStyle,
  radioStyle,
  value,
  onPress,
}: Props): JSX.Element => {
  const defaultStyle = tw.style('flex-row');

  const defaultTextStyle = tw.style(
    'text-sm text-gray-700 pl-3 justify-center',
  );

  const defaultRadioStyle = tw.style(
    'h-4 w-4 rounded-full bg-white border border-gray-300',
  );

  return (
    <View
      style={{
        ...defaultStyle,
        ...style,
      }}>
      <TouchableOpacity style={tw`justify-center`} onPress={onPress}>
        {value ? (
          <View>
            <SvgXml xml={RadioIcon} />
          </View>
        ) : (
          <View style={{...defaultRadioStyle, ...radioStyle}} />
        )}
      </TouchableOpacity>
      {label && (
        <Text style={{...defaultTextStyle, ...labelStyle}}>{label}</Text>
      )}
    </View>
  );
};

export default Radio;
