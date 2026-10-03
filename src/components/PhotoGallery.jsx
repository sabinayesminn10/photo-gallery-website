import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const PhotoGallery = ({ search, album, darkMode }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.slice(0, 100));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Search and album filter
  const filteredPhotos = photos.filter((photo) => {
    const searchMatch = photo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const albumMatch = album === "all" || photo.albumId === Number(album);

    return searchMatch && albumMatch;
  });

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-xl font-semibold">Loading photos...</p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Photo Gallery</h2>

        <p className={darkMode ? "mt-2 text-gray-400" : "mt-2 text-gray-600"}>
          Showing {filteredPhotos.length} photos
        </p>
      </div>

      {/* Photos */}
      {filteredPhotos.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-lg text-gray-500">No photos found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} darkMode={darkMode} />
          ))}
        </div>
      )}
    </main>
  );
};

export default PhotoGallery;
