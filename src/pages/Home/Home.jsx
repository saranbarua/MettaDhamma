import Event from "./Event";
import News from "./News";
import Slidder from "./Slidder";

export default function Home() {
  return (
    <div>
      <Slidder />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Welcome To চট্টগ্রাম সমিতি পূর্বাঞ্চল সৌদি আরব
        </h1>
        <div className=" mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Greater Chittagong Association, Dammam, Saudi Arabia, established on
            <span className="font-medium"> 26th November 2022</span>, is a
            nonpolitical and immigrant-friendly sociable association dedicated
            to fostering a sense of community among the people of Chittagong
            living abroad.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Historic Chittagong, located in the southeastern part of Bangladesh,
            has been a land frequented by saints and dervishes since time
            immemorial. Its geographical location and stunning natural beauty
            make it truly unique. From picturesque hilltops and fertile plains
            adorned with luxuriant crops to shimmering lakes and rivers winding
            through the landscape, Chittagong's charm is unmatched.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The region's long beaches, surfed by gigantic waves, and the
            breathtaking sunsets of summer and autumn add to its allure,
            attracting admirers from across the globe. Glowing Chittagong, with
            its rich history, culture, heroism, and courage, has always been a
            cornerstone of political, sociocultural, and economic significance
            in the history of independent Bangladesh.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Greater Chittagong Association proudly celebrates this legacy while
            serving as a bridge for immigrants in Saudi Arabia to connect,
            support one another, and promote the heritage of their homeland.
          </p>
        </div>
        <News />
        <Event />
      </div>
    </div>
  );
}
