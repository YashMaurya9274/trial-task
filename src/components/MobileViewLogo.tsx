import ImageLinks from "../assets/images";

const MobileViewLogo = () => {
  return (
    <img
      src={ImageLinks.logoMobile}
      className="lg:hidden h-24 w-24 object-contain mx-auto mt-14"
      alt=""
    />
  );
};

export default MobileViewLogo;
