import { Link, useNavigate } from "react-router-dom";
import useEvents from "../../../components/hooks/useEvents";
import Loader from "../../../components/Loader/Loader";

const Event = () => {
  const { data, isLoading } = useEvents();
  const slicedNewsData = data?.slice(0, 3);
  const navigate = useNavigate();

  const handleDetailsClick = (event) => {
    navigate(`/events/${event._id}`, { state: { event } });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold my-8">আমাদের কার্যক্রম</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slicedNewsData?.map((event, index) => (
          <div
            key={index}
            className="bg-teal-600 text-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">{event?.title}</h3>
            <p className="text-sm mb-4">{event?.description}</p>
            <button
              onClick={() => handleDetailsClick(event)}
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              বিস্তারিত দেখুন
            </button>
          </div>
        ))}
      </div>
      <div className="my-6">
        <Link
          to={"/events"}
          className="bg-primary hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          আরও
        </Link>
      </div>
    </div>
  );
};

export default Event;
