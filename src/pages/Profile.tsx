import { useSelector } from "react-redux";
import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
import { RootState } from "../app/store";
import * as Icon from "react-feather";
// import { toast } from "react-toastify";
// import { setUser } from "../features/auth/authSlice";

const Profile = () => {
  // const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { isLoading } = useSelector((state: RootState) => state.layout);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState<{
    name: string;
    age: number;
    address: string;
    email: string;
    password: string;
  }>({
    name: user?.name || "",
    age: user?.age || 0,
    address: user?.address || "",
    email: user?.email || "",
    password: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4"> */}
        <div
          className="relative group w-32 h-32 self-center cursor-pointer rounded-full object-cover mt-2"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-cover rounded-full">
            <Icon.Edit className="text-white text-2xl" />
          </div>
        </div>
        <input
          defaultValue={formData.name}
          type="text"
          name="name"
          placeholder="Name"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
          required
        />
        <input
          defaultValue={formData.email}
          type="email"
          name="email"
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-slate-100 rounded-lg p-3"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {isLoading ? "Loading..." : "Update"}
        </button>
      {/* </form> */}
    </div>
  );
};
export default Profile;
