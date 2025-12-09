import ElectricBorder from "../ElectricBorder";
type ServiceCardProp = {
  image: string;
  title: string;
  description: string;
};
const ServiceCard = ({ image, title, description }: ServiceCardProp) => {
  return (
    <div
      className="
                grid gap-4 
                grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
                sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
                md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
                ">
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}>
        <div className="m-4 min-h-[15em]">
          <img src={image} alt={title} className="w-full block max-w-[15em]" />
          <h1 className="font-bold text-3xl mb-4">{title}</h1>
          <p>{description}</p>
        </div>
      </ElectricBorder>
    </div>
  );
};

export default ServiceCard;
