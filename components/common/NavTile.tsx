import { Box, Pressable, Text } from "native-base";
import React from "react";

type Props = {
  text: string;
  link: () => void;
};

const NavTile = ({ text, link }: Props) => {
  return (
    <Pressable onPress={link}>
      <Box>
        <Text>{text}</Text>
      </Box>
    </Pressable>
  );
};

export default NavTile;
