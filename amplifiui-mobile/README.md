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

#### Samples

#### Props

## Forms

#### Description:

#### Samples

#### Props

### InputCurrency

#### Description:

#### Samples

#### Props

### InputNumber

#### Description:

#### Samples

#### Props

### InputPassword

#### Description:

#### Samples

#### Props

### InputText

#### Description:

#### Samples

#### Props

## H1

#### Description:

#### Samples

#### Props

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

## Label

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
