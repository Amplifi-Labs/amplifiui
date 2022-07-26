import * as React from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
  TouchableOpacity,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { TailwindFn } from 'twrnc';
import { Style } from 'twrnc/dist/esm/types';

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
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
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
  onBlur,
}): JSX.Element => {
  const [visible, setVisible] = React.useState(false);

  const [isFocused, setFocused] = React.useState(false);

  const [securePasswordVisible, setSecurePasswordVisible] = React.useState(true);

  React.useEffect(() => {
    const condition1 = (!visible && (value === '' || typeof value === 'undefined') );
    const condition2 = !(!visible && (value !== '' || typeof value !== 'undefined') );

    setSecurePasswordVisible(condition1 || condition2 || visible);
  }, [visible, value]);

  const defaultInputStyle = tw.style(
    'text-sm font-normal text-gray-500 p-3 bg-white rounded-md border-gray-300 border w-full'
  );

  const defaultLabelStyle = tw.style('text-sm font-medium text-gray-700 pb-1');

  const defaultHelperStyle = tw.style('text-xs font-normal text-gray-500 pt-1');
  const defaultErrorStyle = tw.style('text-xs font-normal text-red-500 pt-1');
  const defaultIconStyle = tw.style(
    'justify-center absolute top-0 right-0 h-full w-8'
  );

  const typeInputStyle = inputType
    ? tw`border-${inputType}-700 ${
        inputType === 'primary' ? 'border-2' : 'border'
      } min-h-12`
    : tw`min-h-12`;

  const typeHelperStyle = helperType ? tw`text-${helperType}-700` : tw``;

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
          }}
          onChangeText={(e) => {
            if (!securePasswordVisible) {
              const c = e.toString().replace(/[•]/g,'');
              if (e.length - value.length > 1) {
                onChangeText(c);
              } else if (e.length - value.length > 0) {
                onChangeText(value+c);
              } else { // Runs when hitting backspace
                onChangeText(value.substring(0, value.length-1));
              }
            } else {
              onChangeText(e);
            }
          }}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (onBlur) {
              onBlur(e);
            }

            setFocused(false);
          }}>
          <>
            {!isFocused && !!placeholder && !value && (
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
                {securePasswordVisible ? value : value.toString().replace(/./g,'•')}
              </Text>
            )}
          </>
        </TextInput>
        <TouchableOpacity
          style={{
            ...defaultIconStyle,
            ...iconStyle,
          }}
          onPress={() => setVisible(!visible)}
        >
          <SvgXml xml={visible ? visibleIcon : invisibleIcon} />
        </TouchableOpacity>
      </View>
      {helper && !error && (
        <Text
          style={{
            ...defaultHelperStyle,
            ...typeHelperStyle,
            ...helperStyle
          }}
        >
          {helper}
        </Text>
      )}
      {error && (
        <Text
          style={{
            ...defaultErrorStyle,
            ...errorStyle
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputPassword;
