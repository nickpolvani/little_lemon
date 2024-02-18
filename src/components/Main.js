
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { useReducer } from 'react';

function updateAvailableTimes(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'remove':
            console.log(action.payload)
            return state.filter((time) => time !== action.payload);
        default:
            return state;
    }
}

function Main() {

    const initAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

    const [availableTimes, setAvailableTimes] = useReducer(updateAvailableTimes, initAvailableTimes);



    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/booking" element={<BookingPage
                        availableTimes={availableTimes}
                        setAvailableTimes={setAvailableTimes}
                    />} />
                </Routes>
            </Router>
        </>
    )
}

export default Main;
export { updateAvailableTimes };