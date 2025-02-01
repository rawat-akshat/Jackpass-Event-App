import React, { useState } from "react";

export default function MediaUploader({ onUpload }) {
  const [preview, setPreview] = useState(null);

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result); // ✅ Only show preview, not store in sessionStorage
        onUpload(reader.result); // ✅ Pass Base64 to parent for immediate use (but not stored)
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold">Upload Image/Video:</label>
      <input type="file" accept="image/*,video/*" onChange={handleMediaUpload} className="w-full p-2 border rounded" />

      {/* ✅ Only display preview temporarily */}
      {preview && (
        <div className="mt-3">
          {preview.startsWith("data:image") ? (
            <img src={preview} alt="Preview" className="w-full max-w-xs rounded border" />
          ) : (
            <video controls className="w-full max-w-xs rounded border">
              <source src={preview} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </div>
  );
}
