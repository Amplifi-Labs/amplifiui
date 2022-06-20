import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';
import Icon from './icon';

type Props = {
  tw: TailwindFn;
  style?: Style;
  label?: string;
  labelStyle?: Style;
  checkboxStyle?: Style;
  value: boolean;
  onPress: () => void;
};

const Checkbox = ({
  tw,
  label,
  style,
  labelStyle,
  checkboxStyle,
  value,
  onPress,
}: Props): JSX.Element => {
  const defaultStyle = tw.style('flex-row');

  const defaultTextStyle = tw.style(
    'text-sm text-gray-700 pl-3 justify-center',
  );

  const defaultCheckboxStyleChecked = tw.style(
    'h-4 w-4 rounded bg-primary-700 border border-primary-700 justify-center items-center',
  );

  const defaultCheckboxStyle = tw.style(
    'h-4 w-4 rounded bg-white border border-gray-300',
  );

  return (
    <View
      style={{
        ...defaultStyle,
        ...style,
      }}>
      <TouchableOpacity style={tw`justify-center`} onPress={onPress}>
        {value ? (
          <View style={{...defaultCheckboxStyleChecked, ...checkboxStyle}}>
            <SvgXml xml={Icon} width={9} />
          </View>
        ) : (
          <View style={{...defaultCheckboxStyle, ...checkboxStyle}} />
        )}
      </TouchableOpacity>
      {label && (
        <Text style={{...defaultTextStyle, ...labelStyle}}>{label}</Text>
      )}
    </View>
  );
};

export default Checkbox;
