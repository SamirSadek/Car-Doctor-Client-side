const ServiceCard = ({service}) => {
    const {title, img, price} = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="h-64 rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl font-semibold text-[#FF3811]">Price : ${price}</p>
        
      </div>
    </div>
  );
};

export default ServiceCard;
