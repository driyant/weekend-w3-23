// InputNote.js
import React, { useRef } from "react";
import { Textarea, FormControl, Input, Button } from "@chakra-ui/react";

const InputNote = ({ onSuccess }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = async () => {
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };

    try {
      fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          onSuccess();
        } else {
          console.log(res);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <FormControl
        as="form"
        padding="1rem"
        display="flex"
        flexDirection="column"
      >
        <Input
          type="text"
          paddingLeft="0"
          placeholder="Your note title"
          border="none"
          borderRadius="0px"
          borderBottom="1px solid #ccc"
          _focus={{
            borderBottomColor: "blue.500",
            boxShadow: "none",
          }}
          marginBottom="1rem"
          ref={titleRef}
        />
        <Textarea
          placeholder="Note description"
          marginBottom="1rem"
          paddingLeft="0"
          border="none"
          borderRadius="0px"
          borderBottom="1px solid #ccc"
          _focus={{
            borderBottomColor: "blue.500",
            boxShadow: "none",
          }}
          ref={descriptionRef}
        />
        <Button
          onClick={handleSubmit}
          colorScheme="blue"
          size={{ base: "sm" }}
          ml="auto"
          style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default InputNote;
