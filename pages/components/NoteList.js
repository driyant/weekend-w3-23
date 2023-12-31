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
      >
        <Heading as="h5" size="sm">
          Note list
        </Heading>
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
