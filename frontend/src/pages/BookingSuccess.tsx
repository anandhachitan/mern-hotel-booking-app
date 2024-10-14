// src/pages/BookingSuccess.tsx

import { useLocation, useNavigate } from "react-router-dom";
// Adjust the path based on your folder structure

const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { amountPaid } = location.state || { amountPaid: 0 };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img
        src="/assets/bill.jpg" // Replace with the path to your success image
        alt="Booking Successful"
        className="w-1/3 mb-4"
      />
      <h1 className="text-3xl font-bold">Payment Successful!</h1>
      <p className="mt-4">
        You have paid ₹{amountPaid.toFixed(2)} successfully.
      </p>
      <button
        onClick={() => navigate("/my-bookings")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to My Bookings
      </button>
    </div>
  );
};

export default BookingSuccess;
