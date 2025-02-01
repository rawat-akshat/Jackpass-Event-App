import React from "react";
import EventForm from "../components/EventForm";
import useLocalStorage from "../hooks/useLocalStorage";

export default function CreateEvent() {
  const [events, setEvents] = useLocalStorage("events", []); // Load existing events

  const handleEventSubmit = (newEvent) => {
    const eventWithId = {
      id: Date.now(),
      title: newEvent.title,
      date: newEvent.date,
      location: newEvent.location,
      description: newEvent.description,
      // ✅ Media is NOT stored in localStorage anymore
    };

    setEvents([...events, eventWithId]);
    console.log("Event Saved:", eventWithId);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <EventForm onSubmit={handleEventSubmit} />
    </div>
  );
}
