import ImageLinks from "../assets/images";

const BackgroundImage = () => {
  return (
    <img
      src={ImageLinks.backgoundImage}
      className="absolute w-full h-screen -mt-2 sm:mt-0 object-cover"
      alt=""
    />
  );
};

export default BackgroundImage;
