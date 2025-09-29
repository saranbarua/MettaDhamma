import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import apiurl from "../../apiurl/apiurl";
import fetchData from "../../utils/fetchData";

const useAllCommitee = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(true);

  // fetching data
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      setIsError(null);
      const url = `${apiurl.mainUrl}/committee-year`;
      const token = Cookies.get("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const result = await fetchData(url, config);
        if (result?.success === true) {
          setData(result?.data);
        }
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataFromApi();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useAllCommitee;
