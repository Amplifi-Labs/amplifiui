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