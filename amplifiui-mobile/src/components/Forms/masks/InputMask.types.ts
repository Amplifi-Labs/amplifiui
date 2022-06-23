import type {TextInputProps} from 'react-native';

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

  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}
