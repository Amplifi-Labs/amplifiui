import * as React from 'react';
import {useState} from 'react';
import {KeyboardTypeOptions, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';
import InputMask from '../masks/InputMask';
import type {MaskInputProps} from '../masks/InputMask.types';

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
  value: string;
  inputType?: 'primary' | 'secondary';
  helperType?: 'primary' | 'secondary';
  error?: string;
  errorStyle?: Style;
  icon?: string;
  keyboardType?: KeyboardTypeOptions;
  required?: boolean;
  requiredStyle?: Style;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  placeholderTextColor?: string;
  onFocusBorderColor?: Style;
} & MaskInputProps;

const InputText = ({
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
  keyboardType = 'default',
  mask,
  showObfuscatedValue,
  placeholderFillCharacter,
  obfuscationCharacter,
  required = false,
  requiredStyle,
  editable = true,
  multiline = false,
  numberOfLines = 4,
  placeholderTextColor,
  onFocusBorderColor,
}: Props): JSX.Element => {
  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
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
      } min-h-12`
    : tw`min-h-12`;

  const typeHelperStyle = helperType ? tw`text-${helperType}-700` : tw``;

  const defaultRequiredStyle = tw`ml-1 text-red-400 text-xs`;

  const messageError = error ?? <Text>Required Field</Text>;

  const changeColorBorderOnFocus = () => {
    setOnBlur(false);
    setOnFocus(true);
  };

  const changeColorBorderOnBlur = () => {
    setOnFocus(false);
    setOnBlur(true);
  };

  const onFocusBorderStyleColor = onFocus
    ? onFocusBorderColor ?? tw`border-light-blue-700`
    : tw``;
  const onFocusColor = onFocus ? tw`text-light-blue-700` : tw``;
  const onBlurBorderColor = onBlur && required ? tw`border-red-500` : tw``;
  const onBlurColor = onBlur && required ? tw`text-red-500` : tw``;

  return (
    <View style={style}>
      {label && (
        <View style={tw`flex-row`}>
          <Text style={{...defaultLabelStyle, ...labelStyle}}>{label}</Text>
          {required && (
            <Text
              style={{
                ...defaultRequiredStyle,
                ...requiredStyle,
                ...onBlurColor,
                ...onFocusColor,
              }}>
              *
            </Text>
          )}
        </View>
      )}
      <View>
        <InputMask
          tw={tw}
          style={{
            ...defaultInputStyle,
            ...typeInputStyle,
            ...inputStyle,
            ...onFocusBorderStyleColor,
            ...onBlurBorderColor,
          }}
          onChangeText={onChangeText}
          value={value || undefined}
          placeholder={placeholder || undefined}
          placeholderStyle={placeholderStyle}
          keyboardType={keyboardType}
          mask={mask}
          showObfuscatedValue={showObfuscatedValue}
          placeholderFillCharacter={placeholderFillCharacter}
          obfuscationCharacter={obfuscationCharacter}
          onFocus={changeColorBorderOnFocus}
          onBlur={changeColorBorderOnBlur}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholderTextColor={placeholderTextColor}
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
      {onBlur && required && (
        <Text style={{...defaultErrorStyle, ...errorStyle}}>
          {messageError}
        </Text>
      )}
    </View>
  );
};

export default InputText;
