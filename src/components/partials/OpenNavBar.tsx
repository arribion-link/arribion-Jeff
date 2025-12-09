import { CirclesWithBar } from "react-loader-spinner";
const OpenNavBar = () => {
  return (
    <div className="fixed bottom-2 right-2">
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
