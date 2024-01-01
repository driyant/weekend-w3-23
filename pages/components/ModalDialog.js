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

const ModalDialog = ({
  isModalOpen,
  onClose,
  onSuccess,
  actionType,
  note,
  onDelete,
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

  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {actionType === "delete" ? "Delete" : "Add"} note
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {action === "delete" && <p>Are you sure want to delete this?</p>}
          {action !== "delete" && (
            <InputNote onSuccess={onSuccess} note={note} />
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
