import React from "react";
import placeholder from "../assets/placeholder1.png";
import EventForm from "../components/EventForm";

export default function CreateEvent({ onSubmit }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-700 p-8">
      <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-3xl p-8 max-w-xl w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-6">🎭 Create a New Event</h2>

        {/* Single Image (No Repetition) */}
        <div className="w-full mb-6">
          <img
            src={placeholder}
            alt="Event Cover"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        <EventForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
