import { INPUT_TYPE } from "../types/enums";

type Props = {
  label: string;
  type: INPUT_TYPE;
  placeholder: string;
  value?: string;
  onChange?: (val: string) => void;
};

const TextField = ({ label, placeholder, type, onChange, value }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="uppercase tracking-wider text-xs">{label}</p>
      <input
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        type={type}
        className="outline-none border border-gray-300 rounded-md w-full p-2 text-sm placeholder:text-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
