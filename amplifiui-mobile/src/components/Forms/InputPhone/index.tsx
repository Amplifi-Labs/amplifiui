import * as React from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, Text, TextInputFocusEventData, View, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { TailwindFn } from 'twrnc';
import { Style } from 'twrnc/dist/esm/types';
import InputMask from '../masks/InputMask';
import type { MaskInputProps } from '../masks/InputMask.types';
import Formats from './formats';
import ChevronIcon from './chevron-icon';
import {Picker} from '@react-native-picker/picker';

let to: ReturnType<typeof setTimeout>;

type Props = {
  tw: TailwindFn;
  label?: string;
  placeholder?: string;
  helper?: string;
  style?: Style;
  labelStyle?: Style;
  inputStyle?: Style;
  placeholderStyle?: Style;
  iconStyle?: Style;
  helperStyle?: Style;
  onChangeText: (text: string) => void;
  value: string;
  inputType?: 'primary' | 'secondary';
  helperType?: 'primary' | 'secondary';
  error?: string;
  errorStyle?: Style;
  icon?: string;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  required?: boolean;
  requiredStyle?: Style;
  defaultCountry?: 'US' | 'BR';
} & MaskInputProps;

const InputPhone = ({
  tw,
  label,
  placeholder,
  helper,
  style,
  labelStyle,
  inputStyle,
  placeholderStyle,
  iconStyle,
  helperStyle,
  onChangeText,
  value,
  inputType,
  helperType,
  error,
  errorStyle,
  icon,
  keyboardType = 'phone-pad',
  showObfuscatedValue,
  placeholderFillCharacter,
  obfuscationCharacter,
  onBlur,
  required = false,
  requiredStyle,
  defaultCountry = 'US',
}: Props): JSX.Element => {
  const [selectedCountry, setSelectedCountry] = React.useState(defaultCountry);
  const [selectedMask, setSelectedMask] = React.useState<(string | RegExp)[]>();
  const [showPicker, setShowPicker] = React.useState(false);

  const defaultLabelStyle = tw.style('text-sm font-medium text-gray-700');
  const defaultInputStyle = tw.style(
    'text-sm font-normal text-gray-500 p-3 bg-white rounded-md border-gray-300 border pl-14',
  );
  const defaultIconStyle = tw.style(
    'justify-center absolute top-0 right-0 h-full w-8',
  );
  const defaultHelperStyle = tw.style('text-xs font-normal text-gray-500 pt-1');
  const defaultErrorStyle = tw.style('text-xs font-normal text-red-500 pt-1');

  const typeInputStyle = inputType
    ? tw`border-${inputType}-700 ${
        inputType === 'primary' ? 'border-2' : 'border'
      } min-h-12`
    : tw`min-h-12`;

  const typeHelperStyle = helperType ? tw`text-${helperType}-700` : tw``;

  const defaultRequiredStyle = tw`ml-1 text-red-400 text-md`;

  React.useEffect(() => {
    console.log('selectedCountry:', selectedCountry);
    const obj = Formats.find((format) => format.code === selectedCountry);
    if (obj) {
      setSelectedMask(obj.mask);
    }

    console.log('Timeout started');
    to = setTimeout(() => {
      console.log('Running timeout')
      setShowPicker(false);
    }, 5000);
  }, [selectedCountry]);

  return (
    <View style={style}>
      {label && (
          <View style={tw`flex-row`}>
            <Text style={{...defaultLabelStyle, ...labelStyle}}>{label}</Text>
            {required && (
              <Text style={{...defaultRequiredStyle, ...requiredStyle}}>*</Text>
            )}
          </View>
      )}
      <View>
        <InputMask
          tw={tw}
          style={{...defaultInputStyle, ...typeInputStyle, ...inputStyle, ...tw`pb-4`}}
          onChangeText={onChangeText}
          value={value || undefined}
          placeholder={placeholder || undefined}
          placeholderStyle={placeholderStyle}
          keyboardType={keyboardType}
          mask={selectedMask}
          showObfuscatedValue={showObfuscatedValue}
          placeholderFillCharacter={placeholderFillCharacter}
          obfuscationCharacter={obfuscationCharacter}
          onBlur={onBlur}
        />
        {icon && (
          <View style={{...defaultIconStyle, ...iconStyle}}>
            <SvgXml xml={icon} />
          </View>
        )}
        <TouchableOpacity
          style={tw`absolute top-0 left-0 h-full w-12 flex-col justify-center`}
          onPress={() => setShowPicker(!showPicker)}
        >
          <View style={tw`flex-row`}>
            <Text style={tw`ml-2 text-gray-500`}>{selectedCountry}</Text>
            <View style={tw`flex-col justify-center ml-1`}>
              <SvgXml xml={ChevronIcon} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {helper && !error && (
        <Text
          style={{...defaultHelperStyle, ...typeHelperStyle, ...helperStyle}}>
          {helper}
        </Text>
      )}
      {error && (
        <Text style={{...defaultErrorStyle, ...errorStyle}}>{error}</Text>
      )}
      {showPicker && (
        <Picker
          selectedValue={selectedCountry}
          onValueChange={(itemValue) => {
            if (to) {
              clearTimeout(to);
            }
            
            setSelectedCountry(itemValue)
          }
        }>
          {Formats.map((format) => {
            return (
              <Picker.Item
                key={`${format.code}`}
                label={`${format.code}`}
                value={`${format.code}`}
              />
            )
          })}
        </Picker>
      )}
    </View>
  );
};

export default InputPhone;
