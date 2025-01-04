import React, { useState } from 'react';

const BookTable = () => {
    const [bookingData, setBookingData] = useState({
        date: '',
        time: '',
        guests: '',
        name: '',
        contact: '',
    });
    const [availableTimes, setAvailableTimes] = useState([]);
    const [bookingSummary, setBookingSummary] = useState(null);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setBookingData({ ...bookingData, [e.target.name]: e.target.value });
        setFormErrors({ ...formErrors, [e.target.name]: "" }); // Clear error on change
    };

    const validateForm = () => {
        let errors = {};
        if (!bookingData.date) errors.date = "Date is required";
        if (!bookingData.time) errors.time = "Time is required";
        if (!bookingData.guests || isNaN(bookingData.guests) || bookingData.guests <= 0) errors.guests = "Valid number of guests is required";
        if (!bookingData.name) errors.name = "Name is required";
        if (!bookingData.contact) errors.contact = "Contact is required"; // Add more robust contact validation if needed
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleCheckAvailability = async () => {
        if (!validateForm()) return;

        try {
            const response = await fetch('https://restaurant-table-booking-system-apii.vercel.app/api/availability', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ date: bookingData.date }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch availability.');
            }
            const data = await response.json();
            setAvailableTimes(data.availableTimes || []); // Ensure data contains availableTimes

        } catch (error) {
            console.error(error);
            alert('Error checking availability.');
        }
    };

    const handleBooking = async () => {
        if (!validateForm()) return;
        if (!availableTimes.includes(bookingData.time)) {
            alert("Selected time is not available. Please check availability again.");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Booking failed.');
            }

            const bookingConfirmation = await response.json();
            setBookingSummary(bookingConfirmation);
            setBookingData({ date: '', time: '', guests: '', name: '', contact: '' }); // Clear the form
            setAvailableTimes([]);

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    if (bookingSummary) {
        return (
            <div className=' mb-20 bg-white pt-24 '>
                <div className="p-6 border-2 rounded-lg shadow-lg bg-green-50">
                    <h2 className="text-3xl font-semibold text-green-600 mb-4">Booking Confirmed!</h2>
                    <p className="text-xl mb-4 text-gray-700">Thank you for your reservation.</p>
                    <div className="bg-white p-4 border rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-3">Reservation Details:</h3>
                        <p><strong className="font-bold text-gray-600">Date:</strong> {bookingSummary.date}</p>
                        <p><strong className="font-bold text-gray-600">Time:</strong> {bookingSummary.time}</p>
                        <p><strong className="font-bold text-gray-600">Guests:</strong> {bookingSummary.guests}</p>
                        <p><strong className="font-bold text-gray-600">Name:</strong> {bookingSummary.name}</p>
                        <p><strong className="font-bold text-gray-600">Contact Details:</strong> {bookingSummary.contact}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className=' mb-20 bg-white pt-24 '>
            <div className="p-6 border-2 rounded-lg max-w-lg mx-auto bg-white shadow-lg ">
                <h2 className="text-3xl font-semibold text-blue-600 mb-6 ">Make a Reservation</h2>
                <div className="mb-3">
                    <label htmlFor="date" className="block text-gray-700">Date:</label>
                    <input type="date" id="date" name="date" value={bookingData.date} onChange={handleChange} className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {formErrors.date && <p className="text-red-500 text-sm">{formErrors.date}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="time" className="block text-gray-700">Time:</label>
                    <input type="time" id="time" name="time" value={bookingData.time} onChange={handleChange} className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {formErrors.time && <p className="text-red-500 text-sm">{formErrors.time}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="guests" className="block text-gray-700">Number of Guests:</label>
                    <input type="number" id="guests" name="guests" value={bookingData.guests} onChange={handleChange} className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {formErrors.guests && <p className="text-red-500 text-sm">{formErrors.guests}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="block text-gray-700">Name:</label>
                    <input type="text" id="name" name="name" value={bookingData.name} onChange={handleChange} className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="block text-gray-700">Contact Details:</label>
                    <input type="text" id="contact" name="contact" value={bookingData.contact} onChange={handleChange} className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {formErrors.contact && <p className="text-red-500 text-sm">{formErrors.contact}</p>}
                </div>

                <button onClick={handleCheckAvailability} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">Check Availability</button>

                {availableTimes.length > 0 && (
                    <div className="mb-3">
                        <label htmlFor="availableTimes" className="block text-gray-700">Available Times:</label>
                        <select id="availableTimes" name="time" value={bookingData.time} onChange={handleChange} className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select a Time</option>
                            {availableTimes.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                )}
                <button onClick={handleBooking} className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-700 w-full focus:outline-none focus:ring-2 focus:ring-green-500" disabled={availableTimes.length === 0 || !bookingData.time}>Book Now</button>
            </div>
        </div>
    );
};

export default BookTable;
