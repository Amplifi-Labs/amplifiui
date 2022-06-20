import * as React from 'react';
import {View, Text as TextNative} from 'react-native';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';

import Svg, {G, Rect, Text, SvgXml} from 'react-native-svg';

import CircleSvg from './icons/circle';
import Balloon, {BalloonData} from './Balloon';

const defaultColorsArray = ['#34D399', '#38BDF8', '#A78BFA'];

type Value = {
  [key: string]: {amount: number; transactions: number};
};

type Values = {
  [key: string]: Value;
};

export type Data = {
  values: Values;
};

type Props = {
  tw: TailwindFn;
  data: Data;
  colorsArray?: string[];
  style?: Style;
  labelingStyle?: Style;
  width: number;
  height: number;
  scaleSize: number;
  showLabels?: boolean;
  fontColor?: string;
  balloonData?: BalloonData;
  setBalloonData?: (valueId?: string | undefined) => void;
  notSelectedColor?: string;
};

let selectionTimeout: NodeJS.Timeout;

const VerticalBars = ({
  tw,
  data,
  colorsArray = defaultColorsArray,
  style,
  labelingStyle,
  width,
  height,
  scaleSize,
  showLabels = true,
  fontColor = '#000000',
  balloonData,
  setBalloonData,
  notSelectedColor = '#D1D5DB',
}: Props): JSX.Element => {
  const [barWidth, setBarWidth] = React.useState(0);
  const [scale, setScale] = React.useState(['0']);
  const [unitaryHeight, setUnitaryHeight] = React.useState(0);
  const [selectedColumn, setSelectedColumn] = React.useState('');
  const [consumableColorsArray] = React.useState([...colorsArray].reverse());

  const defaultStyles = tw`flex-1 font-medium text-base text-gray-500 items-center`;
  const chartDefaultStyles = tw``;

  const spaceBetween = 10;
  const labelHeight = 24;
  const scaleWidth = 50;

  let dx = scaleWidth;

  // Calculates the bar widths
  React.useEffect(() => {
    const valuesKeys = Object.keys(data.values);
    const numberOfColumns = valuesKeys.length;

    setBarWidth(
      (width - scaleWidth - (numberOfColumns - 1) * spaceBetween) /
        numberOfColumns,
    );
  }, [width, data]);

  // Calculates the scale of the graph
  React.useEffect(() => {
    const ceilNumber = Math.ceil(scaleSize / 10) * 10;
    const head = parseInt(`${ceilNumber}`.substring(0, 1), 10);
    const step = head <= 5 ? ceilNumber / head : (ceilNumber / 2) * head;

    let suffix = '';
    let divisor = 1;
    if (Math.floor(step / 1000000)) {
      suffix = 'M';
      divisor = 1000000;
    } else if (Math.floor(step / 1000)) {
      suffix = 'k';
      divisor = 1000;
    }

    const newScale = [];

    const numberOfLabels = ceilNumber / step;
    for (let i = 0; i < numberOfLabels; i += 1) {
      newScale.push(`${(i * step) / divisor}${suffix}`);
    }

    setScale(newScale);
  }, [scaleSize]);

  // Establishes the unitary height
  React.useEffect(() => {
    setUnitaryHeight(height / scaleSize);
  }, [height, scaleSize]);

  React.useEffect(() => {
    if (selectedColumn && setBalloonData) {
      setBalloonData(selectedColumn);
      clearTimeout(selectionTimeout);

      selectionTimeout = setTimeout(() => {
        setSelectedColumn('');
        setBalloonData();
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColumn]);

  return (
    <View style={{...defaultStyles, ...style}}>
      {/* Chart - Draws the SVG */}
      <View style={{...chartDefaultStyles}}>
        <Svg width={width} height={height}>
          {scale.map((label, idx) => {
            return (
              <Text
                key={idx}
                x={0}
                y={height - labelHeight - idx * (height / scale.length)}
                fontSize="12"
                fill={fontColor}>
                {`$${label}`}
              </Text>
            );
          })}
          {Object.keys(data.values).map((key_, idx) => {
            const record = data.values[key_];
            dx = idx > 0 ? dx + (barWidth + spaceBetween) : dx;

            let sum = 0;
            const l = Object.keys(record);
            for (let i = 0; i < l.length; i += 1) {
              sum += record[l[i]].amount;
            }

            let dy = height - labelHeight - sum * unitaryHeight;

            return (
              <G key={idx} onPress={() => setSelectedColumn(key_)}>
                {l.reverse().map((_, idx2: number) => {
                  const originalDy = dy;
                  const barHeight = unitaryHeight * record[l[idx2]].amount;
                  dy = dy + barHeight;
                  return (
                    <Rect
                      key={idx2}
                      x={dx}
                      y={originalDy}
                      width={barWidth}
                      height={barHeight}
                      fill={
                        !selectedColumn
                          ? consumableColorsArray[idx2]
                          : selectedColumn === key_
                          ? consumableColorsArray[idx2]
                          : notSelectedColor
                      }
                    />
                  );
                })}
                <Text
                  x={dx + barWidth / 2 - 8}
                  y={height}
                  fontSize="16"
                  fill={fontColor}>
                  {key_}
                </Text>
              </G>
            );
          })}
        </Svg>
      </View>
      {showLabels && (
        <View style={tw`flex-row my-2 justify-between w-9/12 mt-4`}>
          {Object.keys(data.values[Object.keys(data.values)[0]]).map(
            (valueKey: string, idx: number) => {
              return (
                <View key={idx} style={tw`flex-row items-center`}>
                  <SvgXml
                    xml={CircleSvg({
                      color: [...consumableColorsArray].reverse()[idx],
                    })}
                    width={8}
                  />
                  <TextNative
                    style={{
                      ...tw`ml-1 text-[${fontColor}]`,
                      ...labelingStyle,
                    }}>
                    {valueKey}
                  </TextNative>
                </View>
              );
            },
          )}
        </View>
      )}
      {!!selectedColumn && balloonData && (
        <Balloon
          tw={tw}
          balloonData={balloonData}
          position={[width / 2, height / 2]}
        />
      )}
    </View>
  );
};

export default VerticalBars;
