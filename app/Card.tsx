import { View, Text } from 'react-native'
import React from 'react'
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Container } from '../my-expo-app/components/Container';


const Card = () => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      if (translateX.value > -150) {
        translateX.value = withSpring(500);
        opacity.value = withSpring(0);
      }
      else {
        translateX.value = withSpring(0);
        opacity.value = withSpring(1);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      opacity: opacity.value,
    };
  });

  return (
    <View className='flex-1 justify-center items-center bg-gray-900'>
      <GestureDetector gesture={swipeGesture}>

        <Animated.View className='w-80 p-6 bg-blue-800 rounded-2xl shadow-xl' style={animatedStyle}>
          <Text className='text-white text-xl font-bold'>Swipe me!.</Text>
        </Animated.View>
      </GestureDetector>

    </View>
  )
}

export default Card;