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
        //   toast.success(res.message);
        } else {
          toast.error(res.message);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        // toast.error(err.response?.data?.message || "Error fetching users");
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
    <div className="mx-6 mt-8">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">
        All Users
      </h2>
      {user?.role === "admin" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allUsers?.map((user) => (
            <div
              key={user._id}
              className="bg-white p-6 rounded-2xl shadow-lg relative"
            >
              <ProfileCard data={user} />
              <button
                onClick={() => handleDelete(user._id)}
                type="submit"
                className="absolute bottom-4 right-4 flex items-center justify-center p-2 w-auto bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition-all"
              >
                <Icon.Trash2 className="mr-2" />
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
    </div>
  );
};

export default AllUsers;
