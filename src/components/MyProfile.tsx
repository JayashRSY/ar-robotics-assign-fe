import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";
import { RootState } from "../app/store";

const MyProfile = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <div className="font-bold text-xl mb-2 text-center">My Profile</div>
      <div>{user && <ProfileCard data={user} />}</div>;
    </>
  );
};
export default MyProfile;
