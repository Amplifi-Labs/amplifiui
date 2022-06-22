### InputPassword

#### Description:
This component is a subset of the InputText created specifically to process passwords.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---forms--input-password?platform=ios

```
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Card, Button, InputPassword } from '@amplifiui/mobile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import tw from './services/tw';

import Visible from './icons/eye-on';
import Invisible from './icons/eye-off';

export default function App() {
  const [password1, setPassword1] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  return (
    <SafeAreaView style={tw`mt-8 bg-gray-200 flex-1`}>
      <View style={tw`m-4`}>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <Text style={tw`mb-4 font-bold`}>
            Default Password Input
          </Text>
          <InputPassword
            tw={tw}
            onChangeText={(e) => console.log(e)}
            value={password1}
            visibleIcon={Visible}
            invisibleIcon={Invisible}
          />
        </Card>
        <Card tw={tw} style={tw`mt-4 font-bold shadow`}>
          <Text style={tw`mb-4 font-bold`}>
            Password Input - Label, Placeholder and Helper
          </Text>
          <InputPassword
            tw={tw}
            onChangeText={setPassword2}
            value={password2}
            label="This is a label"
            placeholder="This is a placeholder"
            helper="This is a helper text"
            visibleIcon={Visible}
            invisibleIcon={Invisible}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/sample-input-password.png" alt="Card Sample Image" width=200  />

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
| textInputStyle   | Tailwind Style               | \_      | :x:                | This style is applied specifically to the input text.                          |
| helperStyle      | Tailwind Style               | \_      | :x:                | This style is applied specifically to the helper text.                         |
| invisibleIcon    | Valid SVG string             | \_      | :heavy_check_mark: | This icon is displayed when the password is invisible.                         |
| visibleIcon      | Valid SVG string             | \_      | :heavy_check_mark: | This icon is displayed when the password is visible.                           |
| iconStyle        | Tailwind Style               | \_      | :x:                | This style is applied specifically to the icons.                               |
| onChangeText     | (value: string) => void      | \_      | :heavy_check_mark: | Callback when the text changes.                                                |
| value            | string                       | \_      | :heavy_check_mark: | Value for the input field.                                                     |
| inputType        | 'primary' \| 'secondary'     | \_      | :x:                | If selected, the project primary or secondary colors will be applied.          |
| helperType       | 'primary' \| 'secondary'     | \_      | :x:                | Shows the helper text with primary or secondary colors.                        |
| error            | string                       | \_      | :x:                | Replaces the helper text (same position). Used to return errors from the API   |
| errorStyle       | Tailwind Style               | \_      | :x:                | This style is applied specifically to the error text.                          |
| onBlur           | NativeSyntheticEvent         | \_      | :x:                | Detects when the user leaves the input field. Used in combination with Formik. |