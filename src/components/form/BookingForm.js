import React, { useEffect, useState } from "react";
import { Button, VStack, Alert, AlertIcon } from "@chakra-ui/react";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

import { submitBooking } from "../../api/api";

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

  const noAvailableTimes = availableTimes.length === 0;
  
  const isNameValid = name !== "";
  const isEmailValid =
    email !== "" && email.includes("@") && email.includes(".");
  const isPhoneValid = phone !== "" && phone.length >= 8 && phone.length <= 15;
  const isDateValid = date !== "" && new Date(date) >= new Date(today);
  const isTimeValid = time !== "" && availableTimes.includes(time) && !noAvailableTimes;
  const isGuestsValid = guests !== "" && guests >= 1 && guests <= 10;


  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isDateValid &&
    isTimeValid &&
    isGuestsValid;

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

  return (
    <VStack
      as="form"
      spacing="1rem"
      maxW="30rem"
      m="auto"
      onSubmit={handleSubmit}
    >
      <FormInput
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        label="Name"
        placeholder="John Doe"
        isRequired={true}
        isInvalid={!isNameValid}
        errorMessage="This field is required."
      />

      <FormInput
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        label="Email"
        placeholder={"john.doe@email.com"}
        isRequired={true}
        isInvalid={!isEmailValid}
        errorMessage={
          email === "" ? "This field is required." : "Invalid email."
        }
      />

      <FormInput
        id="phone"
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        label="Phone"
        placeholder="+44 123456789"
        isRequired={true}
        isInvalid={!isPhoneValid}
        errorMessage="Invalid phone number, Length must be between 8 and 15."
      />

      <FormInput
        id="res-date"
        type="date"
        value={date}
        onChange={handleDateChange}
        label="Choose date"
        isRequired={true}
        isInvalid={!isDateValid}
        errorMessage="Invalid date, must be today or later."
      />
      <FormSelect
        id="res-time"
        options={timeOptions(availableTimes)}
        value={time}
        onChange={handleTimeChange}
        label="Choose time"
        isRequired={true}
        isInvalid={!isTimeValid}
        errorMessage={
          noAvailableTimes
            ? "No available times."
            : time === "" || !availableTimes.includes(time)
              ? "Please select a valid time."
              : ""
        }
      />
      <FormInput
        id="guests"
        type="number"
        value={guests}
        onChange={handleGuestsChange}
        label="Number of guests"
        placeholder="1"
        isRequired={true}
        isInvalid={!isGuestsValid}
        errorMessage="Invalid number of guests, must be between 1 and 10."
      />

      <FormSelect
        id="occasion"
        options={
          <>
            <option value="none">None</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </>
        }
        value={occasion}
        onChange={handleOccasionChange}
        label="Occasion"
        isRequired={false}
        isInvalid={false}
        errorMessage=""
      />

      <Button type="submit" colorScheme="yellow" disabled={!isFormValid}>
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
