import { useEffect, useState } from "react";
import fetchData from "../../utils/fetchData";
import apiurl from "../../apiurl/apiurl";

const useNews = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(true);

  // fetching data
  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      setIsError(null);
      const url = `${apiurl.mainUrl}/news-event/news`;

      try {
        const result = await fetchData(url);
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

export default useNews;
