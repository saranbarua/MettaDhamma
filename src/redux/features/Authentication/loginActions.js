import axios from "axios";
import { setLoading, setError, setLoggedIn, resetLogin } from "./loginSlice";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import apiurl from "../../../../apiurl/apiurl";

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.post(
      `${apiurl.mainUrl}/member/login`,
      credentials
    );
    if (response.data.success === true) {
      Cookies.set("token", response.data.token, {
        expires: 7,
      });
      dispatch(setLoggedIn(true));
      dispatch(setError(null)); // Clear any previous errors
      toast.success("Login successful!");
    } else {
      dispatch(setError(response.data.message)); // Dispatch error message from server
      toast.error(response.data.message || "Login failed");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch(setError(errorMessage)); // Dispatch network error message
    toast.error(errorMessage || "An unexpected error occurred");
  } finally {
    dispatch(setLoading(false)); // Stop loading regardless of success or failure
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(resetLogin()); // Reset user state
  Cookies.remove("token"); // Remove token cookie
  toast("You have been logged out.", { icon: "👋" });
};
