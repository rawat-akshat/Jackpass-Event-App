import React from "react";
import placeholder1 from "../assets/placeholder1.png";
import EventForm from "../components/EventForm";

export default function CreateEvent({ onSubmit }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-indigo-600 p-8">
      <div className="bg-white bg-opacity-90 shadow-xl rounded-3xl p-8 w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">🎭 Create a New Event</h2>

        {/* Single Image Placeholder */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={placeholder1}
            alt="Event Cover"
            className="rounded-lg shadow-md w-3/4 h-56 object-cover"
          />
        </div>

        <EventForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
