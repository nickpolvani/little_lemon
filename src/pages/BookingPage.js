import BookingForm from "../components/form/BookingForm";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

function BookingPage({
  availableTimes,
  setAvailableTimes,
  dateChange,
  handleBookingConfirmed,
}) {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="lg"
          bg="teal.100"
        >
          <Heading fontSize="3xl" textAlign="center" color="teal.800">
            Make Your Reservation
          </Heading>
          <Text mt={4} fontSize="md" textAlign="center" color="teal.600">
            Book a spot for your next visit easily with our online reservation
            system.
          </Text>
        </Box>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
          dateChange={dateChange}
          handleBookingConfirmed={handleBookingConfirmed}
        />
      </VStack>
    </Container>
  );
}

export default BookingPage;
