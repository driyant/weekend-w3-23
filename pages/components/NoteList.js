import React from "react";

import {
  Box,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Button,
} from "@chakra-ui/react";
import NoteListItem from "./NoteListItem";

const NoteList = ({ data }) => {
  return (
    <>
      <Box
        width="80%"
        marginBottom="2rem"
        boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
        backgroundColor="#FFF"
        borderRadius="6px"
        padding="1rem"
        position="relative"
        top="-120px"
      >
        <Button
          colorScheme="blue"
          size={{ base: "sm" }}
          ml="auto"
          style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          Add note
        </Button>
        <TableContainer marginTop="1rem">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>list</Th>
                <Th>operation</Th>
              </Tr>
            </Thead>
            <Tbody>
              <NoteListItem data={data} />
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default NoteList;
