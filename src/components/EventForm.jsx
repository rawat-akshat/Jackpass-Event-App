import React from "react";

export default function EventForm({ onSubmit }) {
  return (
    <form className="bg-white p-8 shadow-lg rounded-xl w-full">
      {/* Event Title */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-700 mb-2">Event Title:</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter event title"
        />
      </div>

      {/* Date Inputs */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">Start Date:</label>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">End Date:</label>
          <input
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-700 mb-2">Event Location:</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter event location"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-gray-700 mb-2">Event Description:</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="3"
          placeholder="Write a brief description..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-3 rounded-lg text-lg hover:bg-indigo-700 transition-all"
      >
        Save Event
      </button>
    </form>
  );
}
