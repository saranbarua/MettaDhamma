import { Link, useNavigate } from "react-router-dom";
import useNews from "../../../components/hooks/useNews";
import Loader from "../../../components/Loader/Loader";

const News = () => {
  const { data, isLoading } = useNews();
  const navigate = useNavigate();
  const slicedNewsData = data?.slice(0, 3);

  const handleDetailsClick = (news) => {
    navigate(`/news/${news._id}`, { state: { news } });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="p-6 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">সাম্প্রতিক সংবাদ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slicedNewsData?.map((news, index) => (
          <div
            key={index}
            onClick={() => handleDetailsClick(news)}
            className="border rounded-lg shadow-md cursor-pointer overflow-hidden"
          >
            <img
              src={`http://backend.mettadhamma.com${news.image}`}
              alt={news.title}
              className="w-full  h-60 object-cover"
              crossOrigin="anonymous"
            />
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-2">{news.date}</p>
              <h3 className="text-lg font-semibold text-gray-800">
                {news.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to={"/news"}
          className="bg-primary hover:bg-primary-light text-white font-semibold py-2 px-6 rounded"
        >
          আরও
        </Link>
      </div>
    </div>
  );
};

export default News;
