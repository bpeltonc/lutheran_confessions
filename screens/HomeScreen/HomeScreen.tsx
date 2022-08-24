import { NavigationProp } from "@react-navigation/native";
import { Box, Heading } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNavTiles from "../../components/HomeNavTiles/HomeNavTiles";
import { RootNavigationStackScreenParams } from "../../types/NavigationTypes";

type Props = {
  navigation: NavigationProp<RootNavigationStackScreenParams>;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} bg="midLight" paddingTop={10}>
        <Heading color="dark" textAlign="center">
          The Lutheran Confessions
        </Heading>
        <HomeNavTiles navigation={navigation} />
      </Box>
    </SafeAreaView>
  );
};

export default HomeScreen;
