import { NavigationProp } from "@react-navigation/native";
import { Box, Container, Heading } from "native-base";
import NavTile from "../../components/common/NavTile";
import { CreedsStackScreenParams } from "../../types/NavigationTypes";

type Props = {
  navigation: NavigationProp<CreedsStackScreenParams>;
};

const CreedsScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <Box flex={1}>
        <Heading>The Three Chief Symbols</Heading>
      </Box>
      <NavTile
        text="The Apostle's Creed"
        link={() => navigation.navigate("Apostles")}
      />
    </Container>
  );
};

export default CreedsScreen;
