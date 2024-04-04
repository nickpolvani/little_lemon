import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Page from "./Page";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { useReducer, useEffect, useState } from "react";
import { fetchAPI } from "../api/api";
import ConfirmedBooking from "../components/ConfirmedBooking";

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

// The new component that uses useNavigate
function BookingHandler({ formData, setFormData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(formData).length !== 0) {
      // Simple check to see if formData is not empty
      navigate("/booking_confirmation");
    }
  }, [formData, navigate]);

  // Render nothing or null since this component is only for handling side effects
  return null;
}

function Main() {
  const [initAvailableTimes, setInitAvailableTimes] = useState([]);

  const [availableTimes, setAvailableTimes] = useReducer(
    updateAvailableTimes,
    initAvailableTimes,
  );

  const [formData, setFormData] = useState({});

  function handleBookingConfirmed(data) {
    setFormData(data);
    console.log(data);
  }

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
            <Route
              path="/booking_confirmation"
              element={<ConfirmedBooking {...formData} />}
            />
          </Routes>
          <BookingHandler formData={formData} setFormData={setFormData} />
       
      </Page>
    </>
  );
}

export default Main;
export { updateAvailableTimes };
