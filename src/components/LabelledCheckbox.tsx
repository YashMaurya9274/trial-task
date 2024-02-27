type Props = {
  label: string;
  checked?: boolean;
};

const LabelledCheckbox = ({ label, checked }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" checked={checked} />
      <span className="font-medium text-xs">{label}</span>
    </div>
  );
};

export default LabelledCheckbox;
