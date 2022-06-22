### InputText

#### Description:
This component was designed specifically to receive strings.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---forms--input-text?platform=ios

```
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Card, Button, CollapsibleModal, InputText, H3 } from '@amplifiui/mobile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import tw from './services/tw';

import MoneyIcon from './icons/money';

export default function App() {
  const [text1, setText1] = React.useState('');
  const [text2, setText2] = React.useState('');
  const [text3, setText3] = React.useState('');

  return (
    <SafeAreaView style={tw`bg-gray-200 flex-1`}>
      <View style={tw`m-4`}>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <Text style={tw`mb-4 font-bold`}>
            Default Input Text
          </Text>
          <InputText
            tw={tw}
            onChangeText={setText1}
            value={text1}
          />
        </Card>
        <Card tw={tw} style={tw`mt-4 font-bold shadow`}>
          <Text style={tw`mb-4 font-bold`}>
            Input Text - Label, Placeholder and Helper
          </Text>
          <InputText
            tw={tw}
            onChangeText={setText2}
            value={text2}
            label="This is a label"
            placeholder="This is a placeholder"
            helper="This is a helper text"
          />
        </Card>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <Text style={tw`mb-4 font-bold`}>
            Input Text with Custom Icon
          </Text>
          <InputText
            tw={tw}
            onChangeText={setText3}
            value={text3}
            icon={MoneyIcon}
            iconStyle={tw`mx-4`}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/sample-input-text.png" alt="Card Sample Image" width=200  />

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