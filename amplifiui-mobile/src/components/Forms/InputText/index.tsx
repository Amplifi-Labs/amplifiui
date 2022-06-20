import * as React from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, Text, TextInputFocusEventData, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { TailwindFn } from 'twrnc';
import { Style } from 'twrnc/dist/esm/types';
import InputMask from '../masks/InputMask';
import type { MaskInputProps } from '../masks/InputMask.types';

type Props = {
  tw: TailwindFn;
  label?: string;
  placeholder?: string;
  helper?: string;
  style?: Style;
  labelStyle?: Style;
  inputStyle?: Style;
  iconStyle?: Style;
  helperStyle?: Style;
  onChangeText: ((text: string) => void);
  value: string;
  inputType?: 'primary' | 'secondary';
  helperType?: 'primary' | 'secondary';
  error?: string;
  errorStyle?: Style;
  icon?: string;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
} & MaskInputProps;

const InputText = ({
  tw,
  label,
  placeholder,
  helper,
  style,
  labelStyle,
  inputStyle,
  iconStyle,
  helperStyle,
  onChangeText,
  value,
  inputType,
  helperType,
  error,
  errorStyle,
  icon,
  keyboardType = 'default',
  mask,
  showObfuscatedValue,
  placeholderFillCharacter,
  obfuscationCharacter,
  onBlur,
}: Props): JSX.Element => {
  const defaultLabelStyle = tw.style('text-sm font-medium text-gray-700');
  const defaultInputStyle = tw.style(
    'text-sm font-normal text-gray-500 p-3 bg-white rounded-md border-gray-300 border',
  );
  const defaultIconStyle = tw.style(
    'justify-center absolute top-0 right-0 h-full w-8',
  );
  const defaultHelperStyle = tw.style('text-xs font-normal text-gray-500 pt-1');
  const defaultErrorStyle = tw.style('text-xs font-normal text-red-500 pt-1');

  const typeInputStyle = inputType
    ? tw`border-${inputType}-700 ${
        inputType === 'primary' ? 'border-2' : 'border'
      }`
    : tw``;

  const typeHelperStyle = helperType ? tw`text-${helperType}-700` : tw``;

  return (
    <View style={style}>
      {label && (
        <Text style={{...defaultLabelStyle, ...labelStyle}}>{label}</Text>
      )}
      <View>
        <InputMask
          style={{...defaultInputStyle, ...typeInputStyle, ...inputStyle}}
          onChangeText={onChangeText}
          value={value || undefined}
          placeholder={placeholder || undefined}
          keyboardType={keyboardType}
          mask={mask}
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
    </View>
  );
};

export default InputText;
