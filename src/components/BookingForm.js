import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Button,
  VStack,
  Text,
  Alert,
  AlertIcon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

import { submitBooking } from "../api/api";

function BookingForm({
  availableTimes,
  setAvailableTimes,
  dateChange,
  handleBookingConfirmed,
}) {
  // State variables for each form field
  const today = new Date().toISOString().split("T")[0];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("none");
  const [status, setStatus] = useState(""); // success or error

  // Handlers for changing state
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleDateChange = (e) => {
    setDate(e.target.value);
    dateChange(e);
  };
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    submitBooking({ date, time, guests, occasion })
      .then((res) => {
        if (res) {
          setAvailableTimes({ type: "remove", payload: time });
          // Show a success message
          setStatus("success");
          handleBookingConfirmed({
            name,
            email,
            phone,
            date,
            time,
            guests,
            occasion,
          });
        } else {
          // Show an error message
          setStatus("error");
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }

  useEffect(() => {
    setTime(availableTimes[0]);
  }, [availableTimes]);

  const timeOptions = (availableTimes) => {
    if (availableTimes.length === 0) {
      return <option disabled={true}>No times available for this date</option>;
    }
    return availableTimes.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ));
  };

  const noAvailableTimes = availableTimes.length === 0;

  return (
    <VStack
      as="form"
      spacing="1rem"
      maxW="30rem"
      m="auto"
      onSubmit={handleSubmit}
    >
      <FormControl isRequired isInvalid={name === ""}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          required={true}
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="John Doe"
        />
        {name === "" && (
          <FormErrorMessage>This field is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl
        isRequired
        isInvalid={email === "" || !email.includes("@") || !email.includes(".")}
      >
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          required={true}
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={"john.doe@email.com"}
        />
        {email === "" ? (
          <FormErrorMessage>This field is required.</FormErrorMessage>
        ) : !email.includes("@") || !email.includes(".") ? (
          <FormErrorMessage>Invalid email address.</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl
        isRequired
        isInvalid={phone === "" || phone.length < 8 || phone.length > 15}
      >
        <FormLabel htmlFor="phone">Phone</FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
          <Input
            required={true}
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+44 123456789"
          />
        </InputGroup>
        {phone === "" ? (
          <FormErrorMessage>This field is required.</FormErrorMessage>
        ) : phone.length < 8 || phone.length > 15 ? (
          <FormErrorMessage>
            Invalid phone number, Length must be between 8 and 15.
          </FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl
        isRequired
        isInvalid={date === "" || new Date(date) < new Date(today)}
      >
        <FormLabel htmlFor="res-date">Choose date</FormLabel>
        <Input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          min={today}
          required={true}
        />
        {date === "" ? (
          <FormErrorMessage>This field is required.</FormErrorMessage>
        ) : new Date(date) < new Date(today) ? (
          <FormErrorMessage>
            Invalid date, must be today or later.
          </FormErrorMessage>
        ) : null}
      </FormControl>
      <FormControl
        isRequired
        isInvalid={
          noAvailableTimes || time === "" || !availableTimes.includes(time)
        }
      >
        <FormLabel htmlFor="res-time">Choose time</FormLabel>
        <Select
          id="res-time"
          value={time}
          onChange={handleTimeChange}
          required={true}
        >
          {timeOptions(availableTimes)}
        </Select>

        {noAvailableTimes ? (
          <FormErrorMessage>No available times.</FormErrorMessage>
        ) : time === "" || !availableTimes.includes(time) ? (
          <FormErrorMessage>Please select a valid time.</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl
        isRequired
        isInvalid={guests === "" || guests < 1 || guests > 10}
      >
        <FormLabel htmlFor="guests">Number of guests</FormLabel>
        <Input
          required={true}
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={handleGuestsChange}
        />
        {guests === "" ? (
          <FormErrorMessage>This field is required.</FormErrorMessage>
        ) : guests < 1 || guests > 10 ? (
          <FormErrorMessage>Invalid number of guests, must be between 1 and 10.</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option value="none">None</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </Select>
      </FormControl>

      <Button type="submit" colorScheme="yellow">
        Book Now
      </Button>
      <Alert
        status={status === "success" ? "success" : "error"}
        hidden={status === ""}
      >
        <AlertIcon />
        {status === "success" ? "Booking successful!" : "Booking failed"}
      </Alert>
    </VStack>
  );
}

export default BookingForm;
