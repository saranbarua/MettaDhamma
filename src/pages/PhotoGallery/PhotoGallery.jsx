import { useState } from "react";
import useImages from "../../../components/hooks/useImages";
import Loader from "../../../components/Loader/Loader";

export default function PhotoGallery() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const { images, isLoading } = useImages();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className=" mx-auto ">
      <h2 className="text-3xl bg-primary py-4 text-white font-bold text-center mb-6">
        Gallery
      </h2>

      {/* Image Grid */}
      <div className="grid container p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images?.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
            onClick={() =>
              setLightboxImage(
                `https://chattogram-somiti.makeupcoders.com${src.image}`
              )
            }
          >
            <img
              src={`https://chattogram-somiti.makeupcoders.com${src.image}`}
              alt={`Gallery ${index}`}
              className="w-full h-60 "
              crossOrigin="anonymous"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            crossOrigin="anonymous"
            alt="Lightbox"
            className="max-w-full max-h-full rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
