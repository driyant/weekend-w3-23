import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, IconButton, Tr, Td } from "@chakra-ui/react";

const NoteListItem = ({ data, onOpenModal }) => {
  return (
    <>
      {data?.map((el) => {
        return (
          <Tr key={el.id}>
            <Td>{el.title}</Td>
            <Td paddingLeft="0">
              <Box display="flex" alignItems="center" justifyContent="center">
                <IconButton
                  icon={<EditIcon />}
                  colorScheme="blue"
                  borderRadius="50%"
                  boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                  marginRight="4px"
                  onClick={() => onOpenModal("edit", el.id)}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  borderRadius="50%"
                  boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                  onClick={() => onOpenModal("delete", el.id)}
                />
              </Box>
            </Td>
          </Tr>
        );
      })}
    </>
  );
};

export default NoteListItem;
