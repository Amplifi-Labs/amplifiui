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
