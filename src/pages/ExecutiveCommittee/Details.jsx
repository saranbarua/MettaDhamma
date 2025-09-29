import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import apiurl from "../../../apiurl/apiurl";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams(); // Get the id from the URL
  const [committeeData, setCommitteeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data dynamically based on id
    const fetchCommitteeData = async () => {
      try {
        const response = await fetch(
          `${apiurl.mainUrl}/committee/committee-year/${id}` // Replace with your API endpoint
        );
        const data = await response.json();
        setCommitteeData(data?.data);
      } catch (error) {
        console.error("Error fetching committee data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCommitteeData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!committeeData) {
    return (
      <p className="text-center text-red-600">
        No data found for this committee.
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
        {committeeData.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {committeeData.map((committee, index) => {
          const fullImageUrl = `https://chattogram-somiti.makeupcoders.com${committee.image}`;
          return (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-lg text-center"
            >
              <img
                src={fullImageUrl}
                alt={committee.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full"
                crossOrigin="anonymous"
              />
              <h3 className="text-xl font-semibold mb-2">{committee.name}</h3>
              <p className="text-gray-600">{committee.position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
