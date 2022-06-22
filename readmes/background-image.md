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