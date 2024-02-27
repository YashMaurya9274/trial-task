type Props = {
  logo: string;
};

const SocialAuth = ({ logo }: Props) => {
  return (
    <div className="p-3 border border-gray-200 rounded-lg hover:opacity-75 cursor-pointer">
      <img src={logo} className="h-4 w-4 object-contain flex-shrink" alt="" />
    </div>
  );
};

export default SocialAuth;
