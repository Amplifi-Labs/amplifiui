import * as React from 'react';
import {View} from 'react-native';
import {Style} from 'twrnc/dist/esm/types';
import Image from '../Image';

import {TailwindFn} from 'twrnc';

type Props = {
  tw: TailwindFn;
  steps: number;
  current: number;
  style?: Style;
  space?: number;
  width?: number;
  diameter?: number;
  selectedColor?: string;
  unselectedColor?: string;
  opacity?: number;
  radius?: number;
  unselectedWidth?: number;
  accessibilityLabel: string;
};

const ProgressSteps = ({
  tw,
  steps,
  current,
  style,
  space = 3,
  width = 17,
  diameter = 4,
  selectedColor = "#6B7280",
  opacity = 0.3,
  radius = 2,
  unselectedWidth = 4,
  unselectedColor = "#6B7280",
  accessibilityLabel,
}: Props): JSX.Element => {
  const defaultStyles = tw`h-1`;

  const [svg, setSvg] =
    React.useState(`<svg width="39" height="4" viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`);

  const [imageWidth, setImageWidth] = React.useState(0);

  React.useEffect(() => {
    let x = 0;

    const imageWidth_ = (steps - 1) * diameter + width + (steps - 1) * unselectedWidth + (space * steps - 1);

    let str = `<svg width="${imageWidth_}" height="${diameter}" viewBox="0 0 ${imageWidth_} ${diameter}" fill="none" xmlns="http://www.w3.org/2000/svg">`;

    for (let i = 0; i < steps; i += 1) {
      if (i === current) {
        str += `<rect x="${x}" width="${width}" height="${diameter}" rx="${radius}" fill="${selectedColor}"/>`;
        x += space + width;
      } else {
        str += `<rect opacity="${opacity}" x="${x}" width="${unselectedWidth}" height="${diameter}" rx="${radius}" fill="${unselectedColor}"/>`;
        x += space + unselectedWidth;
      }
    }
    str += '</svg>';

    setSvg(str);
    setImageWidth(imageWidth_);
  }, [steps, current]);

  return (
    <View style={{...defaultStyles, ...style}}>
      <Image
        tw={tw}
        svg={svg}
        width={imageWidth}
        accessibilityLabel={accessibilityLabel}
      />
    </View>
  );
};

export default ProgressSteps;
