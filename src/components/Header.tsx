import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../app/store";
import { ISignoutResponse } from "../interfaces/IApiTypes";
import { setUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { signout } from "../api/authApi";
import Logo from "../../public/1630620393584.svg";
// import ProfileButton from "./ProfileButton";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const handleSignout = async () => {
    try {
      const res: ISignoutResponse = await signout();
      if (res.success) {
        dispatch(setUser(undefined));
        localStorage.removeItem("accessToken");
        window.location.reload();
        //   toast.success(res.message);
      } else {
        toast.error(res.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex justify-between h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <a className="block text-indigo-600" href="#">
              <span className="sr-only">Home</span>
              <img src={Logo} alt="" className="h-[80px] mt-2" />
            </a>
          </Link>

          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 text-gray-900 border-b-2 border-indigo-600"
                    : "p-2 text-gray-500 transition hover:text-gray-500/75"
                }
              >
                My Profile
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/all-users"
                className={({ isActive }) =>
                  isActive
                    ? "p-2 text-gray-900 border-b-2 border-indigo-600"
                    : "p-2 text-gray-500 transition hover:text-gray-500/75"
                }
              >
                All Users
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            {user && localStorage.getItem("accessToken") ? (
              <div className="sm:flex sm:gap-4">
                <button
                  onClick={handleSignout}
                  className="block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <Link
                  to="/signin"
                  className="block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 transition hover:text-indigo-600/75 sm:block"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
