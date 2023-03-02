import * as React from 'react';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import { TailwindFn } from 'twrnc';
import { Style } from 'twrnc/dist/esm/types';

type Props = {
  tw: TailwindFn;
  onColor?: string;
  offColor?: string;
  label?: string;
  style?: object;
  value?: boolean;
  labelStyle?: Style;
  innerStyle?: Style;
  onToggle: () => void;
  animatedValue?: Animated.Value;
  widthView?: number
};

const ToggleButton = ({
  widthView = 34,
  tw,
  onColor = '#0369A1',
  offColor = '#ecf0f1',
  label = '',
  style,
  value = false,
  labelStyle,
  innerStyle,
  onToggle = () => { },
}: Props): JSX.Element => {
  const [moveToggle, setMoveToggle] = React.useState(0);

  const color = value ? onColor : offColor;

  const defaultLabelStyle = tw`mr-1`;
  const defaultToggleStyle = tw`w-8.5 h-4.5 ml-1 rounded-25 justify-center`;
  const defaultInsideButtonStyle = tw`w-4 h-4 bg-white rounded-25 shadow-black shadow`;

  React.useEffect(() => {
    const position_ = new Animated.Value(value ? 0 : 1);
    position_.removeAllListeners();

    Animated.timing(position_, {
      toValue: value ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    position_.addListener(position__ => {
      const moveToggle_ = position__.value * widthView / 2;
      setMoveToggle(moveToggle_);
    });
  }, [value]);

  return (
    <View>
      {!!label && <Text style={[defaultLabelStyle, labelStyle]}>{label}</Text>}
      <TouchableOpacity
        onPress={() => {
          typeof onToggle === 'function' && onToggle();
        }}>
        <View style={[defaultToggleStyle, style, { backgroundColor: color }]}>
          <Animated.View
            style={[
              defaultInsideButtonStyle,
              innerStyle,
              {
                marginLeft: moveToggle,
              },
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
