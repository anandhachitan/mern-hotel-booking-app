import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#34495E] py-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <span className="text-3xl text-white font-bold tracking-tight">
            PropertyPulse
          </span>
        </Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer text-white">Privacy Policy</p>
          <p className="cursor-pointer text-white">Terms of service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
