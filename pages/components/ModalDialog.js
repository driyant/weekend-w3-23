import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import InputNote from "./InputNote";

const ModalDialog = ({ isModalOpen, onClose, onSuccess }) => {
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputNote onSuccess={onSuccess} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDialog;
