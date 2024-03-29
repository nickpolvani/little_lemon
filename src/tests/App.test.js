import { render, screen } from '@testing-library/react';
import BookingForm from '../components/form/BookingForm';
import { updateAvailableTimes } from '../pages/Main';

test('Renders the BookingForm heading', () => {
  render(<BookingForm
    availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00']}
    setAvailableTimes={() => { }}
  />);
  const heading = screen.getByText("Book Now");
  expect(heading).toBeInTheDocument();

  // check that the form can be submitted
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Book Now');


});


describe('updateAvailableTimes', () => {
  test('removes a time from the available times', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'remove', payload: '18:00' };
    const expectedState = ['17:00', '19:00', '20:00', '21:00'];
    expect(updateAvailableTimes(initialState, action)).toEqual(expectedState);
  });
  test('adds a time to the available times', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'add', payload: '22:00' };
    const expectedState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(updateAvailableTimes(initialState, action)).toEqual(expectedState);
  });
  test('returns the initial state if the action type is not recognized', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'unknown', payload: '22:00' };
    expect(updateAvailableTimes(initialState, action)).toEqual(initialState);
  });

});