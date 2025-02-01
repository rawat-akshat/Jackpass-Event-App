import React from "react";
import EventForm from "../components/EventForm";

export default function CreateEvent() {
  const handleEventSubmit = (eventData) => {
    console.log("Event Data Submitted:", eventData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <EventForm onSubmit={handleEventSubmit} />
    </div>
  );
}
