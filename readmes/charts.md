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
| setBalloonData   |                          |         | :x:                | Under construction      