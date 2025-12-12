import { CirclesWithBar } from "react-loader-spinner";
const OpenNavBar = () => {
  return (
    <div className="z-50 fixed top-2 md:top-[84vh] md:bottom-6 right-2">
      <CirclesWithBar
        height="50"
        width="50"
        color="#e5e5e5"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default OpenNavBar;
