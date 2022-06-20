import * as React from 'react';
import {Animated, Easing} from 'react-native';

type Props = {
  time: number;
  children: JSX.Element | JSX.Element[] | string;
};

const Spinner = ({time, children}: Props): JSX.Element => {
  const [spinValue] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: time,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate: spinValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}>
      {children}
    </Animated.View>
  );
};

export default Spinner;
