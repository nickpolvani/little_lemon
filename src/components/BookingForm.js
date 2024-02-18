import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  Text
} from '@chakra-ui/react';

function BookingForm({ availableTimes, setAvailableTimes }) {
  // State variables for each form field
  const today = new Date().toISOString().split('T')[0];

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('none');


  // Handlers for changing state
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    setAvailableTimes({ type: 'remove', payload: time });
  }

  useEffect(() => {
    setTime(availableTimes[0]);
  }, [availableTimes]);

  const timeOptions = (availableTimes) => {
    if (availableTimes.length === 0) {
      return <option disabled={true}>No times available for this date</option>
    }
    return availableTimes.map((time) => (
      <option key={time} value={time}>{time}</option>
    ));
  }

  const noAvailableTimes = availableTimes.length === 0;

  return (
    <VStack as="form" spacing="20px" maxW="200px" m="auto" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="res-date">Choose date</FormLabel>
        <Input type="date" id="res-date" value={date} onChange={handleDateChange} min={today}
          required={true}
        />
      </FormControl>

      <FormControl isInvalid={noAvailableTimes} >
        <FormLabel htmlFor="res-time">Choose time</FormLabel>
        <Select id="res-time" value={time} onChange={handleTimeChange} required={true}>
          {timeOptions(availableTimes)}
        </Select>
        {noAvailableTimes && <Text color="red.500">No available times.</Text>}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="guests">Number of guests</FormLabel>
        <Input required={true} type="number" id="guests" placeholder='1' min="1" max="10" value={guests} onChange={handleGuestsChange} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="occasion">Occasion</FormLabel>
        <Select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option value="none">None</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </Select>
      </FormControl>

      <Button type="submit" colorScheme="yellow">Book Now</Button>
    </VStack>
  );
}

export default BookingForm;
