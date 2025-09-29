import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import fetchData from "../../utils/fetchData";
import toast from "react-hot-toast";
import apiurl from "../../apiurl/apiurl";

const useProfile = () => {
  const [profileData, setProfileData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetching data
  useEffect(() => {
    const url = `${apiurl.mainUrl}/member/member-profile`;
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      const token = Cookies.get("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const result = await fetchData(url, config);
        if (result?.success === true) {
          setProfileData(result?.data);
        }
        if (result?.success === false) {
          toast.error(result?.message);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataFromApi();
  }, []);

  return {
    profileData,
    isLoading,
  };
};

export default useProfile;
