import { useLocation, Link } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();
  const { news } = location.state || {};

  if (!news) {
    return (
      <div className="text-center mt-10 text-xl font-semibold">
        News not found.
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
            src={`https://chattogram-somiti.makeupcoders.com${news.image}`}
            alt={news.title}
            crossOrigin="anonymous"
            className="w-full object-contain"
          />

          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {news.title}
            </h1>

            {/* Subheading */}
            <h2 className="text-lg md:text-xl font-semibold text-gray-600 mb-6">
              {news?.subheading}
            </h2>

            {/* Event Info */}
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <span className="font-semibold">📅 Date:</span> {news.date}
              </p>
              <p className="text-lg">
                <span className="font-semibold">🕒 Time:</span> {news.time}
              </p>
              <p className="text-lg">
                <span className="font-semibold">📍 Location:</span>{" "}
                {news.location}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                News Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {news?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
