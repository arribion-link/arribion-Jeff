import { BsBroadcast } from "react-icons/bs";
import ElectricBorder from "./ElectricBorder";
const FeaturedProjects = () => {
  return (
    <div>
      <ElectricBorder
        className="flex gap-4"
        speed={1}
        chaos={0.49}
              thickness={2}>
              <div className="flex flex-col md:flex-row gap-4 m-4">           
                <div className="border border-slate-700 rounded-2xl p-4 max-w-[15em] min-h-[6em]">
                <img src="" alt="" />
                <div className="flex justify-between">
                    <div>Hospital Management System</div>
                    <BsBroadcast size={20} />
                </div>
                </div>
                <div className="border border-slate-700 rounded-2xl p-4 max-w-[15em] min-h-[6em]">
                <img src="" alt="" />
                <div className="flex justify-between">
                    <div>Hospital Management System</div>
                    <BsBroadcast size={20} />
                </div>
                </div>
                <div className="border border-slate-700 rounded-2xl p-4 max-w-[15em] min-h-[6em]">
                <img src="" alt="" />
                <div className="flex justify-between">
                    <div>Hospital Management System</div>
                    <BsBroadcast size={20} />
                </div>
                </div>
              </div>
      </ElectricBorder>
      <div></div>
    </div>
  );
};

export default FeaturedProjects;
