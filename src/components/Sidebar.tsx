import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/sidebar.css";
import logo from "../assets/icons/Company's logo(1).svg";
import active from "../assets/icons/active.svg";
import inactive from "../assets/icons/inactive.svg";
import calendar from "../assets/icons/calendar.svg";
import vacation from "../assets/icons/vacations.svg";
import friends from "../assets/icons/friends.svg";
import dev from "../assets/icons/illustration.svg";
import message from "../assets/icons/white.svg";
import logout from "../assets/icons/logout.svg";
import infoportal from "../assets/icons/Infoportal.svg";
import messenger from "../assets/icons/Messenger.svg";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return (
        location.pathname === "/dashboard" ||
        location.pathname === "/dashboard/"
      );
    }
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const getLinkClasses = (path: string) => {
    const baseClasses =
      "w-[200px] grow flex gap-5 py-[11px] pl-[11px] pr-[43px] text-[16px] font-bold rounded-[10px]";
    const activeClasses = "bg-[#ebf3ff] text-[rgba(63,_140,_255,_1)]";
    const inactiveClasses = "text-[rgba(125,_133,_146,_1)]";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

  return (
    <aside className="sidebar mt-[20px] ml-[50px] mb-[30px] mr-[50px] pb-[44px] bg-white rounded-[20px] items-center">
      <div className="top mt-[1px] ml-[24px]">
        <Link to={"/dashboard"}>
          <img src={logo} alt="project-logo" />
        </Link>
        <nav className="flex flex-col mt-[42px] gap-2">
          <div className="flex gap-2">
            <Link to={"/dashboard"} className={getLinkClasses("/dashboard")}>
              <img src={isActive("/dashboard") ? active : inactive} alt="" />{" "}
              Dashboard
            </Link>
            {isActive("/dashboard") && (
              <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
            )}
          </div>
          <div className="flex gap-2">
            <Link
              to={"/dashboard/profile"}
              className={getLinkClasses("/dashboard/profile")}
            >
              <img
                src={isActive("/dashboard/profile") ? active : inactive}
                alt=""
              />{" "}
              Profile
            </Link>
            {isActive("/dashboard/profile") && (
              <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
            )}
          </div>
          <div className="flex gap-2">
            <Link to={"/projects"} className={getLinkClasses("/projects")}>
              <img src={isActive("/projects") ? active : inactive} alt="" />{" "}
              Projects
            </Link>
            {isActive("/projects") && (
              <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
            )}
          </div>
          <div className="flex gap-2">
            <Link to={"/calendar"} className={getLinkClasses("/calendar")}>
              <img src={calendar} alt="" /> Calendar
            </Link>
            {isActive("/calendar") && (
              <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
            )}
          </div>
          <div className="flex gap-2">
            <Link to={"/vacations"} className={getLinkClasses("/vacations")}>
              <img src={vacation} alt="" /> Vacations
            </Link>
            {isActive("/vacations") && (
              <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
            )}
          </div>
          <div className="flex gap-2">
            <Link to={"/employees"} className={getLinkClasses("/employees")}>
              <img src={friends} alt="" /> Employees
            </Link>
            {isActive("/employees") && (
              <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
            )}
          </div>
          <div className="flex gap-2">
            <Link to={"/messenger"} className={getLinkClasses("/messenger")}>
              <img src={messenger} alt="" /> Messenger
            </Link>
            {isActive("/messenger") && (
              <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
            )}
          </div>
          <div className="flex gap-2">
            <Link
              to={"/info-portal"}
              className={getLinkClasses("/info-portal")}
            >
              <img src={infoportal} alt="" /> Info Portal
            </Link>
            {isActive("/info-portal") && (
              <div className="bg-[rgba(63,_140,_255,_1)] w-[4px] h-[44px] rounded-[2px]"></div>
            )}
          </div>
        </nav>
      </div>
      <div className="bottom flex flex-col items-center relative">
        <img src={dev} alt="" className="absolute" />
        <div className="bg-[#ebf3ff] rounded-[24px] px-[24px] pt-[94px] pb-[26px] mt-[46px]">
          <button className="flex bg-[#3f8cff] gap-3 text-[16px] font-bold text-[white] rounded-[24px] py-[20px] px-[15px]">
            <img src={message} alt="" /> Support
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="mt-[50px] flex gap-5 text-[rgba(125,_133,_146,_1)] items-center text-[16px] font-semibold"
        >
          <img src={logout} alt="" /> Log out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;