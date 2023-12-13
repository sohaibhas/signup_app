import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

function Loader() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.loaderContainer}>
      <Animated.View style={[styles.loader, { transform: [{ rotate: spin }] }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    height: 42,
    width: 42,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#9B2423',
    borderTopColor: 'transparent',
  },
});

export default Loader;
