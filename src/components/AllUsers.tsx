import * as Icon from "react-feather";
import { deleteUser, getAllUser } from "../api/userApi";
import { toast } from "react-toastify";
import { setAllUsers } from "../features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import ProfileCard from "./ProfileCard";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const { allUsers } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res: any = await getAllUser();
        if (res.success) {
          dispatch(setAllUsers(res.data));
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        toast.error(err.response?.data?.message || "Error fetching users");
      }
    };
    fetchAllUser();
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await deleteUser(id);
      if (res.success) {
        dispatch(setAllUsers(allUsers?.filter((user) => user._id !== id)));
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Error deleting user");
    }
  };

  return (
    <>
      <div className="font-bold text-xl mb-2 text-center">All Users</div>
      {user?.role === "admin" ? (
        <div className="flex flex-wrap mx-6">
          {allUsers?.map((user) => (
            <div className="m-6" key={user._id}>
              <ProfileCard data={user} />
              <button
                onClick={() => handleDelete(user._id)}
                type="submit"
                className="flex justify-center p-2 mt-2 w-full rounded-lg bg-red-600 font-medium text-white"
              >
                <Icon.Trash2 color="white" className="mr-2" />
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-6 text-gray-500">
          Only Admins can view all users
        </div>
      )}
    </>
  );
};

export default AllUsers;
