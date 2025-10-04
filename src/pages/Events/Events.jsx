import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import useEvents from "../../../components/hooks/useEvents";

const Events = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useEvents();

  const handleEventClick = (event) => {
    navigate(`/events/${event._id}`, { state: { event } });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.map((event) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event)}
            className="border rounded-lg cursor-pointer shadow-lg overflow-hidden"
          >
            <img
              src={`http://backend.mettadhamma.com${event?.image}`}
              alt={event.title}
              className="w-full h-60 object-cover"
              crossOrigin="anonymous"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{event?.title}</h3>
              <p className="text-gray-600 text-sm mb-1">
                📅 {event?.date} | 🕒 {event?.time}
              </p>
              <p className="text-gray-600 text-sm">📍 {event?.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
