import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { RootNavigationStackScreenParams } from "../../types/NavigationTypes";
import HomeScreen from "./HomeScreen";

type Props = {
  navigation: NavigationProp<RootNavigationStackScreenParams>;
};

const HomeContainer = ({ navigation }: Props) => {
  return <HomeScreen navigation={navigation} />;
};

export default HomeContainer;
