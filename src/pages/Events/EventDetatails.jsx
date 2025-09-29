import { useLocation, Link } from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();
  const { event } = location.state || {};

  if (!event) {
    return (
      <div className="text-center mt-10 text-xl font-semibold">
        Event not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto py-10 px-4 md:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="text-primary-light hover:text-blue-800 font-semibold mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={`http://backend.mettadhamma.com${event?.image}`}
            alt={event.title}
            className="w-full object-contain"
            crossOrigin="anonymous"
          />

          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {event.title}
            </h1>

            {/* Subheading */}
            <h2 className="text-lg md:text-xl font-semibold text-gray-600 mb-6">
              {event?.subheading}
            </h2>

            {/* Event Info */}
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <span className="font-semibold">📅 Date:</span> {event.date}
              </p>
              <p className="text-lg">
                <span className="font-semibold">🕒 Time:</span> {event.time}
              </p>
              <p className="text-lg">
                <span className="font-semibold">📍 Location:</span>{" "}
                {event.location}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Event Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {event?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
