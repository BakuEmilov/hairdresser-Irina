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
import React from "react";

type IMOdal = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalWindow = ({ isOpen, onClose }: IMOdal) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="p-4 m-4 bg-white rounded-lg" w={500} h={200}>
          <div className="flex justify-between items-center">
            <ModalHeader>Выйти</ModalHeader>
            <ModalCloseButton />
          </div>
          <ModalBody pt="40" pb="40">
            <p>ey, может передумаешь?</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={10} onClick={onClose}>
              Нет
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Хорошо
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalWindow;
