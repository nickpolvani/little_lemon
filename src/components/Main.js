
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';


function Main() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default Main;