import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,title, img, price} = service;
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


        <div className='flex justify-between items-center'>
        <p className="text-xl font-semibold text-[#FF3811]">Price : ${price}</p>
        <Link to={`/checkout/${_id}`}><AiOutlineArrowRight className='text-[#FF3811] text-xl'/></Link>
          </div>        
      </div>
    </div>
  );
};

export default ServiceCard;
