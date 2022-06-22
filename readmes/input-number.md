### InputNumber

#### Description:
This component is a subset of the InputText created specifically to receive numbers.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---forms--input-number?platform=ios

```
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Card, Button, CollapsibleModal, InputNumber, H3 } from '@amplifiui/mobile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import tw from './services/tw';

import MoneyIcon from './icons/money';

export default function App() {
  return (
    <SafeAreaView style={tw`mt-8 bg-gray-200 flex-1`}>
      <View style={tw`m-4`}>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <Text style={tw`mb-4 font-bold`}>
            Default Input Number
          </Text>
          <InputNumber tw={tw} onChangeText={() => null} value={0} />
        </Card>
        <Card tw={tw} style={tw`mt-4 font-bold shadow`}>
          <Text style={tw`mb-4 font-bold`}>
            Input Number - Label, Placeholder and Helper
          </Text>
          <InputNumber
            tw={tw}
            onChangeText={() => null}
            value={0}
            label="This is a label"
            placeholder="This is a placeholder"
            helper="This is a helper text"
          />
        </Card>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <Text style={tw`mb-4 font-bold`}>
            Input Number with Custom Icon
          </Text>
          <InputNumber
            tw={tw}
            onChangeText={() => null}
            value={0}
            icon={MoneyIcon}
            iconStyle={tw`mx-4`}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/sample-input-number.png" alt="Card Sample Image" width=200  />

#### Props
| Variable         | Value Type                   | Default | Mandatory          | Notes                                                                          |
| ---------------- | ---------------------------- | ------- | ------------------ | ------------------------------------------------------------------------------ |
| tw               | Tailwind Function            | \_      | :heavy_check_mark: | \_                                                                             |
| label            | string                       | \_      | :x:                | Text that goes over the input field.                                           |
| placeholder      | string                       | \_      | :x:                | Text that goes inside the input field if value is empty.                       |
| helper           | string                       | \_      | :x:                | Text that goes under the input field.                                          |
| style            | Tailwind Style               | \_      | :x:                | This style is applied to the container View                                    |
| labelStyle       | Tailwind Style               | \_      | :x:                | This style is applied specifically to the label.                               |
| inputStyle       | Tailwind Style               | \_      | :x:                | This style is applied specifically to the input.                               |
| helperStyle      | Tailwind Style               | \_      | :x:                | This style is applied specifically to the helper text.                         |
| icon             | Valid SVG string             | \_      | :x:                | This is an optional icon that can be displayed by the end of the input.        |
| iconStyle        | Tailwind Style               | \_      | :x:                | This style is applied specifically to the icon.                                |
| onChangeText     | (value: string) => void      | \_      | :heavy_check_mark: | Callback when the text changes.                                                |
| value            | string                       | \_      | :heavy_check_mark: | Value for the input field.                                                     |
| inputType        | 'primary' \| 'secondary'     | \_      | :x:                | If selected, the project primary or secondary colors will be applied.          |
| helperType       | 'primary' \| 'secondary'     | \_      | :x:                | Shows the helper text with primary or secondary colors.                        |
| error            | string                       | \_      | :x:                | Replaces the helper text (same position). Used to return errors from the API   |
| errorStyle       | Tailwind Style               | \_      | :x:                | This style is applied specifically to the error text.                          |
| keyboardType     | RN KeyboardTypeOptions       | \_      | :x:                | Defines the type of keyboards that will be presented to the user.              |
| onBlur           | NativeSyntheticEvent         | \_      | :x:                | Detects when the user leaves the input field. Used in combination with Formik. |