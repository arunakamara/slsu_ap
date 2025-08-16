import React, { useState } from "react";
import Modal from "react-modal";

// Bind modal to app element for accessibility
Modal.setAppElement("#root");

const Gallery = () => {
  // Sample data (replace with real photos and videos)
  const photos = [
    {
      id: 1,
      title: "Cultural Night 2024",
      url: "/Images/cultural.jpg",
      description: "Students performing traditional Sierra Leonean dance.",
    },
    {
      id: 2,
      title: "Football Match 2024",
      url: "/Images/football1.jpg",
      description: "Members supporting the football team.",
    },
    {
      id: 3,
      title: "Independence Day 2024",
      url: "/Images/Independence.jpg",
      description: "Celebrating Sierra Leone’s independence in Andhra Pradesh.",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Fun Adventures",
      url: "/Videos/fun1.mp4", // Rickroll as placeholder
      description: "Fun moments together.",
    },
    {
      id: 2,
      title: "Football Match",
      url: "/Videos/football1.mp4", // Another placeholder
      description: "Celebration after winning a match.",
    },
    {
      id: 3,
      title: "Miss Mary's Performance",
      url: "/Videos/performance_mary.mp4", // Another placeholder
      description: "Our member, Mary Kargbo dancing performance.",
    },
    {
      id: 4,
      title: "Miss Mary flying our country's flag",
      url: "/Videos/performance_mary2.mp4", // Another placeholder
      description:
        "Our member, Mary Kargbo representing Sierra Leone in Malaysia.",
    },
  ];

  // State for photo lightbox
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Gallery
        </h1>

        {/* Photos */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Photos</h2>
          {photos.length === 0 ? (
            <p className="text-gray-600">
              No photos available yet. Check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => openModal(photo)}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Photo Modal */}
        <Modal
          isOpen={!!selectedPhoto}
          onRequestClose={closeModal}
          className="bg-white p-4 rounded-lg max-w-3xl mx-auto my-16"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        >
          {selectedPhoto && (
            <div className="text-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full max-h-[70vh] object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedPhoto.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedPhoto.description}</p>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </Modal>

        {/* Videos */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Videos</h2>
          {videos.length === 0 ? (
            <p className="text-gray-600">No videos available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <div className="relative pb-[56.25%] mb-4">
                    <video
                      src={video.url} 
                      title={video.title}
                      className="absolute top-0 left-0 w-full h-full rounded-md"
                      controls
                      allowFullScreen
                    />
                  </div>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
