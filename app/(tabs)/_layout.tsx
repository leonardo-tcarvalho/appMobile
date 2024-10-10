import { Stack, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }}/>
      <Tabs.Screen name="testes" options={{ headerShown: false }}/>
    </Tabs>
  );
}
