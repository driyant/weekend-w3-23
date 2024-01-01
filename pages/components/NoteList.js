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
} from "@chakra-ui/react";
import NoteListItem from "./NoteListItem";
import ModalDialog from "./ModalDialog";

const NoteList = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState(data);
  const [selectedNote, setSelectedNote] = useState(null);
  const [actionType, setActionType] = useState(null);

  const handleOpenModal = (type, note) => {
    setSelectedNote(note);
    setActionType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActionType(null);
  };

  const handleNoteCreationSuccess = () => {
    fetchData();
    handleCloseModal();
  };

  const onDelete = () => {
    fetch(`/api/notes/${selectedNote}`, {
      method: "DELETE",
    })
      .then(async (res) => console.log(await res.json()))
      .catch((error) => console.error("Error deleting note:", error))
      .finally(() => {
        fetchData();
        handleCloseModal();
      });
  };

  const fetchData = async () => {
    setTimeout(async () => {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL + "/api/notes"
      );
      const { data: newData } = await res.json();
      setNotes(newData);
    }, 1000);
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
          onClick={() => handleOpenModal("add", null)}
          colorScheme="blue"
          size={{ base: "sm" }}
          ml="auto"
          style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          Add note
        </Button>

        <ModalDialog
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          onSuccess={handleNoteCreationSuccess}
          actionType={actionType}
          note={selectedNote}
          onDelete={onDelete}
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
              <NoteListItem data={notes} onOpenModal={handleOpenModal} />
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default NoteList;
