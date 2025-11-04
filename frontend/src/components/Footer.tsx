import { Instagram, Facebook, Linkedin } from 'lucide-react'
const Footer = () => {
  return (
    <div className="min-h-[60vh] w-full bg-black">
      <div className="bg-black h-8"></div>

      <footer className="text-white my-6 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* About Us */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold my-6">About Us</h2>
          <p className="text-gray-300 text-[16px] max-w-xs">
            We are the food delivery platform working since 1999. We provide excellent facility to deliver high quality food and services. Currently, we are available in Province 1 as a startup. Later, we will expand with our quality service. We have served around 3000 customers.
          </p>
        </div>

        {/* Call Us */}
        <div className="flex flex-col items-center text-center lg:ml-22">
          <h2 className="text-3xl font-bold my-6">Call Us</h2>
          <p className="text-gray-300 text-[16px] max-w-xs">
            Our helpline stays the same across Kathmandu, Bhaktapur, Chitwan, and Butwal for seamless support.
          </p>
          <p className="text-xl font-semibold mt-3 text-gray-300">Contact Details</p>
          <p className="mt-1 text-gray-300">Support: support@prashu.com</p>
          <p className="mt-1 text-gray-300">Info: info@prashu.com</p>
          <p className="mt-1 text-gray-300">Manager: man.delivery@prashu.com</p>
        </div>

        {/* Available */}
        <div className="flex flex-col items-center text-center lg:ml-10">
          <h2 className="text-3xl font-bold my-6">Available</h2>
          {['Jhapa', 'Dharan', 'Biratnagar', 'Itahari', 'Inaruwa', 'Duhabi', 'Itara', 'Illam'].map((city) => (
            <p key={city} className="mt-3 text-gray-300 text-[16px]">{city}</p>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold my-6">Social Links</h2>
          <div className="flex justify-center gap-4 mt-3">
            <a href="https://www.instagram.com/pr4sh4nn4.sh/" target="_blank" rel="noopener noreferrer">
              <Instagram size={30} />
            </a>
            <a href="https://facebook.com/ghimire.prashanna.2025" target="_blank" rel="noopener noreferrer">
              <Facebook size={30} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={30} />
            </a>
          </div>
        </div>
      </footer>

      <div className="bg-black flex justify-center items-center w-full h-8">
        <span className="font-[Arial] italic text-xs text-gray-200">
          Copyright (c) 2025 Author. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;


