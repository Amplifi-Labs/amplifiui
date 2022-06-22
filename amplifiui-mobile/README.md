# Amplifi UI

## Tailwind based React Native components

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/Amplifi-Labs-Logo.png" alt="Amplifi UI Logo" width=200  />

This library is still on initial phase of development. Feel free to use it, but be aware that structural changes are still possible. If you want to use it, please, lock the imported version on your package.json file.

Key concepts of this library:

- Based on Tailwind CSS (through twrnc);
- Components can (and should) be extended and styled using twrnc styles, in a flexible way;
- Based on the KISS principle (Keep It Simple, Stupid);
- Makes props for accessibility mandatory;
- Simplifies hard tasks like, adding animations, easier;
- Tailwind CSS is doing great on the Web apps, we want to make the process of using Tailwind on the mobile as easy as on the web;
- Focus on reusability and flexibility;

If your project uses Amplifi UI, please, let us know! We would love :heart: to have this information!

## Notes
- This library was designed to work with Tailwind styles, through [twrnc](https://www.npmjs.com/package/twrnc). For a complete documentation on how to use tailwinds using react native, please, check [twrnc's](https://www.npmjs.com/package/twrnc) documentation. Thank you, [Jared](https://www.npmjs.com/~jaredhenderson)!
- It's mandatory to have this packages installed on your project:
  - [react](https://www.npmjs.com/package/react);
  - [react-native](https://www.npmjs.com/package/react-native);
  - [react-native-svg](https://www.npmjs.com/package/react-native-svg);
  - [twrnc](https://www.npmjs.com/package/twrnc),
  - [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context);

# Components

| Component Name/Group                               | Short Description                                                                                                               | Snack                                                                                                 |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [BackgroundImage](/readmes/background-image.md)    | This component creates a View with an image as background. Accepts jpeg and png files.                                          | [Snack](https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---backgroundimage?platform=ios)        |
| [Button](/readmes/button.md)                       | This is a clickable component and can execute functions passed as an argument (onPress). Accepts icons and texts as parameters. | [Snack](https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---button?platform=ios)                 |
| [Card](/readmes/card.md)                           | This is a div that has a shadow around it and rounded corners.                                                                  | [Snack](https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---card?platform=ios)                   |
| [Charts - Vertical Bars](/readmes/charts.md)       | This component renders vertical bars charts                                                                                     | [Snack](https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---charts---vertical-bars?platform=ios) |
| [Collapsible Modal](/readmes/collapsible-modal.md) | This component presents a collapsible modal to the user. The user, by dragging the "header" of the modal can close it.          | [Snack](https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---collapsible-modal?platform=ios)      |

## Forms

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
## Typography

#### Description:
A group of components to render text on the screen.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---text-typography?platform=ios

```
import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, H1, H2, H3, Label, Info, Paragraph } from '@amplifiui/mobile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import tw from './services/tw';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-gray-200 flex-1`}>
      <View style={tw`m-4`}>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <H1 tw={tw}>This is an H1</H1>
          <H2 tw={tw}>This is an H2</H2>
          <H3 tw={tw}>This is an H3</H3>
          <Label tw={tw}>This is an Label</Label>
          <Info tw={tw}>This is an Info</Info>
          <Paragraph tw={tw}>This is a Paragraph</Paragraph>
        </Card>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <Paragraph tw={tw}>Styled Texts (you can do whatever you want with TailwindCSS)</Paragraph>
          <H1 tw={tw} style={tw`font-bold text-blue-700`}>This is an H1</H1>
          <H2 tw={tw} style={tw`font-bold text-blue-700`}>This is an H2</H2>
          <H3 tw={tw} style={tw`font-bold text-blue-700`}>This is an H3</H3>
          <Label tw={tw} style={tw`font-bold text-blue-700`}>This is an Label</Label>
          <Info tw={tw} style={tw`font-bold text-blue-700`}>This is an Info</Info>
          <Paragraph tw={tw} style={tw`font-bold text-blue-700`}>This is a Paragraph</Paragraph>
        </Card>
      </View>
    </SafeAreaView>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/sample-texts.png" alt="Texts Sample Image" width=200  />

#### Props
For ALL of the text components:
| Variable         | Value Type                   | Default | Mandatory          | Notes                                                                          |
| ---------------- | ---------------------------- | ------- | ------------------ | ------------------------------------------------------------------------------ |
| tw               | Tailwind Function            | \_      | :heavy_check_mark: | \_                                                                             |
| style            | Tailwind Style               | \_      | :x:                | This style is applied to the container View                                    |
| children         | string                       | \_      | :heavy_check_mark: | Text that goes over the input field.                                           |

## HR

#### Description:

#### Samples

#### Props

## Image

#### Description:

#### Samples

#### Props

## Info

#### Description:

#### Samples

#### Props

## LoadingRound

#### Description:

#### Samples

#### Props

## ProgressSteps

#### Description:

#### Samples

#### Props

## Spinner

#### Description:

#### Samples

#### Props

## SwipeCarousel

#### Description:

#### Samples

#### Props

### Amplifi Labs

This library is being developed by Amplifi Labs. To know more about our company, please, access our [website](https://www.amplifilabs.com).

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/Amplifi-Labs-Logo.png" alt="Amplifi UI Logo" width=200  />
