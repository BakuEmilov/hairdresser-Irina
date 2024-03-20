import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type IMOdal = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalWindow = ({ isOpen, onClose }: IMOdal) => {
  if (!open) return null;

  return (
    <div className="">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          className="bg-white p-4 m-4 fixed rounded-lg"
          w="500px"
          h="200"
        >
          <div className="flex justify-between items-center">
            <ModalHeader>Выйти</ModalHeader>
            <ModalCloseButton />
          </div>
          <ModalBody mt={40} mb={40}>
            <p>еу, может передумаешь?</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={10} onClick={onClose}>
              Нет
            </Button>
            <Button variant="ghost" onClick={onClose}>Хорошо</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalWindow;
