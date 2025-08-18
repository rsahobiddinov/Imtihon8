interface CardProps {
  name: string;
  job: string;
  button: string;
  img: string;
  cardClassName: string;
}

const WorkloadCard = ({
  name,
  img,
  job,
  button,
  cardClassName,
  ...props
}: CardProps) => {
  return (
    <>
      <div
        className={`w-[175px] h-[180px] ${cardClassName} rounded-[24px] flex flex-col items-center justify-center`}
      >
        <img width={50} height={50} src={img} alt="avatar" />
        <div className="flex flex-col items-center ">
          <h4 className="font-semibold text-[16px] text-[#0A1629] mb-[3px]">
            {name}
          </h4>
          <span className="font-light text-[14px] text-[#0A1629] mb-[9px]">
            {job}
          </span>
          <button className="border-2 border-[#7D8592] rounded-[4px] text-[12px] text-[#6b7380] p-[2px] w-[48px] h-[23px] ">
            {button}
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkloadCard;
