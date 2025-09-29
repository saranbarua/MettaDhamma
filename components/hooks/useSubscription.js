import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import fetchData from "../../utils/fetchData";
import toast from "react-hot-toast";
import apiurl from "../../apiurl/apiurl";

const useSubscription = () => {
  const [subscirptionsData, setSubscirptionsData] = useState([]);
  const [isSubsLoading, setIsSubsLoading] = useState(true);

  // Fetching data using token
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsSubsLoading(true);

      // Retrieve token directly
      const token = Cookies.get("token");
      if (!token) {
        toast.error("Token not found! Please log in again.");
        setIsSubsLoading(false);
        return;
      }

      const url = `${apiurl.mainUrl}/subscription/member-subscription`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include token here
        },
      };

      try {
        const result = await fetchData(url, config); // Using fetchData utility
        if (result?.success) {
          setSubscirptionsData(result?.data);
        } else {
          toast.error(result?.message || "Failed to fetch profile data.");
        }
      } catch (error) {
        toast.error(error.message || "An error occurred while fetching data.");
      } finally {
        setIsSubsLoading(false);
      }
    };

    fetchDataFromApi();
  }, []); // Dependency array left empty as it runs only once on mount

  return {
    subscirptionsData,
    isSubsLoading,
  };
};

export default useSubscription;
