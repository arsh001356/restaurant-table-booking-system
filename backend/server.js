const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Mock bookings data
let bookings = [];

// Enable CORS
app.use(cors({
    origin: ['https://restaurant-table-booking-systems.vercel.app/'], // Array of allowed origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // Allow credentials (e.g., cookies, Authorization headers)
}));
app.use(bodyParser.json());

// Get available times based on date
app.post('/api/availability', (req, res) => {
    const { date } = req.body;

    // Mock availability times
    const availableTimes = ['12:00', '14:00', '16:00']; // Replace with actual logic to check availability from bookings

    res.json({ availableTimes });
});

// Book a table
app.post('/api/bookings', (req, res) => {
    const { date, time, guests, name, contact } = req.body;

    // Check if the time slot is already booked
    const existingBooking = bookings.find(
        (booking) => booking.date === date && booking.time === time
    );
    if (existingBooking) {
        return res.status(400).json({ message: 'This time slot is already booked.' });
    }

    // Add the new booking
    const newBooking = { date, time, guests, name, contact };
    bookings.push(newBooking);

    res.json({
        confirmationMessage: 'Booking successful',
        ...newBooking,
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
