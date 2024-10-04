import { IUser } from "../interfaces/IApiTypes";

const ProfileCard = ({ data }: { data: IUser }) => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-gray-100 rounded-2xl shadow-neumorphism p-8 transition-transform transform hover:scale-105">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">{data.name}</h2>
        <p className="text-md font-light text-gray-500 mb-4">{data.email}</p>
      </div>

      <div className="space-y-3 text-left text-gray-600 font-medium">
        <p>
          <span className="text-indigo-600 font-semibold">Age:</span> {data.age}
        </p>
        <p>
          <span className="text-indigo-600 font-semibold">Address:</span>{" "}
          {data.address}
        </p>
        <p>
          <span className="text-indigo-600 font-semibold">Role:</span>{" "}
          {data.role}
        </p>
        <p>
          <span className="text-indigo-600 font-semibold">Joined:</span>{" "}
          {new Date(data.createdAt).toLocaleDateString()}
        </p>
        <p>
          <span className="text-indigo-600 font-semibold">Last Updated:</span>{" "}
          {new Date(data.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
