
import services from "../constants/Services";
// import ElectricBorder from "./ElectricBorder";
type ServiceCardProp = {
  image: string;
  title: string;
  description: string;
};
const ServiceCard = ({ image, title }: ServiceCardProp) => {
  return (
    <div
      className="
                grid gap-4 
                grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
                sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
                md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
                ">
      
        {services.map((service, i) => (  
          <div className="m-4 min-h-[15em] border border-slate-500/30 p-4 rounded-2xl" key={i}>
            <img src={image} alt={service.title} className="w-full block max-w-[15em]" />
            <h1 className="font-bold text-3xl mb-4">{title}</h1>
            <p>{service.description}</p>
          </div>
        ))}
    </div>
  );
};

export default ServiceCard;
