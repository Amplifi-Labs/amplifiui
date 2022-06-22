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