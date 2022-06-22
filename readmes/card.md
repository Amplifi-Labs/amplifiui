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
| children  | String                   | \_      | :x:                | The children props are limited to strings.   