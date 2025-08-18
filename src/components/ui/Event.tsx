import { ChevronUp, ChevronDown, Clock } from "lucide-react";

interface EventProps {
  h4: string;
  data: string;
  button: string;
}
const Icon = {
  topArrowIcon: ChevronUp,
  bottomArrowIcon: ChevronDown,
  Watch: Clock,
};

const Event = ({ h4, data, button }: EventProps) => {
  return (
    <>
      <div className="w-full h-[105px] border-l-4 border-[#3F8CFF] flex flex-col mt-[24px] pl-[20px] justify-between py-[7px]">
        <div className="flex justify-between">
          <h4 className="font-semibold text-[16px] text-[#0A1629] mb-[3px]">
            {h4}
          </h4>
          <div className="pr-[4px]">
            <Icon.topArrowIcon className="w-4 h-4" />
            <Icon.bottomArrowIcon className="w-4 h-4" />                       
          </div>
        </div>
        <div className="flex justify-between pr-[24px]">
          <span className="font-light text-[14px] text-[#0A1629] mb-[9px]">
            {data}
          </span>
          <button className="flex gap-x-1 items-center font-bold bg-[#F4F9FD] rounded-[4px] text-[12px] text-[#6b7380] p-[2px] w-[48px] h-[23px]">
            <Icon.Watch className="w-3 h-3" />
            {button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Event;