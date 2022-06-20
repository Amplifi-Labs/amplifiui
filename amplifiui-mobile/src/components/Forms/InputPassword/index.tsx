import * as React from 'react';
import { NativeSyntheticEvent, Text, TextInput, TextInputFocusEventData, View } from 'react-native';
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
  textInputStyle?: Style;
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
      }`
    : tw``;

  const typeHelperStyle = helperType ? tw`text-${helperType}-700` : tw``;

  return (
    <View style={style}>
      {label && (
        <Text style={{...defaultLabelStyle, ...labelStyle}}>{label}</Text>
      )}
      <View>
        <TextInput
          style={{...defaultInputStyle, ...typeInputStyle, ...inputStyle}}
          onChangeText={onChangeText}
          value={value || undefined}
          placeholder={placeholder?.toString() || undefined}
          secureTextEntry={!visible}
          onBlur={onBlur}
        />
        <View style={{...defaultIconStyle, ...iconStyle}}>
          <SvgXml
            xml={visible ? visibleIcon : invisibleIcon}
            onPress={() => setVisible(!visible)}
          />
        </View>
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

export default InputPassword;
