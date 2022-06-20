import * as React from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  PanResponderGestureState,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TailwindFn } from 'twrnc';


const WINDOW_HEIGHT = Dimensions.get('window').height;

const duration = 1000;

type Props = {
  tw: TailwindFn;
  children: JSX.Element | JSX.Element[];
  maxHeight: number;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

let ref: Animated.LegacyRef<View>;

const DraggableView = ({
  tw,
  children,
  maxHeight,
  show,
  setShow,
}: Props): JSX.Element => {
  const insets = useSafeAreaInsets();

  const [touched, setTouched] = React.useState(false);

  const [top, setTop] = React.useState(WINDOW_HEIGHT);

  const [position, setPosition] = React.useState(show ? 100 : 0);

  const [opacity, setOpacity] = React.useState(0);

  const positionToTop = (position_: number) => {
    return WINDOW_HEIGHT - (position_ / 100) * maxHeight;
  };

  const topToPosition = (top_: number) => {
    return (100 * (WINDOW_HEIGHT - top_)) / maxHeight;
  };

  React.useEffect(() => {
    setTop(positionToTop(position));
    setOpacity(position * 0.8);
  }, [position]);

  React.useEffect(() => {
    startAnimation();
  }, [show]);

  const isAValidMovement = (dx: number, dy: number) => {
    return Math.abs(dy) > Math.abs(dx) && dy > 2;
  };

  const moveDrawerView = (gesture: PanResponderGestureState) => {
    if (!ref) {
      return;
    }

    const displacement = positionToTop(position) + gesture.dy;
    const newPosition = topToPosition(displacement);
    setPosition(newPosition);
  };

  const startAnimation = () => {
    const position_ = new Animated.Value(position);
    position_.removeAllListeners();

    const toValue = show ? 100 : 0;

    const animation = Animated.timing(position_, {
      toValue,
      duration,
      useNativeDriver: true,
    });

    animation.start();

    position_.addListener(position__ => {
      setPosition(parseFloat(position__.value.toFixed(2)));
    });
  };

  const moveFinished = () => {
    if (!ref) {
      return;
    }

    setShow(false);
  };

  const _panGesture = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => {
      return isAValidMovement(gesture.dx, gesture.dy) && touched;
    },
    onPanResponderMove: (_, gesture) => {
      moveDrawerView(gesture);
    },
    onPanResponderRelease: () => {
      moveFinished();
    },
  });

  return (
    <>
      {position !== 0 && (
        <View
          style={tw`absolute left-0 right-0 bottom-0 bg-gray-200/${opacity} top-[${
            insets.top / 4
          }]`}>
          <Animated.View
            ref={(ref_: Animated.LegacyRef<View>) => {
              ref = ref_;
            }}
            style={{
              ...tw`absolute left-0 w-full rounded-t-2xl bg-white h-full shadow-2xl`,
              top: top,
            }}
            {..._panGesture.panHandlers}>
            <View>
              <TouchableWithoutFeedback
                onPressIn={() => setTouched(true)}
                onPressOut={() => setTouched(false)}>
                <View style={tw`items-center h-12`}>
                  <View
                    style={tw`bg-gray-300 h-1.5 w-14 mt-2 mb-5 rounded-full`}
                  />
                </View>
              </TouchableWithoutFeedback>
              {children}
            </View>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default DraggableView;
