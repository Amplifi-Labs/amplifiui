import React, {useState} from 'react';
import {TailwindFn} from 'twrnc';
import {Style} from 'twrnc/dist/esm/types';
import LinearGradient from 'react-native-linear-gradient';
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';

type Props = {
  tw: TailwindFn;
  allowStartFade?: boolean;
  allowEndFade?: boolean;
  children?: JSX.Element | JSX.Element[] | Element | string | undefined;
  fadeSize?: number;
  fadeColors?: string[];
  horizontal?: boolean;
  onCloseToStart?: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseToEnd?: React.Dispatch<React.SetStateAction<boolean>>;
  onScroll?: React.Dispatch<
    React.SetStateAction<NativeSyntheticEvent<NativeScrollEvent>>
  >;
  refreshControl?: JSX.Element;
  style?: Style;
};

const fadeHideShowLimit = 10;
const scrollEventThrottle = 16;

const FadedScrollView = ({
  tw,
  allowStartFade = true,
  allowEndFade = true,
  children,
  fadeSize = 10,
  fadeColors = [
    'rgba(255, 255, 255, 0)',
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.3)',
    'rgba(255, 255, 255, 0.4)',
    'rgba(255, 255, 255, 0.5)',
    'rgba(255, 255, 255, 0.6)',
    'rgba(255, 255, 255, 0.7)',
    'rgba(255, 255, 255, 0.8)',
    'rgba(255, 255, 255, 0.9)',
    'rgba(255, 255, 255, 1)',
  ],
  horizontal = false,
  onCloseToStart,
  onCloseToEnd,
  onScroll,
  refreshControl,
  style,
}: Props): JSX.Element => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [availableHeight, setAvailableHeight] = useState(0);
  const [availableWidth, setAvailableWidth] = useState(0);
  const [isAllowedStartFade, setIsAllowedStartFade] = useState(false);
  const [isAllowedEndFade, setIsAllowedEndFade] = useState(false);

  const defaultStartFadeStyle = tw.style(
    'absolute',
    horizontal && `w-[${fadeSize}] h-${availableHeight}px`,
    !horizontal && `w-${availableWidth}px h-[${fadeSize}]`,
  );

  const defaultEndFadeStyle = tw.style(
    'absolute bottom-0',
    horizontal && `w-[${fadeSize}] h-${availableHeight}px`,
    !horizontal && `w-${availableWidth}px h-[${fadeSize}]`,
  );

  const defaultStyle = tw.style(
    horizontal && 'flex-row',
    !horizontal && 'flex-col',
  );

  const onLayout = (event: LayoutChangeEvent) => {
    const containerWidth = event.nativeEvent.layout.width;
    const containerHeight = event.nativeEvent.layout.height;
    setAvailableWidth(containerWidth);
    setAvailableHeight(containerHeight);
  };

  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    setScrollWidth(contentWidth);
    setScrollHeight(contentHeight);
    setIsAllowedEndFade(contentHeight > availableHeight);
  };

  const onScrolled = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (onCloseToEnd) {
      onCloseToEnd(isCloseToBottom(e.nativeEvent));
    }
    if (onCloseToStart) {
      onCloseToStart(isCloseToStart(e.nativeEvent));
    }
    if (allowStartFade) {
      setIsAllowedStartFade(isCloseToStart(e.nativeEvent) ? false : true);
    }
    if (allowEndFade) {
      setIsAllowedEndFade(isCloseToBottom(e.nativeEvent) ? false : true);
    }
    if (onScroll) {
      onScroll(e);
    }
  };

  const isCloseToStart = ({contentOffset}: NativeScrollEvent) => {
    return horizontal
      ? contentOffset.x < fadeHideShowLimit
      : contentOffset.y < fadeHideShowLimit;
  };

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    return horizontal
      ? layoutMeasurement.width + contentOffset.x >=
          contentSize.width - fadeHideShowLimit
      : layoutMeasurement.height + contentOffset.y >=
          contentSize.height - fadeHideShowLimit;
  };

  const isEndFadeAllowed = () => {
    const sizeToCompare = horizontal ? scrollWidth : scrollHeight;
    const availableSpace = horizontal ? availableWidth : availableHeight;
    return allowEndFade ? sizeToCompare > availableSpace : false;
  };

  const getStartFade = () => {
    return horizontal ? (
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        style={{...defaultStartFadeStyle}}
        colors={fadeColors}
        pointerEvents={'none'}
      />
    ) : (
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={{...defaultStartFadeStyle}}
        colors={fadeColors}
        pointerEvents={'none'}
      />
    );
  };

  const getEndFade = () => {
    return horizontal ? (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{...defaultEndFadeStyle}}
        colors={fadeColors}
        pointerEvents={'none'}
      />
    ) : (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{...defaultEndFadeStyle}}
        colors={fadeColors}
        pointerEvents={'none'}
      />
    );
  };

  return (
    <View style={{...defaultStyle, ...style}} onLayout={onLayout}>
      <ScrollView
        onContentSizeChange={onContentSizeChange}
        onScroll={onScrolled}
        refreshControl={refreshControl}
        scrollEventThrottle={scrollEventThrottle}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
      {allowStartFade && isAllowedStartFade && getStartFade()}
      {isEndFadeAllowed() && isAllowedEndFade && getEndFade()}
    </View>
  );
};

export default FadedScrollView;
