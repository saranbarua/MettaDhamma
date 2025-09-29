import { Link } from "react-router-dom";
import useProfile from "../../../components/hooks/useProfile";
import useSubscription from "../../../components/hooks/useSubscription";
import Loader from "../../../components/Loader/Loader";

export default function Profile() {
  const { profileData, isLoading, error } = useProfile();
  const { subscirptionsData } = useSubscription();
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        Failed to load profile data. Please try again later.
      </p>
    );
  }

  const {
    fullName,
    fathersName,
    husbandsName,
    mothersName,
    dateOfBirth,
    bloodGroup,
    mobileNumberBD,
    mobileNumberSA,
    permanentAddress,
    presentAddress,
    workAddress,
    religion,
    maritalStatus,
    nationalIDNo,
    refererName,
    profileImg,
    isApproved,
    memberID,
    memberCard,
  } = profileData || {};
  return (
    <div className="p-6">
      <div className="bg-white shadow p-4 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Member Profile</h1>
          <span
            className={`px-4 py-2 rounded-full text-sm ${
              isApproved
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {isApproved ? "Approved" : "Not Approved"}
          </span>
        </div>
        <p className="text-sm my-3 text-gray-500 mt-2">Member ID: {memberID}</p>
        <Link
          to={"/change-password"}
          className="bg-primary-light text-white p-1 "
        >
          Change Password
        </Link>
      </div>

      <main className="mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <section className="bg-white p-4 shadow rounded-md">
            <img
              src={`https://chattogram-somiti.makeupcoders.com${profileImg}`}
              alt={`${fullName}'s profile`}
              className="w-32 h-32 rounded-full mx-auto"
              crossOrigin="anonymous"
            />
            <h2 className="text-xl font-bold text-center mt-4">{fullName}</h2>
            <p className="text-center text-gray-500">{religion}</p>
          </section>

          {/* Personal Information */}
          <section className="bg-white p-4 shadow rounded-md lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Father's Name", value: fathersName },
                { label: "Mother's Name", value: mothersName },
                husbandsName && {
                  label: "Husband's Name",
                  value: husbandsName,
                },
                { label: "Date of Birth", value: dateOfBirth },
                { label: "Blood Group", value: bloodGroup || "N/A" },
                { label: "Marital Status", value: maritalStatus },
                { label: "National ID", value: nationalIDNo },
                refererName && { label: "Referer Name", value: refererName },
              ]
                .filter(Boolean)
                .map((info, idx) => (
                  <div key={idx}>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p>{info.value}</p>
                  </div>
                ))}
            </div>
          </section>

          {/* Contact & Work Details */}
          <section className="bg-white p-4 shadow rounded-md lg:col-span-3">
            <h3 className="text-lg font-bold mb-4">Contact & Work Details</h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Mobile (BD)", value: mobileNumberBD },
                { label: "Mobile (SA)", value: mobileNumberSA },
                { label: "Permanent Address", value: permanentAddress },
                { label: "Present Address", value: presentAddress },
                { label: "Work Address", value: workAddress },
              ].map((contact, idx) => (
                <div key={idx}>
                  <p className="text-sm text-gray-500">{contact.label}</p>
                  <p>{contact.value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className="md:flex grid gap-4 my-4 w-full  justify-between ">
        <div className="bg-white p-4 shadow rounded-md ">
          <h3 className="text-lg font-bold mb-4">Membership Card</h3>
          <div className="flex flex-col items-center">
            <img
              src={`https://chattogram-somiti.makeupcoders.com${memberCard}`}
              alt={`${fullName}'s Membership Card`}
              className="rounded-lg shadow-lg border object-contain"
              crossOrigin="anonymous"
            />
            <a
              href={`https://chattogram-somiti.makeupcoders.com${memberCard}`}
              download={`Membership_Card_${memberID}.png`}
              className="mt-4 px-4 py-2 bg-primary text-white font-medium rounded-lg shadow hover:bg-primary-light"
            >
              Download Membership Card
            </a>
          </div>
        </div>
        <div className="overflow-auto md:w-2/3">
          <table className="min-w-full border-collapse border border-gray-200 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border-b border-gray-200 px-4 py-2 font-semibold text-gray-700">
                  Deposit Month
                </th>
                <th className="border-b border-gray-200 px-4 py-2 font-semibold text-gray-700">
                  Deposit Year
                </th>
                <th className="border-b border-gray-200 px-4 py-2 font-semibold text-gray-700">
                  Monthly Fee
                </th>
                <th className="border-b border-gray-200 px-4 py-2 font-semibold text-gray-700">
                  Status
                </th>
                <th className="border-b border-gray-200 px-4 py-2 font-semibold text-gray-700">
                  Deposit Date
                </th>
              </tr>
            </thead>
            <tbody>
              {subscirptionsData.map((item, index) => (
                <tr
                  key={item._id}
                  className={index % 2 === 0 ? "even:bg-gray-50" : ""}
                >
                  <td className="border-b border-gray-200 px-4 py-2">
                    {item.depositeMonth}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    {item.depositeYear}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    ${item.monthlyFee}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                        item.status === "paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {item.status.charAt(0).toUpperCase() +
                        item.status.slice(1)}
                    </span>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    {new Date(item.depositeDate).toISOString().split("T")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
