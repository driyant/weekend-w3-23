import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import InputNote from "./InputNote";
import InputNoteEdit from "./InputNoteEdit";
import { useEffect, useMemo } from "react";

const ModalDialog = ({
  isModalOpen,
  onClose,
  onSuccess,
  actionType,
  note,
  onDelete,
  onFetchDetail,
  noteDetail,
}) => {
  const action = actionType;

  const onSave = (actionType) => {
    if (actionType === "add") {
      onSuccess();
    } else if (actionType === "delete") {
      onDelete();
    }
    onClose();
  };

  useEffect(() => {
    if (actionType === "edit") {
      onFetchDetail();
    }
  }, []);

  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{actionType} note</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {action === "delete" && <p>Are you sure want to delete this?</p>}
          {action === "add" && <InputNote onSuccess={onSuccess} note={note} />}
          {action === "edit" && (
            <InputNoteEdit onSuccess={onSuccess} noteDetail={noteDetail} />
          )}
        </ModalBody>
        {action === "delete" && (
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => onSave(action)}>
              Delete
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalDialog;
