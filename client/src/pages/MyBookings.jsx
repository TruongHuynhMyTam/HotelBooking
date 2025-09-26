import React, { useState } from "react";
import Title from "../components/Title";
import { userBookingsDummyData, assets } from "../assets/assets";

export const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-8 lg:px-12 xl:px-16">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings && bookings.length > 0 ? (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
            >
              {/* ------ Hotel Details ---- */}
              <div className="flex gap-4">
                <img
                  src={booking.room.images[0]}
                  alt="hotel-img"
                  className="w-32 h-24 rounded shadow object-cover flex-shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-playfair text-lg font-semibold">
                    {booking.hotel.name}
                    <span className="font-inter text-sm text-gray-600">
                      ({booking.room.roomType})
                    </span>
                  </p>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <img
                      src={assets.locationIcon}
                      alt="location-icon"
                      className="w-4 h-4"
                    />
                    <span>{booking.hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <img
                      src={assets.guestsIcon}
                      alt="guests-icon"
                      className="w-4 h-4"
                    />
                    <span>Guests: {booking.guests}</span>
                  </div>
                  <p className="text-base">Total: ${booking.totalPrice}</p>
                </div>
              </div>
              {/* ------ Date & Timeings ---- */}
              <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
                <div>
                  <p>Check-In:</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(booking.checkInDate).toDateString()}
                  </p>
                </div>
                <div>
                  <p>Check-Out:</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(booking.checkOutDate).toDateString()}
                  </p>
                </div>
              </div>
              {/* Payment Status */}
              <div className="flex flex-col items-start justify-center pt-3">
                <div className="flex items-center gap-2">
                  {/* Icon tròn báo trạng thái */}
                  <div
                    className={`h-3 w-3 rounded-full ${
                      booking.isPaid ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <p
                    className={`text-sm ${
                      booking.isPaid ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {booking.isPaid ? "Paid" : "Unpaid"}
                  </p>
                </div>
                {/* Nút thanh toán khi chưa trả */}
                {!booking.isPaid && (
                  <button
                    className="mt-4 px-4 py-1.5 text-xs border border-gray-400 rounded-full 
                 hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No bookings found</p>
            <p className="text-gray-400 text-sm mt-2">
              You haven't made any reservations yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default MyBookings;
