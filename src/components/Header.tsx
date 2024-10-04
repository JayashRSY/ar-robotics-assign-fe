import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <a className="block text-indigo-600" href="#">
              <span className="sr-only">Home</span>
              <img src={Logo} alt="" className="h-[80px] mt-2" />
            </a>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/profile"
                  >
                    {" "}
                    My Profile{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/all-users"
                  >
                    {" "}
                    All Users{" "}
                  </Link>
                </li>
              </ul>
            </nav>
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

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
