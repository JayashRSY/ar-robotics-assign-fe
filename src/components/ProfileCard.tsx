import { IUser } from "../interfaces/IApiTypes";

const ProfileCard = ({ data }: { data: IUser }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          <strong>Name:</strong> {data.name}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Age:</strong> {data.age}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Address:</strong> {data.address}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Email:</strong> {data.email}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Role:</strong> {data.role}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Joined:</strong>{" "}
          {new Date(data.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Last Updated:</strong>{" "}
          {new Date(data.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
