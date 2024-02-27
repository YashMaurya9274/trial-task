import ImageLinks from "../assets/images";

type Props = {
  imageSrc: string;
};

const ImageWithGradient = ({ imageSrc }: Props) => {
  return (
    <div className="hidden lg:inline-flex w-1/2 justify-center relative">
      <img
        src={ImageLinks.gradientBackgroundImage}
        className="absolute h-full object-fill w-full"
        alt="bg gradient"
      />
      <img
        src={imageSrc}
        className="w-full z-10 my-auto rounded-br-xl"
        alt="auth image"
      />
    </div>
  );
};

export default ImageWithGradient;
