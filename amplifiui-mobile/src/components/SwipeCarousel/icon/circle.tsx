import * as React from 'react';
import {SvgXml} from 'react-native-svg';

type Props = {
  color: string;
  size?: number;
};

const Icon = ({color, size = 6}: Props) => {
  const xml = `<svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="3.5" cy="3" r="3" fill="${color}"/>
  </svg>`;

  return <SvgXml xml={xml} width={size} />;
};

export default Icon;
