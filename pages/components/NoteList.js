// NoteList.js
import React, { useState, useEffect } from "react";
import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import NoteListItem from "./NoteListItem";
import InputNote from "./InputNote";
import ModalDialog from "./ModalDialog";

const NoteList = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState(data);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNoteCreationSuccess = () => {
    // Close the modal
    handleCloseModal();
    setTimeout(() => {
      fetchData();
    }, 1000);
  };

  const fetchData = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/api/notes"
    );
    const { data: newData } = await res.json();
    setNotes(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        width="80%"
        boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
        backgroundColor="#FFF"
        borderRadius="6px"
        padding="1rem"
      >
        <Button
          onClick={handleOpenModal}
          colorScheme="blue"
          size={{ base: "sm" }}
          ml="auto"
          style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          Add note
        </Button>

        {/* Modal */}
        <ModalDialog
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          onSuccess={handleNoteCreationSuccess}
        />

        <TableContainer marginTop="1rem">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>list</Th>
                <Th>operation</Th>
              </Tr>
            </Thead>
            <Tbody>
              <NoteListItem data={notes} />
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default NoteList;
