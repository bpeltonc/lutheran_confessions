import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { CreedsStackScreen } from "../screens/CreedsScreen/CreedsContainer";
import HomeContainer from "../screens/HomeScreen/HomeContainer";
import { RootNavigationStackScreenParams } from "../types/NavigationTypes";

const Stack = createNativeStackNavigator<RootNavigationStackScreenParams>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Creeds"
          component={CreedsStackScreen}
          options={{ headerTitle: "The Creeds" }}
        />
        {/* <Stack.Screen
          name="Augsberg"
          component={HomeContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Apology"
          component={HomeContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Smalcald"
          component={HomeContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SC"
          component={HomeContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LC"
          component={HomeContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FC"
          component={HomeContainer}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
