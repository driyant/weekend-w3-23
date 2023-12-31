import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box
        backgroundColor="#5D3FD3"
        width="100%"
        height="400px"
        paddingTop="0.875rem"
        borderTopLeftRadius="12px"
        borderTopRightRadius="12px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h3"
          size="lg"
          textAlign="center"
          color="#FFF"
          fontWeight="600"
          marginTop="3rem"
        >
          Notes
        </Heading>
      </Box>
    </>
  );
};

export default Header;
