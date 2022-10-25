import {ChangeEvent, Dispatch, SetStateAction} from 'react';
import type {TextInputProps} from 'react-native';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

import type {Mask} from './formatWithMask.types';

export interface MaskInputProps extends Omit<TextInputProps, 'onChangeText'> {
  /**
   * Mask
   */
  mask?: Mask;

  /**
   * Whether or not to display the obfuscated value on the `TextInput`. Defaults to false
   */
  showObfuscatedValue?: boolean;

  /**
   * Character to be used as the "fill character" on the default placeholder
   */
  placeholderFillCharacter?: string;

  /**
   * Character to be used on the obfuscated characters. Defaults to "*"
   */
  obfuscationCharacter?: string;

  onChangeText: (
    text: string | ChangeEvent<any>,
  ) => void | Dispatch<SetStateAction<string>>;

  tw: TailwindFn;

  placeholderStyle?: Style;

  style?: Style;

  placeholderTextColor?: string;
}
