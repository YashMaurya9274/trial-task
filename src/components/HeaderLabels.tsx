type Props = {
  labelOne: string;
  labelTwo: string;
};

const HeaderLabels = ({ labelOne, labelTwo }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg">{labelOne}</h2>
      <p className="text-xs text-gray-400 font-medium">{labelTwo}</p>
    </div>
  );
};

export default HeaderLabels;
