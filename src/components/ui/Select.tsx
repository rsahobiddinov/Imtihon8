import "../../assets/styles/select.css";

interface SelectProps {
  label: string;
  selectClassName: string;
  placeholder: string;
}

const Select = ({
  label,
  selectClassName,
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <>
      <div>
        <label className="select-label">{label}</label>
        <div>
          <select className={`select w-full mt-1.5  ${selectClassName}`}>
            <option>{placeholder}</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Select;
