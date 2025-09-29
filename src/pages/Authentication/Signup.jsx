import { useState } from "react";
import Input from "../../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import apiurl from "../../../apiurl/apiurl";
import toast from "react-hot-toast";
import Button from "../../../components/Button/Button";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fathersName: "",
    mothersName: "",
    husbandsName: "",
    dateOfBirth: "",
    bloodGroup: "",
    mobileNumberBD: "",
    mobileNumberSA: "",
    presentAddress: "",
    permanentAddress: "",
    religion: "",
    maritalStatus: "",
    nationalIDNo: "",
    workAddress: "",
    refererName: "",
    password: "",
    profileImg: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImg: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a new FormData instance
    const formPayload = new FormData();

    // Append each field individually
    formPayload.append("profileImg", formData.profileImg);
    formPayload.append("fullName", formData.fullName);
    formPayload.append("fathersName", formData.fathersName);
    formPayload.append("mothersName", formData.mothersName);
    formPayload.append("husbandsName", formData.husbandsName);
    formPayload.append("dateOfBirth", formData.dateOfBirth);
    formPayload.append("bloodGroup", formData.bloodGroup);
    formPayload.append("mobileNumberBD", formData.mobileNumberBD);
    formPayload.append("mobileNumberSA", formData.mobileNumberSA);
    formPayload.append("presentAddress", formData.presentAddress);
    formPayload.append("permanentAddress", formData.permanentAddress);
    formPayload.append("religion", formData.religion);
    formPayload.append("maritalStatus", formData.maritalStatus);
    formPayload.append("nationalIDNo", formData.nationalIDNo);
    formPayload.append("workAddress", formData.workAddress);
    formPayload.append("refererName", formData.refererName);
    formPayload.append("password", formData.password);

    const accessToken = Cookies.get("access_token");

    try {
      const response = await axios.post(
        `${apiurl.mainUrl}/member`,
        formPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const result = response?.data;

      if (result.success) {
        toast.success("Member application taken. Wait for the confirmation");
        navigate("/login");
      } else {
        toast.error("Failed to Registration. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Response error:", error.response.data);
        toast.error(
          error.response.data?.message || "Server error occurred. Try again."
        );
      } else if (error.request) {
        // No response received from server
        console.error("Request error:", error.request);
        toast.error("Network error. Please check your connection.");
      } else {
        // Something else went wrong
        console.error("Error:", error.message);
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full my-5 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* Name Input */}
            <Input
              label="Name"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {/* Father's Name Input */}
            <Input
              label="Father's Name"
              type="text"
              id="fathersName"
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              placeholder="Enter your father's name"
            />
            {/* Mother's Name Input */}
            <Input
              label="Mother's Name"
              type="text"
              id="mothersName"
              name="mothersName"
              value={formData.mothersName}
              onChange={handleChange}
              placeholder="Enter your mother's name"
            />
            {/* Husband's Name Input */}
            <Input
              label="Husband's Name"
              type="text"
              id="husbandsName"
              name="husbandsName"
              value={formData.husbandsName}
              onChange={handleChange}
              placeholder="Enter your husband's name"
            />
            {/* Date of Birth Input */}
            <Input
              label="Date of Birth"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {/* Blood Group Input */}
            <Input
              label="Blood Group"
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              placeholder="Enter your blood group"
            />
            {/* Mobile Numbers */}
            <Input
              label="Mobile No (BD)"
              type="text"
              id="mobileNumberBD"
              name="mobileNumberBD"
              value={formData.mobileNumberBD}
              onChange={handleChange}
              placeholder="Enter your Bangladeshi mobile number"
            />
            <Input
              label="Mobile No (KS)"
              type="text"
              id="mobileNumberSA"
              name="mobileNumberSA"
              value={formData.mobileNumberSA}
              onChange={handleChange}
              placeholder="Enter your KS mobile number"
            />
            {/* Present and Permanent Address */}
            <Input
              label="Present Address"
              type="text"
              id="presentAddress"
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleChange}
              placeholder="Enter your present address"
            />
            <Input
              label="Permanent Address"
              type="text"
              id="permanentAddress"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Enter your permanent address"
            />
            {/* Religion Input */}
            <Input
              label="Religion"
              type="text"
              id="religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              placeholder="Enter your religion"
            />
            {/* Married Status */}
            <div className="space-y-2">
              <p className="text-gray-800 font-medium">Married Status</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="maritalStatus"
                    id="maritalStatusYes"
                    value="Yes"
                    checked={formData.maritalStatus === "Yes"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="maritalStatus"
                    value="No"
                    id="maritalStatusNo"
                    checked={formData.maritalStatus === "No"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
            <Input
              label="NID"
              type="text"
              id="nationalIDNo"
              name="nationalIDNo"
              value={formData.nationalIDNo}
              onChange={handleChange}
              placeholder="Enter your National ID number"
            />
            <Input
              label="Work Address"
              type="text"
              id="workAddress"
              name="workAddress"
              value={formData.workAddress}
              onChange={handleChange}
              placeholder="Enter your work address"
            />
            <Input
              label="Refer Name"
              type="text"
              id="refererName"
              name="refererName"
              value={formData.refererName}
              onChange={handleChange}
              placeholder="Enter your reference name"
            />
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Passwords"
            />
            <Input
              label="Profile Image"
              type="file"
              id="profileImg"
              name="profileImg"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Submit Button */}

          <Button
            type="Register"
            title={isSubmitting ? "Processing..." : "Registration"}
            className=" bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-light transition duration-300"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
