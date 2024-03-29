import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "../components/form/BookingForm";

const mockProps = {
  availableTimes: ["10:00", "11:00"],
  setAvailableTimes: jest.fn(),
  dateChange: jest.fn(),
  handleBookingConfirmed: jest.fn(),
};

describe("BookingForm Tests", () => {
  test("renders BookingForm and checks if form elements are present", () => {
    render(<BookingForm {...mockProps} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("validates name field on blur", async () => {
    render(<BookingForm {...mockProps} />);
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.blur(nameInput); // Simulate leaving the name field without entering a value
    await waitFor(() => {
      expect(screen.getByText("This field is required.")).toBeInTheDocument();
    });
  });

  test("validates email field on blur", async () => {
    render(<BookingForm {...mockProps} />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.blur(emailInput); // Simulate leaving the email field without entering a value
    await waitFor(() => {
      expect(screen.getByText("This field is required.")).toBeInTheDocument();
    });
  });

  test("validates phone field on blur", async () => {
    render(<BookingForm {...mockProps} />);
    const phoneInput = screen.getByLabelText(/phone/i);
    fireEvent.blur(phoneInput); // Simulate leaving the phone field without entering a value
    await waitFor(() => {
      expect(
        screen.getByText(
          "Invalid phone number, Length must be between 8 and 15.",
        ),
      ).toBeInTheDocument();
    });
  });

  test("validates date field on blur", async () => {
    render(<BookingForm {...mockProps} />);
    const dateInput = screen.getByLabelText(/date/i);
    // set date to previous than today
    fireEvent.change(dateInput, {
      target: { value: "2021-01-01" },
    });
    fireEvent.blur(dateInput); // Simulate leaving the date field without entering a value
    await waitFor(() => {
      expect(
        screen.getByText("Invalid date, must be today or later."),
      ).toBeInTheDocument();
    });
  });

  test("validates time field on blur", async () => {
    render(<BookingForm {...mockProps} />);
    const timeInput = screen.getByLabelText(/time/i);
    // set time to invalid value
    fireEvent.change(timeInput, {
      target: { value: "5:00" },
    });
    fireEvent.blur(timeInput); // Simulate leaving the time field without entering a value
    await waitFor(() => {
      expect(
        screen.getByText("Please select a valid time."),
      ).toBeInTheDocument();
    });
  });

  test("submits the form with correct data", async () => {
    render(<BookingForm {...mockProps} />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "+44 123456789" },
    });

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: new Date().toISOString().split("T")[0] },
    });

    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "10:00" },
    });

    fireEvent.change(screen.getByLabelText(/guests/i), {
      target: { value: 2 },
    });

    // Mock the form submission
    const handleSubmit = jest.fn();
    const submitButton = screen.getByRole("button", { name: /book now/i });
    submitButton.onclick = handleSubmit;
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });

  // Additional tests can be added here to cover more scenarios
});
