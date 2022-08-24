import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreedsStackScreenParams } from "../../types/NavigationTypes";
import ApostlesCreedContainer from "../ApostlesCreedScreen/ApostlesCreedContainer";
import CreedsScreen from "./CreedsScreen";

const CreedsStack = createNativeStackNavigator<CreedsStackScreenParams>();

const CreedsContainer = () => {
  return <CreedsScreen />;
};

export const CreedsStackScreen = () => {
  <NavigationContainer>
    <CreedsStack.Navigator initialRouteName="CreedsHome">
      <CreedsStack.Screen name="CreedsHome" component={CreedsContainer} />
      <CreedsStack.Screen name="Apostles" component={ApostlesCreedContainer} />
      {/* <CreedsStack.Screen name="Nicene" component={NiceneCreedContainer} />
      <CreedsStack.Screen
        name="Athanasian"
        component={AthanasianCreedContainer}
      /> */}
    </CreedsStack.Navigator>
  </NavigationContainer>;
};

export default CreedsContainer;
