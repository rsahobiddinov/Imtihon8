// components/ui/Icon.js
import React from 'react';

// Импорты существующих иконок
import CompanyLogo from '../../assets/icons/Companys logo(1).svg';
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
  
  // Иконка Calendar (исправлена)
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

  // Добавлена недостающая иконка topArrowIcon
  topArrowIcon: () => (
    // Временная SVG иконка стрелки вверх (замените на вашу иконку)
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
    // Если у вас есть файл иконки, замените на:
    // <img src={TopArrowIcon} alt="Top Arrow" className="w-3 h-3" />
  ),

  // Добавлена иконка Filter
  Filter: () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      className="w-5 h-5"
    >
      <path 
        d="M3 6H17M6 12H14M8 18H12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
    // Если у вас есть файл иконки filter.svg, замените на:
    // <img src={FilterIcon} alt="Filter" className="w-5 h-5" />
  ),

  // Добавлена иконка bottomIcon (стрелка вниз)
  bottomIcon: () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      className="w-4 h-4"
    >
      <path 
        d="M4 6L8 10L12 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
    // Если у вас есть файл иконки, замените на:
    // <img src={BottomArrowIcon} alt="Bottom Arrow" className="w-4 h-4" />
  ),
};

export default Icon;