import * as React from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  View,
  Animated,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';
import {Style, TailwindFn} from 'twrnc/dist/esm/types';
import Circle from './icon/circle';

type Props = {
  tw: TailwindFn;
  style?: Style;
  children: JSX.Element[];
  showProgress?: boolean;
  selected: number;
  selectedColor?: string;
  unselectedColor?: string;
  selectedCallback?: (key: number) => void;
};

let ref: Animated.LegacyRef<View>;

const duration = 1000;

const SwipeCarousel = ({
  tw,
  children,
  style,
  showProgress = true,
  selected,
  selectedColor = '#C2410C',
  unselectedColor = '#9CA3AF',
  selectedCallback,
}: Props) => {
  const [position, setPosition] = React.useState(0);

  const [layout, setLayout] = React.useState<LayoutRectangle>();

  const [selected_, setSelected_] = React.useState(selected);

  const [initialized, setInitialized] = React.useState(false);

  const onLayout = (event: LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout);
  };

  React.useEffect(() => {
    setSelected_(selected);
  }, [selected]);

  React.useEffect(() => {
    if (layout) {
      if (initialized) {
        startAnimation(selected_);

        if (selectedCallback) {
          selectedCallback(selected_);
        }
      } else {
        setPosition(layout.width * selected_);
        setInitialized(true);

        if (selectedCallback) {
          selectedCallback(selected_);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout, selected_]);

  const goToNext = () => {
    if (selected_ + 1 > children.length - 1) {
      console.log('[goToNext] condition 1');
      setSelected_(0);
    } else {
      console.log('[goToNext] condition 2');
      setSelected_(selected_ + 1);
    }
  };

  const goToPrevious = () => {
    if (selected_ - 1 < 0) {
      console.log('[goToNext] condition 3');
      setSelected_(children.length - 1);
    } else {
      console.log('[goToNext] condition 4');
      setSelected_(selected_ - 1);
    }
  };

  const onUpdatePosition = (position_: number) => {
    setPosition(position_);
  };

  const startAnimation = (newSelected: number) => {
    if (layout) {
      const position_ = new Animated.Value(position);
      position_.removeAllListeners();

      const toValue = layout.width * newSelected;

      const animation = Animated.timing(position_, {
        toValue,
        duration,
        useNativeDriver: true,
      });

      animation.start();

      position_.addListener(position__ => {
        if (!ref) {
          return;
        }

        onUpdatePosition(position__.value);
      });
    }
  };

  const isAValidMovement = (dx: number, dy: number) => {
    return Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 2;
  };

  const moveFinished = (gesture: PanResponderGestureState) => {
    if (!ref) {
      return;
    }

    console.log('[moveFinished] gesture:', gesture);

    if (layout) {
      if (gesture.dx < 0) {
        goToNext();
      } else if (gesture.dx > 0) {
        goToPrevious();
      }
    }
  };

  const _panGesture = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => {
      return isAValidMovement(gesture.dx, gesture.dy);
    },
    onPanResponderRelease: (_, gesture) => {
      moveFinished(gesture);
    },
  });

  return (
    <View style={{...tw`overflow-hidden w-full`, ...style}} onLayout={onLayout}>
      <Animated.View
        ref={(ref_: Animated.LegacyRef<View>) => {
          ref = ref_;
        }}
        style={tw`flex-row relative w-[${
          layout ? layout.width : 0
        }px] right-[${position}px]`}
        {..._panGesture.panHandlers}>
        {children}
      </Animated.View>
      {/* Progress */}
      <View style={tw`flex-row w-full justify-center my-2`}>
        {showProgress &&
          children.map((_, idx) => (
            <View key={idx} style={tw`mx-1`}>
              <Circle
                color={idx === selected_ ? selectedColor : unselectedColor}
              />
            </View>
          ))}
      </View>
    </View>
  );
};

export default SwipeCarousel;
