const Footer = () => {
  return (
    <div className="bg-[#96AD90] py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-black font-bold tracking-tight">
          PropertyPulse
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer text-black">Privacy Policy</p>
          <p className="cursor-pointer text-black">Terms of service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
