import React, { useState, useEffect } from "react";

export default function MediaUploader({ onUpload, clearMedia }) { // ✅ Ensure clearMedia is received
  const [preview, setPreview] = useState(null);

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result); // Set preview for user
        onUpload(reader.result); // Pass Base64 data to parent
      };

      reader.readAsDataURL(file);
    }
  };

  // ✅ Reset preview when `clearMedia` becomes `true`
  useEffect(() => {
    if (clearMedia) {
      setPreview(null);
    }
  }, [clearMedia]);

  return (
    <div className="mb-4">
      <label className="block font-semibold">Upload Image/Video:</label>
      <input type="file" accept="image/*,video/*" onChange={handleMediaUpload} className="w-full p-2 border rounded" />

      {/* Media Preview */}
      {preview && (
        <div className="mt-3">
          {preview.startsWith("data:image") ? (
            <img src={preview} alt="Preview" className="w-full max-w-xs rounded border" />
          ) : (
            <video controls className="w-full max-w-xs rounded border">
              <source src={preview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
}
