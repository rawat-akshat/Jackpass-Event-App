import React from "react";

export default function EventForm({ onSubmit }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Form Container - Centered Box */}
      <form className="w-full max-w-3xl mx-auto p-10 bg-white shadow-2xl rounded-3xl border border-gray-300">
        {/* Form Fields - Matching Image Width */}
        <div className="space-y-8">
          {/* Event Title */}
          <div>
            <label className="block text-2xl font-bold mb-3">Event Title:</label>
            <input
              type="text"
              className="w-full p-5 border rounded-full text-2xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter event title"
            />
          </div>

          {/* Start & End Date */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-2xl font-bold mb-3">Start Date:</label>
              <input
                type="datetime-local"
                className="w-full p-5 border rounded-full text-2xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-2xl font-bold mb-3">End Date:</label>
              <input
                type="datetime-local"
                className="w-full p-5 border rounded-full text-2xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Event Location */}
          <div>
            <label className="block text-2xl font-bold mb-3">Event Location:</label>
            <input
              type="text"
              className="w-full p-5 border rounded-full text-2xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter event location"
            />
          </div>

          {/* Event Description */}
          <div>
            <label className="block text-2xl font-bold mb-3">Event Description:</label>
            <textarea
              className="w-full p-5 border rounded-3xl text-2xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
              rows="5"
              placeholder="Write a brief description..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-5 rounded-full text-2xl font-extrabold hover:bg-blue-800 transition-all mt-8"
        >
          Save Event
        </button>
      </form>
    </div>
  );
}
