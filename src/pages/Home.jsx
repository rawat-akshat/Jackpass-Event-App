import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [events, setEvents] = useLocalStorage("events", []); // Load stored events
  const [eventList, setEventList] = useState([]); // Local UI state

  // ✅ Ensure UI syncs with localStorage on load
  useEffect(() => {
    setEventList(events);
  }, [events]);

  // ✅ Correctly delete event by ID
  const handleDelete = (id) => {
    const updatedEvents = eventList.filter((event) => event.id !== id);
    setEventList(updatedEvents); // ✅ Update local UI immediately
    setEvents(updatedEvents); // ✅ Persist to localStorage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4">Event List</h1>

      {eventList.length === 0 ? (
        <p className="text-lg">
          No events found. <a href="/create" className="text-blue-500 underline">Create one</a>.
        </p>
      ) : (
        <div className="grid gap-6 w-full max-w-2xl">
          {eventList.map((event) => (
            <div key={event.id} className="p-4 bg-white rounded shadow-md relative">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Description:</strong> {event.description}</p>

              {/* ✅ Delete Button */}
              <button
                onClick={() => handleDelete(event.id)} // ✅ Delete by `id`, not index
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
