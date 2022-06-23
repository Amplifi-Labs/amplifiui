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
- Heavily depends on SVGs;

If your project uses Amplifi UI, please, let us know! We would love :heart: to have this information!

## Notes
- This library was designed to work with Tailwind styles, through [twrnc](https://www.npmjs.com/package/twrnc). For a complete documentation on how to use tailwinds using react native, please, check [twrnc's](https://www.npmjs.com/package/twrnc) documentation. Thank you, [Jared](https://www.npmjs.com/~jaredhenderson)!
- It's mandatory to have this packages installed on your project:
  - [react](https://www.npmjs.com/package/react);
  - [react-native](https://www.npmjs.com/package/react-native);
  - [react-native-svg](https://www.npmjs.com/package/react-native-svg);
  - [twrnc](https://www.npmjs.com/package/twrnc),
  - [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context);

# Table of Contents

  - [BackgroundImage](#backgroundimage)
  - [Button](#button)
  - [Card](#card)
  - [Charts](#charts)
    - [VerticalBars](#verticalbars)
  - [CollapsibleModal](#collapsiblemodal)
  - [Forms](#forms)
    - [InputNumber](#inputnumber)
    - [InputPassword](#inputpassword)
    - [InputText](#inputtext)
  - [Typography](#typography)
  - [HR](#hr)
  - [Image](#image)
  - [LoadingRound](#loadinground)
  - [ProgressSteps](#progresssteps)
  - [Spinner](#spinner)
  - [SwipeCarousel](#swipecarousel)

# Components

## BackgroundImage

#### Description:

This component creates a View with an image as background. Accepts jpeg and png files.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---backgroundimage?platform=ios

```
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, H2, BackgroundImage } from '@amplifiui/mobile';

import Background from './assets/pexels-tieu-linh-11635802.jpg';

import tw from './services/tw';

export default function App() {
  return (
    <BackgroundImage
      tw={tw}
      mask="bg-black/40"
      image={Background}
    >
      <View>
        <Card tw={tw} style={tw`mt-10 mx-4`}>
          <H2 tw={tw}>You see a Background Image with a Mask</H2>
        </Card>
      </View>
    </BackgroundImage>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/master/amplifiui-mobile/files/background-image.png" alt="Background Image Sample Image" width=200  />

#### Props:

| Variable    | Value Type                | Default | Mandatory          | Notes                                                                           |
| ----------- | ------------------------- | ------- | ------------------ | ------------------------------------------------------------------------------- |
| tw          | Tailwind Function         | \_      | :heavy_check_mark: | \_                                                                              |
| image       | Image                     | \_      | :heavy_check_mark: | \_                                                                              |
| style       | Tailwind Style            | \_      | :x:                | \_                                                                              |
| children    | JSX.Element/JSX.Element[] | \_      | :x:                | \_                                                                              |
| bottomColor | string                    | \_      | :x:                | This color is applied on the safe area on iOS devices                           |
| mask        | string                    | \_      | :x:                | This is a color with an alpha channel. It adds a mask over the background image |

## Button

#### Description:

This is a clickable component and can execute functions passed as an argument (onPress). Accepts icons and texts as parameters.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---button?platform=ios

```
import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, H2 } from '@amplifiui/mobile';

import RightIcon from './icons/arrow-right-white';

import tw from './services/tw';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={tw`p-2 mt-10`}>
        <Card tw={tw} style={tw`bg-gray-100 mb-4`}>
          <H2 tw={tw} style={tw`pb-2`}>Button Vanilla</H2>
          <Button tw={tw} onPress={() => console.log('You clicked on me!')}>Click Me</Button>
        </Card>
        <Card tw={tw} style={tw`bg-gray-100 mb-4`}>
          <H2 tw={tw} style={tw`pb-2`}>Button Primary</H2>
          <Button tw={tw} type="primary" onPress={() => console.log('You clicked on me!')}>Click Me</Button>
        </Card>
        <Card tw={tw} style={tw`bg-gray-100 mb-4`}>
          <H2 tw={tw} style={tw`pb-2`}>Button Secondary</H2>
          <Button tw={tw} type="secondary" onPress={() => console.log('You clicked on me!')}>Click Me</Button>
        </Card>
        <Card tw={tw} style={tw`bg-gray-100 mb-4`}>
          <H2 tw={tw} style={tw`pb-2`}>Button With Icon on The Right</H2>
          <Button tw={tw} onPress={() => console.log('You clicked on me!')} iconRight={RightIcon}>Click Me</Button>
        </Card>
        <Card tw={tw} style={tw`bg-gray-100 mb-4`}>
          <H2 tw={tw} style={tw`pb-2`}>Button With Customized TailwindCSS</H2>
          <Button
            tw={tw}
            onPress={() => console.log('You clicked on me!')}
            style={tw`bg-green-700 rounded-full`}
            textStyle={tw`text-gray-100 font-bold text-2xl`}
          >
            Click Me
          </Button>
        </Card>
        <Card tw={tw} style={tw`bg-gray-100 mb-4`}>
          <H2 tw={tw} style={tw`pb-2`}>Button with Loading Indicator</H2>
          <Button
            tw={tw}
            onPress={() => console.log('You clicked on me!')}
            style={tw`bg-orange-700`}
            textStyle={tw`text-gray-100`}
            isLoading={true}
          >
            Click Me
          </Button>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/master/amplifiui-mobile/files/sample-buttons.png" alt="Buttons Image Sample" width=200  />

#### Props:

| Variable     | Value Type               | Default | Mandatory          | Notes                                                                      |
| ------------ | ------------------------ | ------- | ------------------ | -------------------------------------------------------------------------- |
| tw           | Tailwind Function        | \_      | :heavy_check_mark: | \_                                                                         |
| style        | Tailwind Style           | \_      | :x:                | This style is applied to the container View                                |
| textStyle    | Tailwind Style           | \_      | :x:                | This style is applied directly to the Text component                       |
| children     | String                   | \_      | :x:                | The children props are limited to strings.                                 |
| type         | 'primary' OR 'secondary' | \_      | :x:                | If defined applies the default primary or secondary colors as button color |
| onPress      | () => void               | \_      | :heavy_check_mark: | Defines the function that will be executed when button pressed.            |
| iconLeft     | SVG string               | \_      | :x:                | If defined will add an icon to the left of the text.                       |
| iconRight    | SVG string               | \_      | :x:                | If defined will add an icon to the right of the text.                      |
| loadingIcon  | SVG string               | \_      | :x:                | Has a default icon, if defined replaces this default icon                  |
| loadingStyle | Tailwind Style           | \_      | :x:                | \_                                                                         |
| isLoading    | boolean                  | false   | :x:                | \_                                                                         |

## Card

#### Description:

This is a div that has a shadow around it and rounded corners.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---card?platform=ios

```
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, H2, BackgroundImage, Paragraph } from '@amplifiui/mobile';

import Background from './assets/pexels-tieu-linh-11635802.jpg';

import tw from './services/tw';

export default function App() {
  return (
    <BackgroundImage
      tw={tw}
      mask="bg-black/40"
      image={Background}
    >
      <View>
        <Card tw={tw} style={tw`mt-10 mx-4`}>
          <H2 tw={tw}>This is the vanilla Card element</H2>
          <Paragraph tw={tw}>Just some fake content to show how it looks like!</Paragraph>
          <Paragraph tw={tw}>Some more content!</Paragraph>
        </Card>
        <Card tw={tw} style={tw`mt-10 mx-4 border-2 border-dashed border-blue-400 bg-blue-100`}>
          <H2 tw={tw}>This is a customized Card element</H2>
          <Paragraph tw={tw}>Just some fake content to show how it looks like!</Paragraph>
          <Paragraph tw={tw}>Some more content!</Paragraph>
          <Paragraph tw={tw}>As you see, you are free to do a lot of different things!</Paragraph>
        </Card>
      </View>
    </BackgroundImage>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/master/amplifiui-mobile/files/sample-cards.png" alt="Card Sample Image" width=200  />

### Props:

| Variable  | Value Type               | Default | Mandatory          | Notes                                                                      |
| --------- | ------------------------ | ------- | ------------------ | -------------------------------------------------------------------------- |
| tw        | Tailwind Function        | \_      | :heavy_check_mark: | \_                                                                         |
| style     | Tailwind Style           | \_      | :x:                | This style is applied to the container View                                |
| children  | String                   | \_      | :x:                | The children props are limited to strings.                                 |

## Charts

### VerticalBars

#### Description:
This component renders vertical bars charts

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---charts---vertical-bars?platform=ios

```
import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Card, Button, H2, VerticalBars } from '@amplifiui/mobile';

import tw from './services/tw';

const chartData = {
  values: {
    '6': {
      Sales: {amount: 200000, transactions: 20},
      Auths: {amount: 20000, transactions: 20},
      'Returns / Refunds': {amount: 20000, transactions: 20},
    }, // 290k
    '12': {
      Sales: {amount: 150000, transactions: 30},
      Auths: {amount: 100000, transactions: 30},
      'Returns / Refunds': {amount: 40000, transactions: 30},
    }, // 290k
    '18': {
      Sales: {amount: 160000, transactions: 40},
      Auths: {amount: 40000, transactions: 40},
      'Returns / Refunds': {amount: 60000, transactions: 40},
    }, // 260k
    '24': {
      Sales: {amount: 140000, transactions: 50},
      Auths: {amount: 50000, transactions: 50},
      'Returns / Refunds': {amount: 60000, transactions: 50},
    }, // 250k
  },
};

const windowWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={tw`flex-1 p-2 mt-10 bg-gray-400`}>
      <Card tw={tw} style={tw`bg-gray-100 mb-4 mt-8`}>
        <H2 tw={tw} style={tw`pb-2`}>Vertical Chart Sample</H2>
        <View style={tw`h-62`}>
          <VerticalBars
            tw={tw}
            style={tw`bg-white flex-1`}
            data={chartData}
            width={windowWidth - 84}
            height={210}
            scaleSize={400000}
            fontColor="#6B7280"
          />
        </View>
      </Card>
    </View>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/master/amplifiui-mobile/files/sample-charts-vertical-bars.png" alt="Card Sample Image" width=200  />

#### Props

| Variable         | Value Type               | Default | Mandatory          | Notes                                                                      |
| ---------------- | ------------------------ | ------- | ------------------ | -------------------------------------------------------------------------- |
| tw               | Tailwind Function        | \_      | :heavy_check_mark: | \_                                                                         |
| style            | Tailwind Style           | \_      | :x:                | This style is applied to the container View                                |
| labelingStyle    | Tailwind Style           | \_      | :x:                | This style is applied to the charts labels                                 |
| data             | See details bellow       | \_      | :heavy_check_mark: | \_                                                                         |
| colorsArray      | string[]                 | ['#34D399', '#38BDF8', '#A78BFA'] | :x: | \_                                                              |
| width            | number                   | \_      | :heavy_check_mark: | \_                                                                         |
| height           | number                   | \_      | :heavy_check_mark: | \_                                                                         |
| scaleSize        | number                   | \_      | :heavy_check_mark: | This is the maximum number to be displayed on the chart scale              |
| showLabels       | boolean                  | true    | :x:                | Display labels on the chart, or not                                        |
| fontColor        | Hexadecimal color code   | #6B7280 | :x:                | Changes the color for all texts on the chart                               |
| notSelectedColor | Hexadecimal color code   | #D1D5DB | :x:                | The color of the non selected columns                                      |
| balloonData      |                          |         | :x:                | Under construction                                                         |
| setBalloonData   |                          |         | :x:                | Under construction                                                         |

## CollapsibleModal

#### Description:
This component presents a collapsible modal to the user. The user, by dragging the "header" of the modal can close it.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---collapsible-modal?platform=ios

```
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Card, Button, H2, CollapsibleModal } from '@amplifiui/mobile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import tw from './services/tw';

export default function App() {
  const [isModalVisible, setModalVisible] = React.useState(true);

  return (
    <SafeAreaProvider>
      <Button
        tw={tw}
        style={tw`mt-20 mx-4`}
        onPress={() => setModalVisible(true)}>
        Click to Open Modal
      </Button>
      <Text style={tw`mt-4 mx-4 font-bold`}>
        To close the modal, please drag it to the bottom.
      </Text>
      <CollapsibleModal
        tw={tw}
        maxHeight={290}
        show={isModalVisible}
        setShow={() => setModalVisible(!isModalVisible)}>
        <Text style={tw`mt-4 mx-4 font-bold text-center`}>
          This is the modal content
        </Text>
        <Text style={tw`mt-4 mx-4 font-bold text-center`}>
          To close the modal, please drag it to the bottom.
        </Text>
        <Text style={tw`mt-4 mx-4 font-bold text-center`}>
          OR
        </Text>
        <Button
          tw={tw}
          style={tw`mt-4 mx-4`}
          onPress={() => setModalVisible(false)}>
          Click to Close Modal
        </Button>
      </CollapsibleModal>
    </SafeAreaProvider>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/sample-collapsible-modal.gif" alt="Card Sample Image" width=200  />

#### Props
| Variable         | Value Type                   | Default | Mandatory          | Notes                                                                      |
| ---------------- | ---------------------------- | ------- | ------------------ | -------------------------------------------------------------------------- |
| tw               | Tailwind Function            | \_      | :heavy_check_mark: | \_                                                                         |
| children         | JSX.Element \| JSX.Element[] | \_      | :x:                | The children props are limited to strings.                                 |
| maxHeight        | maxHeight                    | \_      | :heavy_check_mark: | This is mandatory and determines the height of the modal.                  |
| show             | boolean                      | \_      | :heavy_check_mark: | If true shows the modal.                                                   |
| setShow          | () => void                   | \_      | :heavy_check_mark: | This is the callback to update the modal state (opened/closed)             |

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
This component implements a Horizontal Rule.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---hr?platform=ios

```
import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, HR, Paragraph } from '@amplifiui/mobile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import tw from './services/tw';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-gray-200 flex-1`}>
      <View style={tw`m-4`}>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <Paragraph tw={tw}>
            Do you want a horizontal rule, please use the following component!
          </Paragraph>
          <HR tw={tw} style={tw`my-4`} />
          <Paragraph tw={tw}>
            And as you can see, you have a horizontal rule!
          </Paragraph>
        </Card>
        <Card tw={tw} style={tw`mt-4 shadow`}>
          <Paragraph tw={tw}>
            Now if you want a HR with different a different color ...
          </Paragraph>
          <HR tw={tw} style={tw`my-4`} color="blue-400" />
          <Paragraph tw={tw}>
            ... this is how you get one!
          </Paragraph>
        </Card>
      </View>
    </SafeAreaView>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/sample-hr.png" alt="Horizontal Rule Sample Image" width=200  />

#### Props
| Variable         | Value Type                   | Default | Mandatory          | Notes                                                                          |
| ---------------- | ---------------------------- | ------- | ------------------ | ------------------------------------------------------------------------------ |
| tw               | Tailwind Function            | \_      | :heavy_check_mark: | \_                                                                             |
| color            | Tailwind Color               | black   | :x:                | Tailwind Color, i.e. blue-400                                                  |
| style            | Tailwind Style               | \_      | :x:                | This style is applied to the container View                                    |

## Image

#### Description:
This component makes it possible to render SVGs, JPEGs and PNGs on mobile.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---image?platform=ios

```
import * as React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Card, Paragraph, Image } from '@amplifiui/mobile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import tw from './services/tw';

import SVGSample from './assets/svg';
import JPEGSample from './assets/pexels-william-larsen-11515591.jpg';
import PNGSample from './assets/2cd43b_eafff063f69f4ea8b65b3ae32ca62cb8_mv2.png';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-gray-200 flex-1`}>
      <ScrollView>
        <View style={tw`m-4`}>
          <Card tw={tw} style={tw`mt-4 shadow`}>
            <Paragraph tw={tw}>
              Let's display a SVG!
            </Paragraph>
            <View style={tw`flex-row justify-center my-6`}>
              <Image
                tw={tw}
                svg={SVGSample}
                width={100}
                height={100}
                style={tw`h-25`}
              />
            </View>
          </Card>
          <Card tw={tw} style={tw`mt-4 shadow`}>
            <Paragraph tw={tw}>
              Now, this is a JPEG
            </Paragraph>
            <View style={tw`flex-row justify-center my-6`}>
              <Image
                tw={tw}
                src={JPEGSample}
                width={200}
                height={200}
              />
            </View>
          </Card>
          <Card tw={tw} style={tw`mt-4 shadow`}>
            <Paragraph tw={tw}>
              Now, this is a PNG
            </Paragraph>
            <View style={tw`flex-row justify-center my-6`}>
              <Image
                tw={tw}
                src={PNGSample}
                width={70}
                height={200}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/sample-images.png" alt="Images Samples" width=200  />

#### Props
| Variable         | Value Type                   | Default | Mandatory          | Notes                                                                          |
| ---------------- | ---------------------------- | ------- | ------------------ | ------------------------------------------------------------------------------ |
| tw               | Tailwind Function            | \_      | :heavy_check_mark: | \_                                                                             |
| style            | Tailwind Style               | \_      | :x:                | This style is applied to the container View                                    |
| svg              | SVG String                   | \_      | :x:                | When it's a SVG image, this prop needs to be informed.                         |
| src              | ImageSourcePropType          | \_      | :x:                | When it's a JPEG or PNG image, this prop needs to be informed.                 |
| width            | number                       | \_      | :x:                | The width of the image                                                         |
| height           | number                       | \_      | :x:                | The height of the image                                                        |

## LoadingRound

#### Description:

#### Samples

#### Props

## ProgressSteps

#### Description:
This component shows progress.

#### Samples
Try using Expo:
https://snack.expo.dev/@paulorieck/amplifi-ui---mobile---progress-indicator?platform=ios

```
import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, Paragraph, Image, ProgressSteps, H3, Button } from '@amplifiui/mobile';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import tw from './services/tw';

export default function App() {
  const [card1Indicator, setCard1Indicator] = React.useState(1);
  const [card2Indicator, setCard2Indicator] = React.useState(1);

  return (
    <SafeAreaView style={tw`bg-gray-200 flex-1`}>
      <View style={tw`m-4`}>
        <Card tw={tw} style={tw`mb-4`}>
          <H3 tw={tw} style={tw`mb-4`}>
            This is a Vanilla Progress Indicator
          </H3>
          <ProgressSteps tw={tw} steps={4} current={card1Indicator} />
          <View style={tw`flex-row justify-around m-4`}>
            <Button
              tw={tw}
              style={tw`flex-1 mr-2`}
              onPress={() => setCard1Indicator(card1Indicator-1 < 0 ? 3 : card1Indicator-1)}>
              Prev
            </Button>
            <Button
              tw={tw}
              style={tw`flex-1 ml-2`}
              onPress={() => setCard1Indicator(card1Indicator+1 > 3 ? 0 : card1Indicator+1)}>
              Next
            </Button>
          </View>
        </Card>
        <Card tw={tw} style={tw`mb-4`}>
          <H3 tw={tw} style={tw`mb-4`}>
            This is a custom Progress Indicator
          </H3>
          <ProgressSteps
            tw={tw}
            steps={4}
            current={2}
            space={4}
            width={32}
            unselectedWidth={12}
            selectedColor="#408E5A"
            unselectedColor="#D6D6D6"
          />
          <View style={tw`flex-row justify-around m-4`}>
            <Button
              tw={tw}
              style={tw`flex-1 mr-2`}
              onPress={() => setCard2Indicator(card2Indicator-1 < 0 ? 3 : card2Indicator-1)}>
              Prev
            </Button>
            <Button
              tw={tw}
              style={tw`flex-1 ml-2`}
              onPress={() => setCard1Indicator(card2Indicator+1 > 3 ? 0 : card2Indicator+1)}>
              Next
            </Button>
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}
```

<img src="https://raw.githubusercontent.com/Amplifi-Labs/amplifiui/main/amplifiui-mobile/files/sample-progressindicator.png" alt="Horizontal Rule Sample Image" width=200  />

#### Props
| Variable         | Value Type                   | Default | Mandatory          | Notes                                                                          |
| ---------------- | ---------------------------- | ------- | ------------------ | ------------------------------------------------------------------------------ |
| tw               | Tailwind Function            | \_      | :heavy_check_mark: | \_                                                                             |
| style            | Tailwind Style               | \_      | :x:                | This style is applied to the container View                                    |
| steps            | number                       | \_      | :heavy_check_mark: | The number of steps on the progress indicator                                  |
| current          | number                       | \_      | :heavy_check_mark: | The current step of the indicator.                                             |
| space            | number                       | 3       | :x:                | Defines the space between indicators.                                          |
| width            | number                       | 17      | :x:                | Defines the width for the selected indicator.                                  |
| diameter         | number                       | 4       | :x:                | Defines the diameter of the unselected indicator.                              |
| selectedColor    | string                       | #6B7280 | :x:                | Defines the color for the selected indicator.                                  |
| unselectedColor  | string                       | #6B7280 | :x:                | Defines the color for the unselected indicators.                               |
| opacity          | number                       | 0.3     | :x:                | Defines the opacity for the unselected indicators.                             |
| radius           | number                       | 2       | :x:                | Defines the round radius of the indicators.                                    |
| unselectedWidth  | number                       | 4       | :x:                | Defines the length of the unselected indicators.                               |

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
