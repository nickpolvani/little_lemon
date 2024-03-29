import { Card, Heading, Text, VStack, Flex, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

// Custom component for row items
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
  name,
  email,
  phone,
  date,
  time,
  guests,
  occasion,
}) {
  return (
    <Flex justify="center" align="center" p="2rem">
      <Card bg="green.100" p="3rem" maxW="35rem">
        <VStack align="center">
          <Icon as={CheckCircleIcon} w={50} h={50} color="green.500" />
          <Heading size={"lg"} align="center">
            You have successfully confirmed your reservation
          </Heading>
          <DetailRow label="Name" value={name} />
          <DetailRow label="Email" value={email} />
          <DetailRow label="Phone" value={phone} />
          <DetailRow label="Date" value={date} />
          <DetailRow label="Time" value={time} />
          <DetailRow label="Guests" value={guests} />
          <DetailRow label="Occasion" value={occasion} />
        </VStack>
      </Card>
    </Flex>
  );
}
