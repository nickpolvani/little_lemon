import { Routes, Route, useNavigate } from "react-router-dom";
import Page from "./Page";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { useReducer, useEffect, useState } from "react";
import { fetchAPI } from "../api/api";
import ConfirmedBooking from "./ConfirmedBooking";

function updateAvailableTimes(state, action) {
  switch (action.type) {
    case "set":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "remove":
      console.log(action.payload);
      return state.filter((time) => time !== action.payload);
    default:
      return state;
  }
}

function Main() {
  const [initAvailableTimes, setInitAvailableTimes] = useState([]);

  const [availableTimes, setAvailableTimes] = useReducer(
    updateAvailableTimes,
    initAvailableTimes,
  );

  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  function handleBookingConfirmed(data) {
    setFormData(data);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({});
    navigate("/");
  };

  useEffect(() => {
    fetchAPI().then((res) => {
      setInitAvailableTimes(res);
    });
  }, []);

  useEffect(() => {
    setAvailableTimes({ type: "set", payload: initAvailableTimes });
  }, [initAvailableTimes]);

  function handleDateChange(e) {
    fetchAPI(e.target.value).then((res) => {
      setAvailableTimes({ type: "set", payload: res });
    });
  }

  return (
    <>
      <Page>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                dateChange={handleDateChange}
                handleBookingConfirmed={handleBookingConfirmed}
              />
            }
          />
        </Routes>

        <ConfirmedBooking
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          {...formData}
        />
      </Page>
    </>
  );
}

export default Main;
export { updateAvailableTimes };
