import React, { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { FaCalendarAlt, FaMapMarkerAlt, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import placeholderImage from "../assets/placeholder1.png"; // Adjust the name if needed


export default function Home() {
  const [events, setEvents] = useLocalStorage("events", []);
  const [eventList, setEventList] = useState([]);
  const [deleteEventId, setDeleteEventId] = useState(null); // For delete confirmation modal

  useEffect(() => {
    setEventList(events);
  }, [events]);

  const handleDelete = (id) => {
    const updatedEvents = eventList.filter((event) => event.id !== id);
    setEventList(updatedEvents);
    setEvents(updatedEvents);
    setDeleteEventId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 p-8 flex flex-col items-center text-white">
      <h1 className="text-5xl font-extrabold mb-8 tracking-wide">🎉 Upcoming Events</h1>

      {eventList.length === 0 ? (
        <p className="text-lg text-gray-300">
          No events yet.{" "}
          <a href="/create" className="text-yellow-400 font-semibold hover:underline">
            Create One Now!
          </a>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {eventList.map((event) => (
            <div
              key={event.id}
              className="relative bg-white bg-opacity-20 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-[1.04] hover:shadow-purple-500"
            >
              {/* Event Image */}
              <div className="relative h-56 w-full">
                <img
                  src={event.media || placeholderImage}
                  alt="Event"
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold backdrop-blur-md">
                  {event.title}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-gray-200">{event.title}</h2>

                {/* Date & Location */}
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <FaCalendarAlt className="text-yellow-400" />
                  <span>{event.date || "No date provided"}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm">
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>{event.location || "No location provided"}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm">
                  {event.description.length > 120
                    ? event.description.substring(0, 120) + "..."
                    : event.description}
                </p>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => setDeleteEventId(event.id)}
                className="absolute top-5 right-5 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-700 transition-all duration-200"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Floating Create Event Button */}
      <a
        href="/create"
        className="fixed bottom-10 right-10 bg-yellow-400 text-gray-900 p-5 rounded-full shadow-xl hover:bg-yellow-300 transition-all transform hover:scale-110"
      >
        <FaPlusCircle size={30} />
      </a>

      {/* Delete Confirmation Modal */}
      {deleteEventId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
          <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-md">
            <h2 className="text-2xl font-bold">Delete Event?</h2>
            <p className="text-gray-300 mt-2">Are you sure you want to remove this event?</p>

            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setDeleteEventId(null)}
                className="px-4 py-2 bg-gray-500 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteEventId)}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
