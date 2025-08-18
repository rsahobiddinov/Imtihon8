import React from 'react';
import CompanyLogo from '../../assets/icons/Company\'s logo(1).svg';
import ActiveIcon from '../../assets/icons/active.svg';
import InactiveIcon from '../../assets/icons/inactive.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import VacationIcon from '../../assets/icons/vacations.svg';
import FriendsIcon from '../../assets/icons/friends.svg';
import MessageIcon from '../../assets/icons/white.svg';
import LogoutIcon from '../../assets/icons/logout.svg';
import InfoportalIcon from '../../assets/icons/Infoportal.svg';
import MessengerIcon from '../../assets/icons/Messenger.svg';
const Icon = {
  companyLogow: () => (
    <img src={CompanyLogo} alt="Company Logo" className="h-6 w-auto" />
  ),
  
  Dashboard: () => (
    <img src={ActiveIcon} alt="Dashboard" className="w-5 h-5" />
  ),
  
  Projects: () => (
    <img src={InactiveIcon} alt="Projects" className="w-5 h-5" />
  ),
  Calendar: () => (
    <img src={CalendarIcon} alt="Calendar" className="w-4 h-4" />
  ),
  
  Vacations: () => (
    <img src={VacationIcon} alt="Vacations" className="w-5 h-5" />
  ),
  
  Employees: () => (
    <img src={FriendsIcon} alt="Employees" className="w-5 h-5" />
  ),
  
  Messenger: () => (
    <img src={MessengerIcon} alt="Messenger" className="w-5 h-5" />
  ),
  
  InfoPortal: () => (
    <img src={InfoportalIcon} alt="Info Portal" className="w-5 h-5" />
  ),
  
  message: () => (
    <img src={MessageIcon} alt="Message" className="w-4 h-4" />
  ),
  
  Logout: () => (
    <img src={LogoutIcon} alt="Logout" className="w-5 h-5" />
  ),
  topArrowIcon: () => (
    <svg 
      width="12" 
      height="12" 
      viewBox="0 0 12 12" 
      fill="none" 
      className="w-3 h-3"
    >
      <path 
        d="M6 2L10 6H8V10H4V6H2L6 2Z" 
        fill="#FFBD21"
      />
    </svg>
  ),
};

export default Icon;