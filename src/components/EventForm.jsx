import React, { useState } from "react";
import MediaUploader from "./MediaUploader";

export default function EventForm({ onSubmit }) {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    media: null, // Store uploaded media as Base64
  });

  const [clearMedia, setClearMedia] = useState(false); // ✅ Track media reset state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(event); // Pass event data to parent component

    // Reset form fields and media
    setEvent({ title: "", date: "", location: "", description: "", media: null });

    // ✅ Trigger media preview reset
    setClearMedia(true);
    setTimeout(() => setClearMedia(false), 100); // Reset state to allow future uploads
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block font-semibold">Title:</label>
        <input type="text" name="title" value={event.title} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>

      {/* Date Input */}
      <div className="mb-4">
        <label className="block font-semibold">Date & Time:</label>
        <input type="datetime-local" name="date" value={event.date} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>

      {/* Location Input */}
      <div className="mb-4">
        <label className="block font-semibold">Location:</label>
        <input type="text" name="location" value={event.location} onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="block font-semibold">Description:</label>
        <textarea name="description" value={event.description} onChange={handleChange} className="w-full p-2 border rounded" rows="3" required></textarea>
      </div>

      {/* ✅ Ensure MediaUploader receives clearMedia */}
      <MediaUploader onUpload={(media) => setEvent({ ...event, media })} clearMedia={clearMedia} />

      {/* Submit Button */}
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Save Event</button>
    </form>
  );
}
