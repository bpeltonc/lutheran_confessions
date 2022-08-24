import { NavigationProp } from "@react-navigation/native";
import { Box, Text, VStack } from "native-base";
import React from "react";
import { RootNavigationStackScreenParams } from "../../types/NavigationTypes";
import NavTile from "../common/NavTile";

type Props = {
  navigation: NavigationProp<RootNavigationStackScreenParams>;
};

const HomeNavTiles = ({ navigation }: Props) => {
  return (
    <VStack>
      <NavTile
        text="The Three Chief Symbols"
        link={() => navigation.navigate("Creeds")}
      />
      <Box>
        <Text>The Augsberg Confession</Text>
      </Box>
      <Box>
        <Text>Apology to the Augsberg Confessions</Text>
      </Box>
    </VStack>
  );
};

export default HomeNavTiles;
