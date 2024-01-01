// InputNote.js
import React, { useEffect, useRef, useState } from "react";
import { Textarea, FormControl, Input, Button } from "@chakra-ui/react";

const InputNoteEdit = ({ onSuccess, noteDetail }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (noteDetail) {
      setTitle(noteDetail.title);
      setDescription(noteDetail.description);
    }
  }, [noteDetail]);

  const handleSubmit = async () => {
    const data = {
      title,
      description,
    };
    try {
      fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + "/api/notes/" + noteDetail.id,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then((res) => {
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          colorScheme="blue"
          size={{ base: "sm" }}
          ml="auto"
          style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          Update
        </Button>
      </FormControl>
    </>
  );
};

export default InputNoteEdit;
