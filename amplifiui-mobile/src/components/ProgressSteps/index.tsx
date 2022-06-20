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
};

const Info = ({tw, steps, current, style}: Props): JSX.Element => {
  const defaultStyles = tw`h-1`;

  const [svg, setSvg] =
    React.useState(`<svg width="39" height="4" viewBox="0 0 39 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.29895" width="16.968" height="4" rx="2" fill="#6B7280"/>
  <rect opacity="0.3" x="20.267" width="4.16667" height="4" rx="2" fill="#6B7280"/>
  <rect opacity="0.3" x="27.4336" width="4.16667" height="4" rx="2" fill="#6B7280"/>
  <rect opacity="0.3" x="34.6003" width="4.16667" height="4" rx="2" fill="#6B7280"/>
  </svg>`);

  const [imageWidth, setImageWidth] = React.useState(0);

  React.useEffect(() => {
    let x = 0.29895;
    const space = 3;
    const width = 17;
    const diameter = 4;

    const imageWidth_ = (steps - 1) * diameter + width + (space * steps - 1);

    let str = `<svg width="${imageWidth_}" height="${diameter}" viewBox="0 0 ${imageWidth_} ${diameter}" fill="none" xmlns="http://www.w3.org/2000/svg">`;

    for (let i = 0; i < steps; i += 1) {
      if (i === current) {
        str += `<rect x="${x}" width="${width}" height="${diameter}" rx="2" fill="#6B7280"/>`;
        x += space + width;
      } else {
        str += `<rect opacity="0.3" x="${x}" width="${diameter}" height="${diameter}" rx="2" fill="#6B7280"/>`;
        x += space + diameter;
      }
    }
    str += '</svg>';

    setSvg(str);
    setImageWidth(imageWidth_);
  }, [steps, current]);

  return (
    <View style={{...defaultStyles, ...style}}>
      <Image tw={tw} svg={svg} width={imageWidth} />
    </View>
  );
};

export default Info;
