import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {TailwindFn} from 'twrnc/dist/esm/types';
import {Style} from 'twrnc/dist/esm/types';
import Icon from './icon';

type Props = {
  tw: TailwindFn;
  style?: Style;
  label?: string;
  labelStyle?: Style;
  checkboxStyle?: Style;
  checkedCheckboxStyle?: Style;
  value: boolean;
  onPress: () => void;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

const Checkbox = ({
  tw,
  label,
  style,
  labelStyle,
  checkboxStyle,
  checkedCheckboxStyle,
  value,
  onPress,
  icon = Icon,
  iconWidth = 9,
  iconHeight = 9,
  accessibilityLabel,
  accessibilityHint,
}: Props): JSX.Element => {
  const defaultStyle = tw.style('flex-col justify-center overflow-hidden');

  const defaultTextStyle = tw.style(
    'text-sm text-gray-700 -ml-2 justify-center',
  );

  const defaultTouchableAreaStyle = tw.style(
    'flex-row w-[48px] h-[48px] justify-center z-100 overflow-y-hidden'
  );

  const defaultCheckboxStyleChecked = tw.style(
    'bg-primary-700 border border-primary-700 justify-center items-center',
  );

  const defaultCheckboxStyle = tw.style(
    'h-4 w-4 rounded bg-white border border-gray-300',
  );

  return (
    <TouchableOpacity
      style={{
        ...defaultStyle,
        ...style,
      }}
      accessible={true}
      accessibilityRole="checkbox"
      accessibilityLabel={
        accessibilityLabel ?
          `${accessibilityLabel}. ${value ? 'selected' : 'unselected'}`
          : `${label}. ${value ? 'selected' : 'unselected'}`
      }
      accessibilityHint={accessibilityHint}
      onPress={onPress}>
      <View style={tw`flex-row`}>
        <View
          style={defaultTouchableAreaStyle}
        >
          <View style={tw`justify-center`}>
            {value ? (
              <View
                style={{
                  ...defaultCheckboxStyle,
                  ...defaultCheckboxStyleChecked,
                  ...checkboxStyle,
                  ...checkedCheckboxStyle,
                }}
              >
                <SvgXml
                  xml={icon}
                  width={iconWidth}
                  height={iconHeight}
                />
              </View>
            ) : (
              <View style={{...defaultCheckboxStyle, ...checkboxStyle}} />
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

export default Checkbox;