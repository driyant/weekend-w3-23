import React from "react";
import { Box, FormControl, Input, Button } from "@chakra-ui/react";

const InputNote = () => {
  return (
    <>
      <Box
        backgroundColor="#FFF"
        width="80%"
        position="relative"
        top="-50px"
        borderRadius="6px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
      >
        <FormControl
          as="form"
          padding="1rem"
          display="flex"
          flexDirection="column"
        >
          <Input
            type="text"
            paddingLeft="0"
            placeholder="Got a new note?"
            border="none"
            borderRadius="0px"
            borderBottom="1px solid #ccc"
            _focus={{
              borderBottomColor: "blue.500",
              boxShadow: "none",
            }}
            marginBottom="1rem"
          />
          <Button
            colorScheme="blue"
            size={{ base: "sm" }}
            ml="auto"
            style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
          >
            Add note
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default InputNote;
