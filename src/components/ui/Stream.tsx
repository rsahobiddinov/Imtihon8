import img from "../../assets/icons/photo.svg";
import { CloudUpload, Paperclip } from "lucide-react";
interface StreapProps {
  ava: string;
  name: string;
  job: string;
  info: string;
  attached: string;
}

const Stream = ({ ava, name, job, info, attached, ...props }: StreapProps) => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex gap-x-[18px] pb-[18px]">
          <img width={57} height={57} src={img} alt="" />
          <div>
            <h4 className="text-[#0A1629] text-[16px] font-bold">{name}</h4>
            <span className="text-[#91929E] text-[14px] font-light">{job}</span>
          </div>
        </div>
        <button className="text-left rounded-[14px] bg-[#F4F9FD] flex gap-x-[16px] text-[#0A1629] text-[17px] font-light p-[15px_13px] leading-[24px] mb-[18px]">
          <div>
            <CloudUpload />
          </div>
          {info}
        </button>
   
        <div></div>
      </div>
    </>
  );
};

export default Stream;
