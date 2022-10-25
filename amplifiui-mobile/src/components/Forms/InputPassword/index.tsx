import * as React from 'react';
import {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  label?: string;
  placeholder?: string;
  helper?: string;
  style?: Style;
  labelStyle?: Style;
  inputStyle?: Style;
  placeholderStyle?: Style;
  helperStyle?: Style;
  iconStyle?: Style;
  onChangeText: (text: string) => void;
  value: string;
  inputType?: 'primary' | 'secondary';
  helperType?: 'primary' | 'secondary';
  invisibleIcon: string;
  visibleIcon: string;
  error?: string;
  errorStyle?: Style;
  onFocusBorderColor?: Style;
};

const InputPassword: React.FC<Props> = ({
  tw,
  label,
  placeholder,
  helper,
  style,
  labelStyle,
  inputStyle,
  placeholderStyle,
  helperStyle,
  iconStyle,
  onChangeText,
  value,
  inputType,
  helperType,
  invisibleIcon,
  visibleIcon,
  error,
  errorStyle,
  onFocusBorderColor,
}): JSX.Element => {
  const [visible, setVisible] = React.useState(false);

  const [securePasswordVisible, setSecurePasswordVisible] =
    React.useState(true);

  const [onFocus, setOnFocus] = useState(false);
  const [onBlur, setOnBlur] = useState(false);

  React.useEffect(() => {
    const condition1 =
      !visible && (value === '' || typeof value === 'undefined');
    const condition2 = !(
      !visible &&
      (value !== '' || typeof value !== 'undefined')
    );

    setSecurePasswordVisible(condition1 || condition2 || visible);
  }, [visible, value]);

  const defaultInputStyle = tw.style(
    'text-sm font-normal text-gray-500 p-3 bg-white rounded-md border-gray-300 border w-full',
  );

  const defaultLabelStyle = tw.style('text-sm font-medium text-gray-700 pb-1');

  const defaultHelperStyle = tw.style('text-xs font-normal text-gray-500 pt-1');
  const defaultErrorStyle = tw.style('text-xs font-normal text-red-500 pt-1');
  const defaultIconStyle = tw.style(
    'justify-center absolute top-0 right-0 h-full w-8',
  );

  const typeInputStyle = inputType
    ? tw`border-${inputType}-700 ${
        inputType === 'primary' ? 'border-2' : 'border'
      } min-h-12`
    : tw`min-h-12`;

  const typeHelperStyle = helperType ? tw`text-${helperType}-700` : tw``;
  const messageError = error ?? <Text>Required Field</Text>;

  const changeColorBorderOnFocus = () => {
    setOnBlur(false);
    setOnFocus(true);
  };

  const changeColorBorderOnBlur = () => {
    setOnFocus(false);
    setOnBlur(true);
  };

  const onBlurColor = onBlur ? tw`text-red-500` : tw``;
  const onFocusBorderStyleColor = onFocus
    ? onFocusBorderColor ?? tw`text-light-blue-700`
    : tw``;

  return (
    <View style={style}>
      {label && (
        <Text
          style={{
            ...defaultLabelStyle,
            ...labelStyle,
          }}>
          {label}
        </Text>
      )}
      <View>
        <TextInput
          style={{
            ...defaultInputStyle,
            ...typeInputStyle,
            ...inputStyle,
            ...onFocusBorderStyleColor,
            ...onBlurColor,
          }}
          onChange={e => {
            e.stopPropagation();
            e.preventDefault();
            const {text} = e.nativeEvent;
            if (!securePasswordVisible) {
              const c = text.toString().replace(/[•]/g, '');
              let processed: string;
              if (c.length > 0) {
                processed = value + c.charAt(c.length - 1);
              } else {
                // Runs when hitting backspace
                processed = value.substring(0, value.length - 1);
              }
              onChangeText(processed);
            } else {
              onChangeText(text);
            }
          }}
          onFocus={changeColorBorderOnFocus}
          onBlur={changeColorBorderOnBlur}>
          <>
            {!onFocus && !!placeholder && !value && (
              <Text
                style={{
                  ...tw`text-gray-500 font-normal`,
                  ...placeholderStyle,
                }}>
                {placeholder || ''}
              </Text>
            )}
            {!!value && (
              <Text>
                {securePasswordVisible
                  ? value
                  : value.toString().replace(/./g, '•')}
              </Text>
            )}
          </>
        </TextInput>
        <TouchableOpacity
          style={{
            ...defaultIconStyle,
            ...iconStyle,
          }}
          onPress={() => setVisible(!visible)}>
          <SvgXml xml={visible ? visibleIcon : invisibleIcon} />
        </TouchableOpacity>
      </View>
      {helper && !error && (
        <Text
          style={{
            ...defaultHelperStyle,
            ...typeHelperStyle,
            ...helperStyle,
          }}>
          {helper}
        </Text>
      )}
      {onBlur && (
        <Text
          style={{
            ...defaultErrorStyle,
            ...errorStyle,
          }}>
          {messageError}
        </Text>
      )}
    </View>
  );
};

export default InputPassword;
