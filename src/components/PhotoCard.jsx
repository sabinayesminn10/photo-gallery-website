const PhotoCard = ({ photo, darkMode }) => {
  return (
    <div
      className={`group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={photo.url}
          alt={photo.title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20"></div>

        {/* Album Badge */}
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow">
          Album {photo.albumId}
        </div>

        {/* Photo ID */}
        <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
          #{photo.id}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3
          className={`line-clamp-2 text-base font-semibold capitalize leading-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {photo.title}
        </h3>

        {/* Bottom info */}
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div>
            <p
              className={`text-xs ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              PHOTO ID
            </p>

            <p
              className={`text-sm font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {photo.id}
            </p>
          </div>

          <div className="text-right">
            <p
              className={`text-xs ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              ALBUM ID
            </p>

            <p
              className={`text-sm font-semibold ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {photo.albumId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
