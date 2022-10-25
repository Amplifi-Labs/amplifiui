import * as React from 'react';
import {TextInput} from 'react-native';

import type {MaskInputProps} from './InputMask.types';
import formatWithMask from './formatWithMask';

export default React.forwardRef(function (
  props: MaskInputProps,
  ref: React.Ref<TextInput>,
) {
  const {
    mask,
    value,
    style,
    onChangeText,
    placeholderFillCharacter = '_',
    obfuscationCharacter,
    showObfuscatedValue,
    selection,
    tw,
    placeholderStyle,
    placeholderTextColor,
    placeholder,
    ...rest
  } = props;

  const maskArray = React.useMemo(
    () => (typeof mask === 'function' ? mask(value) : mask),
    [mask, value],
  );

  const formattedValueResult = React.useMemo(() => {
    const result = formatWithMask({
      text: value || '',
      mask,
      obfuscationCharacter,
    });

    return result;
  }, [mask, obfuscationCharacter, value]);

  const maskHasObfuscation = React.useMemo(
    () => maskArray && !!maskArray.find(maskItem => Array.isArray(maskItem)),
    [maskArray],
  );

  const isValueObfuscated = React.useMemo(
    () => !!maskHasObfuscation && !!showObfuscatedValue,
    [maskHasObfuscation, showObfuscatedValue],
  );

  const handleChangeText = React.useCallback(
    (text: string) => {
      let textToFormat = text;

      if (isValueObfuscated) {
        textToFormat = formattedValueResult.masked || '';

        if (textToFormat.length > text.length) {
          textToFormat = textToFormat.slice(0, -1);
        } else if (textToFormat.length < text.length) {
          textToFormat = textToFormat + text[text.length - 1];
        }
      }

      const result = formatWithMask({
        text: textToFormat,
        mask,
        obfuscationCharacter,
      });

      onChangeText && onChangeText(result.unmasked);
    },
    [
      isValueObfuscated,
      mask,
      obfuscationCharacter,
      onChangeText,
      formattedValueResult.masked,
    ],
  );

  const defaultPlaceholder = React.useMemo(() => {
    if (maskArray && !placeholder) {
      return maskArray
        .map(maskChar => {
          if (typeof maskChar === 'string') {
            return maskChar;
          } else {
            return placeholderFillCharacter;
          }
        })
        .join('');
    } else {
      return placeholder;
    }
  }, [maskArray, placeholderFillCharacter]);

  const inputValue = isValueObfuscated
    ? formattedValueResult.obfuscated
    : formattedValueResult.masked;

  const inputProcessedStyle = inputValue
    ? style
    : {...style, ...placeholderStyle};

  return (
    <TextInput
      {...rest}
      value={inputValue || undefined}
      selection={
        isValueObfuscated
          ? {start: inputValue.length, end: inputValue.length}
          : selection
      }
      onChangeText={handleChangeText}
      placeholderTextColor={placeholderTextColor}
      ref={ref}
      style={{
        ...tw`text-gray-500 font-normal`,
        ...inputProcessedStyle,
      }}
      placeholder={defaultPlaceholder}
    />
  );
});
