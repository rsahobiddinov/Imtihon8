import { PenBox, Settings } from "lucide-react";
import ava from "../assets/icons/photo.svg";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import "../index.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const ProfilControl = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3>Profile Control Component</h3>
      <p>Здесь будет содержимое ProfilControl</p>
    </div>
  );
};

const Profil = () => {
  const [currenTab, setCurrenTab] = useState("profil-control");

  return (
    <div className="ml-[240px] pt-[50px] pb-[30px] ">
      <div className="flex justify-between items-center mt-[10px]">
        <h1 className="text-[35px] font-bold ">My Profile</h1>
        <NavLink 
          to={"/settings"} 
          className="flex items-center gap-x-2 text-[15px] bg-white shadow p-[12px_15px] rounded-[14px]"
        >
          <Settings />
        </NavLink>
      </div>
      
      <div className="flex">
        <div className="w-[275px] shadow bg-white rounded-[24px] mt-[28px] pt-[26px]">
          <div className="relative mb-[16px] px-[23px]">
            <button className="left-53 absolute p-[11px_11px] bottom-6 bg-[#F4F9FD] rounded-full">
              <PenBox />
            </button>
            <div className="border-[#3F8CFF] border-2 rounded-full w-[64px] h-[64px] absolute"></div>
            <img width={64} height={64} src={ava} alt="" />
          </div>
          
          <div className="px-[23px] flex flex-col gap-y-1 text-[#0A1629]">
            <h4 className="text-[21px] font-bold">Evan Yetas</h4>
            <span className="text-[14px] font-light">UI/UX Designer</span>
          </div>
          
          <hr className="mt-[29px] text-[#dbe2ea] border-[1px]" />
          
          <div className="px-[23px] pt-[28px]">
            <h3 className="text-[#0A1629] text-[18px] font-bold">Main Info</h3>
            <div>
              <div className="pt-[12px]">
                <Input
                  inputClassName="w-full"
                  label="Position"
                  placeholder="UI/UX Designer"
                  type="text"
                />
              </div>
              <div className="pt-[15px]">
                <Input
                  inputClassName="w-full"
                  label="Company"
                  placeholder="Cadabra"
                  type="text"
                />
              </div>
              <div className="pt-[15px]">
                <Input
                  inputClassName="w-full"
                  label="Location"
                  placeholder="NYC, New York, USA"
                  type="text"
                />
              </div>
              <div className="pt-[15px] pb-[15px]">
                <Input
                  inputClassName="w-full"
                  label="Birthday Date"
                  placeholder="May 19, 1996"
                  type="date"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-[#0A1629] text-[18px] font-bold">
                Contact Info
              </h3>
              <div className="pt-[12px]">
                <Input
                  inputClassName="w-full"
                  label="Email"
                  placeholder="evanyates@gmail.com"
                  type="email"
                />
              </div>
              <div className="pt-[12px]">
                <Input
                  inputClassName="w-full"
                  label="Mobile Number"
                  placeholder="+1 675 346 23-10"
                  type="tel"
                />
              </div>
              <div className="pt-[12px] pb-[39px]">
                <Input
                  inputClassName="w-full"
                  label="Skype"
                  placeholder="Evan 2256"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {currenTab === "profil-control" ? (
        <ProfilControl />
      ) : currenTab === "settings" ? (
        <Settings />
      ) : null}
    </div>
  );
};

export default Profil;