import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box
        backgroundColor="#5D3FD3"
        width="100%"
        height="110px"
        paddingTop="0.875rem"
        borderTopLeftRadius="12px"
        borderTopRightRadius="12px"
      >
        <Heading
          as="h3"
          size="lg"
          textAlign="center"
          color="#FFF"
          fontWeight="600"
        >
          Notes
        </Heading>
      </Box>
    </>
  );
};

export default Header;
