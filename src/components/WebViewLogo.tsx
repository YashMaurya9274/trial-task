import ImageLinks from "../assets/images";

const WebViewLogo = () => {
  return (
    <img
      src={ImageLinks.logoWeb}
      className="hidden lg:inline-flex h-20 w-32 object-contain"
      alt=""
    />
  );
};

export default WebViewLogo;
