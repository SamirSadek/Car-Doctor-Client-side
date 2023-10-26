import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero py-10">
      <div className="hero-content flex-col lg:flex-row ">
        <div className='lg:w-1/2 relative'>
        <img
          src={person}
          className="w-2/3 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 absolute top-1/2 right-24 border-8 border-white rounded-lg shadow-2xl"
        />
        </div>
        <div className='lg:w-1/2 space-y-5'>
            <p className='text-xl font-bold text-[#FF3811]'>
            About Us
            </p>
          <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br />
           in this field</h1>
          <p className='text-base font-normal'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <p>
          The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.           </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
