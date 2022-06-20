import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TailwindFn } from 'twrnc';
import { Style } from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  label?: string;
  data: Array<{label: string; key: string | number}>;
  showRadio?: Boolean;
  style?: Style;
  labelStyle?: Style;
  dataStyle?: Style;
  radioStyle?: Style;
  onChangeOption: React.Dispatch<React.SetStateAction<Object>>;
  value?: string | number;
  isHorizontal?: boolean;
};

const RadioGroup = ({
  tw,
  label,
  data,
  showRadio,
  labelStyle,
  dataStyle,
  radioStyle,
  onChangeOption,
  isHorizontal,
  value,
  style,
}: Props): JSX.Element => {
  const [selectedValue, setSelectedValue] = React.useState<{
    label: string;
    key: string | number;
  }>({
    label: '',
    key: '',
  });
  const defaultLabelStyle = tw.style('text-sm font-medium text-gray-700');
  const defaultDataStyle = tw.style(
    'my-1.5 flex-row justify-between items-center bg-white h-11 rounded-md pl-4 border border-gray-300',
  );
  const defaultTextStyle = tw.style('text-lg text-gray-700');
  const defaultRadioStyle = tw.style(
    'h-6 w-6 rounded-full border-8 border-primary-700 items-center justify-center bg-gray-100',
  );

  React.useEffect(() => {
    if (value) {
      const itemSelected = data.find(item => item.key === value);
      if (itemSelected) {
        updateValue(itemSelected);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isSelected = (item: {label: string; key: string | number}) => {
    return item.key === selectedValue.key;
  };
  const updateValue = (newValue: {label: string; key: string | number}) => {
    setSelectedValue(newValue);
    onChangeOption(newValue);
  };

  const horizontalStyle = isHorizontal ? tw.style('flex-row') : '';
  const verticalStyleButton = isHorizontal ? tw.style('p-2 w-50') : '';

  return (
    <View style={style}>
      <Text
        style={{...defaultLabelStyle, ...labelStyle}}
        accessible={true}
        accessibilityLabel={label}
        accessibilityRole="radiogroup"
        accessibilityValue={{text: selectedValue.label}}>
        {label}
      </Text>
      <ScrollView horizontal={isHorizontal} style={{...horizontalStyle}}>
        {data.map(item => {
          return (
            <View style={{...verticalStyleButton}} key={item.key}>
              <TouchableOpacity
                style={{
                  ...defaultDataStyle,
                  ...dataStyle,
                  ...tw.style(
                    isSelected(item) &&
                      'border-2 border-primary-700 bg-gray-100',
                  ),
                }}
                onPress={() => updateValue(item)}
                activeOpacity={1}
                accessible={true}
                accessibilityLabel={item.label}>
                <Text style={{...defaultTextStyle}}>{item.label}</Text>
                {showRadio && isSelected(item) && (
                  <View style={{...defaultRadioStyle, ...radioStyle}} />
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RadioGroup;
