import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import "../global.css";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        drawerStyle: {
          backgroundColor: '#000'
        },
        drawerActiveTintColor: '#0f0',
        drawerInactiveTintColor: '#888',
        drawerLabelStyle: {
          fontSize: 18
        }
      }}>
        <Drawer.Screen name="(tabs)" options={{
          title: "Tabs",
          drawerIcon: ({ color, size }: { color: string, size: number }) => (
            <MaterialIcons name="dashboard" size={size} color={color} />
          )
        }} />
        <Drawer.Screen name="Card" options={{
          title: "Cards",
          drawerIcon: ({ color, size }: { color: string, size: number }) => (
            <MaterialIcons name="add-card" size={size} color={color} />
          )
        }} />
        <Drawer.Screen name="about" options={{
          title: "About",
          drawerIcon: ({ color, size }: { color: string, size: number }) => (
            <MaterialIcons name="info" size={size} color={color} />
          )
        }} />
      </Drawer>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack> */}
    </GestureHandlerRootView>
  );
}