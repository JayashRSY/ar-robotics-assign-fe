import Logo from "../../public/1630620393584.svg";
const Home = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">AR Robotics</h1>
      <div className="flex justify-center">
        <img src={Logo} alt="" className="h-[300px] mt-2" />
      </div>
    </>
  );
};
export default Home;
