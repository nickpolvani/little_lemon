import {
  Card,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const DetailRow = ({ label, value }) => {
  return (
    <Flex align="center">
      <Text fontWeight="bold" mr={2}>
        {label}:
      </Text>
      <Text>{value}</Text>
    </Flex>
  );
};

export default function ConfirmedBooking({
  isOpen,
  onClose,
  name,
  email,
  phone,
  date,
  time,
  guests,
  occasion,
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Reservation Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Icon as={CheckCircleIcon} w={12} h={12} color="green.500" />
              <VStack align="start" spacing={4}>
                <Heading size="lg" textAlign="center">
                  You have successfully confirmed your reservation!
                </Heading>
                <DetailRow label="Name" value={name} />
                <DetailRow label="Email" value={email} />
                <DetailRow label="Phone" value={phone} />
                <DetailRow label="Date" value={date} />
                <DetailRow label="Time" value={time} />
                <DetailRow label="Guests" value={guests} />
                <DetailRow label="Occasion" value={occasion} />
              </VStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
