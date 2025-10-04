import { useNavigate } from "react-router-dom";
import useNews from "../../../components/hooks/useNews";
import Loader from "../../../components/Loader/Loader";

const AllNews = () => {
  const { data, isLoading } = useNews();

  const navigate = useNavigate();

  const handleEventClick = (news) => {
    navigate(`/news/${news._id}`, { state: { news } });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">All News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.map((news) => {
          const fullImageUrl = `https://backend.mettadhamma.com${news.image}`;
          return (
            <div
              key={news.id}
              onClick={() => handleEventClick(news)}
              className="border rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={fullImageUrl}
                crossOrigin="anonymous"
                alt={news.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-1">
                  📅 {news.date} | 🕒 {news.time}
                </p>
                <p className="text-gray-600 text-sm">📍 {news.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllNews;
