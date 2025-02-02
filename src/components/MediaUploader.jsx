import React, { useState } from "react";

export default function MediaUploader({ onUpload, clearMedia }) {
  const [preview, setPreview] = useState(null);

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    if (clearMedia) {
      setPreview(null);
    }
  }, [clearMedia]);

  return (
    <div>
      <label className="block text-gray-700 font-medium">Upload Image/Video</label>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleMediaUpload}
        className="mt-2 p-2 border rounded focus:outline-none"
      />
      {preview && (
        <div className="mt-4">
          {preview.startsWith("data:image") ? (
            <img src={preview} alt="Preview" className="rounded-md shadow-md" />
          ) : (
            <video controls className="rounded-md shadow-md">
              <source src={preview} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </div>
  );
}
