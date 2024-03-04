import BookingForm from "../components/BookingForm";

function BookingPage({
  availableTimes,
  setAvailableTimes,
  dateChange,
  handleBookingConfirmed,
}) {
  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        dateChange={dateChange}
        handleBookingConfirmed={handleBookingConfirmed}
      />
    </div>
  );
}

export default BookingPage;
