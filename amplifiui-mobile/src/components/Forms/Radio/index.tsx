import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

import RadioIcon from './icon';

type Props = {
  tw: TailwindFn;
  style?: Style;
  label?: string;
  labelStyle?: Style;
  radioStyle?: Style;
  checkedRadioStyle?: Style;
  value: boolean;
  onPress: () => void;
  icon?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

const Radio = ({
  tw,
  label,
  style,
  labelStyle,
  radioStyle,
  checkedRadioStyle,
  value,
  onPress,
  icon = RadioIcon,
  accessibilityLabel,
  accessibilityHint,
}: Props): JSX.Element => {
  const defaultStyle = tw.style('flex-col justify-center overflow-hidden');

  const defaultTextStyle = tw.style(
    'text-sm text-gray-700 -ml-2 justify-center',
  );

  const defaultTouchableAreaStyle = tw.style(
    'flex-row w-[48px] h-[48px] justify-center z-100 overflow-hidden'
  );

  const defaultRadioStyleChecked = tw.style(
    'bg-primary-700 border border-primary-700 justify-center items-center',
  );

  const defaultRadioStyle = tw.style(
    'h-4 w-4 rounded-full bg-white border border-gray-300',
  );

  return (
    <TouchableOpacity
      style={{
        ...defaultStyle,
        ...style,
      }}
      accessible={true}
      accessibilityRole="radio"
      accessibilityLabel={
        accessibilityLabel ?
          `${accessibilityLabel}. ${value ? 'selected' : 'unselected'}`
          : `${label}. ${value ? 'selected' : 'unselected'}`
      }
      accessibilityHint={accessibilityHint}
      onPress={onPress}>
      <View style={tw`flex-row`}>
        <View style={defaultTouchableAreaStyle}>
          <View style={tw`justify-center`}>
            {value ? (
              <View
                style={{
                  ...defaultRadioStyle,
                  ...defaultRadioStyleChecked,
                  ...radioStyle,
                  ...checkedRadioStyle,
                }}
              >
                <SvgXml xml={icon} />
              </View>
            ) : (
              <View style={{...defaultRadioStyle, ...radioStyle}} />
            )}
          </View>
        </View>
        {label && (
          <View style={tw`flex-col justify-center`}>
            <Text style={{...defaultTextStyle, ...labelStyle}}>{label}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Radio;
