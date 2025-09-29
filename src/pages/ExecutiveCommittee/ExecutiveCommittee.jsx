import { Link } from "react-router-dom";
import useAllCommitee from "../../../components/hooks/useAllCommitee";
import Loader from "../../../components/Loader/Loader";

export default function ExecutiveCommittee() {
  const { data, isLoading } = useAllCommitee();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-green-700 mb-6">
        Executive Committee
      </h2>

      {/* Committee List */}
      <ul className="space-y-4">
        {data?.map((committee, index) => (
          <li
            key={index}
            className="flex items-center border-b pb-2 last:border-b-0"
          >
            {/* Bullet Point */}
            <span className="text-2xl text-gray-500 mr-2">●</span>

            {/* Committee Year */}
            <Link
              to={`/executive-committee/${committee._id}`}
              state={{ members: committee }}
              className="text-blue-600 text-xl hover:underline transition duration-300"
            >
              {committee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
